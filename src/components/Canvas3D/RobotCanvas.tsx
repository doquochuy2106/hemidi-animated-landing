"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RobotCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, WebGLRenderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(5, 10, 7);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const greenRimLight = new THREE.PointLight(0x00e599, 4, 15);
    greenRimLight.position.set(-4, 3, 2);
    scene.add(greenRimLight);

    const blueRimLight = new THREE.PointLight(0x38bdf8, 3, 15);
    blueRimLight.position.set(4, 2, -1);
    scene.add(blueRimLight);

    // 3. Model & Animation Mixer Setup
    let mixer: THREE.AnimationMixer | null = null;
    const actions: { [key: string]: THREE.AnimationAction } = {};
    let activeAction: THREE.AnimationAction | null = null;
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);

    // Helper to calculate pixel-perfect horizontal center in 3D world space from DOM elements
    const getTargetX = (targetId: string, fallback = 2.4) => {
      const mobile = window.innerWidth < 1024;
      if (mobile) return 0;

      const el = document.getElementById(targetId);
      if (!el) return fallback;

      const rect = el.getBoundingClientRect();
      const screenX = rect.left + rect.width / 2;
      const ndcX = (screenX / window.innerWidth) * 2 - 1;

      const vFov = THREE.MathUtils.degToRad(camera.fov);
      const visibleHeight = 2 * Math.tan(vFov / 2) * camera.position.z;
      const visibleWidth = visibleHeight * camera.aspect;

      return (ndcX * visibleWidth) / 2;
    };

    // Default Hero state (dynamically centered horizontally inside right arch, grounded at y = -0.75)
    const isMobile = window.innerWidth < 1024;
    const initialHeroX = getTargetX("hero-arch-target", 2.4);
    robotGroup.position.set(isMobile ? 0 : initialHeroX, isMobile ? -0.8 : -0.75, 0);
    robotGroup.rotation.set(0, -0.35, 0);
    robotGroup.scale.set(isMobile ? 0.75 : 1.05, isMobile ? 0.75 : 1.05, isMobile ? 0.75 : 1.05);

    // Smooth animation crossfade helper
    const fadeToAction = (name: string, duration = 0.5) => {
      const targetAction =
        actions[name] ||
        (name === "Idle" ? actions["Look_Wave"] : null) ||
        (name === "Wave" ? actions["Look_Wave"] : null) ||
        (name === "Jump" ? actions["Free_Fall"] : null);

      if (!targetAction || targetAction === activeAction) return;

      if (activeAction) {
        activeAction.fadeOut(duration);
      }
      targetAction
        .reset()
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(duration)
        .play();
      activeAction = targetAction;
    };

    // Mouse Tracking in Hero Section
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isHeroActive = true;

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Load Model with MeshoptDecoder
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);

    loader.load(
      "/models/robot.glb",
      (gltf) => {
        const model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

        robotGroup.add(model);

        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
          actions[clip.name] = mixer!.clipAction(clip);
        });

        const initialAnim = actions["Look_Wave"] || Object.values(actions)[0];
        if (initialAnim) {
          initialAnim.play();
          activeAction = initialAnim;
        }

        setIsLoaded(true);
        setupSectionTriggers();
      },
      (xhr) => {
        if (xhr.total > 0) {
          setLoadingProgress(Math.round((xhr.loaded / xhr.total) * 100));
        }
      },
      (err) => {
        console.error("Error loading 3D model:", err);
      }
    );

    // 4. Section-specific ScrollTrigger choreography
    const setupSectionTriggers = () => {
      const mobile = window.innerWidth < 1024;

      // Section 1: Hero
      ScrollTrigger.create({
        trigger: "#hero-section",
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          isHeroActive = true;
          fadeToAction("Look_Wave", 0.5);
          const heroX = getTargetX("hero-arch-target", 2.4);
          gsap.to(robotGroup.position, {
            x: mobile ? 0 : heroX,
            y: mobile ? -0.8 : -0.75,
            duration: 0.8,
            ease: "power2.out",
          });
          gsap.to(robotGroup.scale, {
            x: mobile ? 0.75 : 1.05,
            y: mobile ? 0.75 : 1.05,
            z: mobile ? 0.75 : 1.05,
            duration: 0.8,
          });
        },
        onEnterBack: () => {
          isHeroActive = true;
          fadeToAction("Look_Wave", 0.5);
          const heroX = getTargetX("hero-arch-target", 2.4);
          gsap.to(robotGroup.position, {
            x: mobile ? 0 : heroX,
            y: mobile ? -0.8 : -0.75,
            duration: 0.8,
            ease: "power2.out",
          });
          gsap.to(robotGroup.scale, {
            x: mobile ? 0.75 : 1.05,
            y: mobile ? 0.75 : 1.05,
            z: mobile ? 0.75 : 1.05,
            duration: 0.8,
          });
        },
      });

      // Section 2: Features
      ScrollTrigger.create({
        trigger: "#features",
        start: "top 70%",
        end: "bottom 30%",
        onEnter: () => {
          isHeroActive = false;
          fadeToAction("Look_Wave", 0.5);
          gsap.to(robotGroup.position, {
            x: mobile ? 0 : 2.8,
            y: -0.4,
            duration: 1.0,
            ease: "power2.out",
          });
          gsap.to(robotGroup.rotation, { y: -0.4, x: 0, duration: 1.0 });
          gsap.to(robotGroup.scale, {
            x: mobile ? 0.6 : 0.8,
            y: mobile ? 0.6 : 0.8,
            z: mobile ? 0.6 : 0.8,
            duration: 1.0,
          });
        },
        onEnterBack: () => {
          isHeroActive = false;
          fadeToAction("Look_Wave", 0.5);
          gsap.to(robotGroup.position, {
            x: mobile ? 0 : 2.8,
            y: -0.4,
            duration: 1.0,
            ease: "power2.out",
          });
          gsap.to(robotGroup.rotation, { y: -0.4, x: 0, duration: 1.0 });
        },
      });

      // Section 3: Visibility (Arch Video on the left)
      ScrollTrigger.create({
        trigger: "#visibility",
        start: "top 70%",
        end: "bottom 30%",
        onEnter: () => {
          isHeroActive = false;
          fadeToAction("Free_Fall", 0.6);
          gsap.to(robotGroup.position, {
            x: mobile ? 0 : -2.6,
            y: -0.5,
            duration: 1.0,
            ease: "power2.out",
          });
          gsap.to(robotGroup.rotation, { y: 0.35, x: 0.05, duration: 1.0 });
          gsap.to(robotGroup.scale, {
            x: mobile ? 0.65 : 0.85,
            y: mobile ? 0.65 : 0.85,
            z: mobile ? 0.65 : 0.85,
            duration: 1.0,
          });
        },
        onEnterBack: () => {
          isHeroActive = false;
          fadeToAction("Free_Fall", 0.6);
          gsap.to(robotGroup.position, {
            x: mobile ? 0 : -2.6,
            y: -0.5,
            duration: 1.0,
            ease: "power2.out",
          });
          gsap.to(robotGroup.rotation, { y: 0.35, x: 0.05, duration: 1.0 });
        },
      });

      // Section 4: Team (Leslie Alexander Center Spot)
      ScrollTrigger.create({
        trigger: "#team",
        start: "top 70%",
        end: "bottom 30%",
        onEnter: () => {
          isHeroActive = false;
          fadeToAction("Sitting", 0.6);
          gsap.to(robotGroup.position, {
            x: 0,
            y: -0.12,
            duration: 1.0,
            ease: "power2.out",
          });
          gsap.to(robotGroup.rotation, { y: 0, x: 0, duration: 1.0 });
          gsap.to(robotGroup.scale, {
            x: mobile ? 0.55 : 0.68,
            y: mobile ? 0.55 : 0.68,
            z: mobile ? 0.55 : 0.68,
            duration: 1.0,
          });
        },
        onEnterBack: () => {
          isHeroActive = false;
          fadeToAction("Sitting", 0.6);
          gsap.to(robotGroup.position, {
            x: 0,
            y: -0.12,
            duration: 1.0,
            ease: "power2.out",
          });
          gsap.to(robotGroup.rotation, { y: 0, x: 0, duration: 1.0 });
        },
      });

      // Section 5: FAQ & CTA
      ScrollTrigger.create({
        trigger: "#faq",
        start: "top 70%",
        end: "bottom 10%",
        onEnter: () => {
          isHeroActive = false;
          fadeToAction("Look_Wave", 0.5);
          gsap.to(robotGroup.position, {
            x: mobile ? 0 : 3.0,
            y: -0.5,
            duration: 1.0,
            ease: "power2.out",
          });
          gsap.to(robotGroup.rotation, { y: -0.3, x: 0, duration: 1.0 });
        },
      });
    };

    // 5. 60 FPS Render Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (document.hidden) return;

      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);

      if (isHeroActive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        robotGroup.rotation.y = -0.35 + mouse.x * 0.4;
        robotGroup.rotation.x = mouse.y * 0.18;
      }

      renderer.render(scene, camera);
    };
    render();

    // 6. Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      if (isHeroActive) {
        const isMob = window.innerWidth < 1024;
        const heroX = getTargetX("hero-arch-target", 2.4);
        robotGroup.position.x = isMob ? 0 : heroX;
        robotGroup.position.y = isMob ? -0.8 : -0.75;
      }
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    // 7. Scroll safety: when scrolled to the very top (scrollY < 60), guarantee Hero state
    const handleScroll = () => {
      if (window.scrollY < 60 && !isHeroActive) {
        isHeroActive = true;
        fadeToAction("Look_Wave", 0.5);
        const isMob = window.innerWidth < 1024;
        const heroX = getTargetX("hero-arch-target", 2.4);
        gsap.to(robotGroup.position, {
          x: isMob ? 0 : heroX,
          y: isMob ? -0.8 : -0.75,
          duration: 0.6,
          ease: "power2.out",
        });
        gsap.to(robotGroup.scale, {
          x: isMob ? 0.75 : 1.05,
          y: isMob ? 0.75 : 1.05,
          z: isMob ? 0.75 : 1.05,
          duration: 0.6,
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div
        id="canvas3d-container"
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-20"
        aria-hidden="true"
      />

      {!isLoaded && loadingProgress > 0 && loadingProgress < 100 && (
        <div className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-lg text-xs font-semibold text-gray-700 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-green animate-ping"></div>
          <span>Loading 3D Mascot ({loadingProgress}%)</span>
        </div>
      )}
    </>
  );
}
