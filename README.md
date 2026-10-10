# Sark - Animated 3D Landing Page

> **Entry Exam - Junior Animated Web Developer | HeMeDi**  
> An interactive, high-performance 3D landing page developed with **Next.js 14**, **Tailwind CSS**, **Three.js**, and **GSAP ScrollTrigger**.

---

## 🚀 Live Demo & Links
- **Live Demo:** [Deploy on Vercel](https://hemidi-animated-landing.vercel.app)
- **Figma Design:** [Landing Page (HeMeDi)](https://www.figma.com/design/Ey9fo39CDdpKfIPMBRqYTE/Landing-Page)
- **3D Asset Source:** [Friendly Sci-Fi Robot with Animations (Sketchfab)](https://sketchfab.com/3d-models/friendly-sci-fi-robot-with-animations-b83ac12ac3f14119a0988532d3613dac)

---

## ✨ Features & Technical Implementation

### 1. 3D Integration & Interactive Animation Control (Core Requirement)
- **Hero Section (Default State):**
  - Robot Mascot is staged inside the architectural arch container.
  - Loops the `Look_Wave` animation.
  - **Mouse Tracking (Parallax):** Real-time linear interpolation (`lerp`) smoothly rotates the robot's heading and tilt according to cursor coordinates.
- **ScrollTrigger Animation Choreography:**
  - **Hero $\rightarrow$ Features / Visibility:** Robot triggers `Free_Fall` dynamic action and repositions adjacent to UI content.
  - **Team Section:** Robot transitions to `Sitting` animation, landing perfectly in the middle avatar spot as the honorary AI SEO Executive (*Leslie Alexander*).
  - **Smooth Blending:** All transitions use Three.js `AnimationMixer` cross-fading (`fadeIn`/`fadeOut`) to eliminate popping or animation hitches.

### 2. Performance & SEO Optimization (PageSpeed > 90 & 60 FPS)
- **Official Lighthouse Desktop Benchmark Results:**
  - 🟢 **Performance:** **95 / 100** *(Target: > 90)*
  - 🟢 **SEO:** **100 / 100**
  - 🟢 **Best Practices:** **96 / 100**
  - 🟢 **Accessibility:** **94 / 100**
  - **Core Web Vitals:** First Contentful Paint: **0.3s** | Largest Contentful Paint: **0.7s** | CLS: **0.00** | TBT: **180ms**

- **3D Asset Compression (86% Size Reduction):**
  - Original model size: **5.41 MB** (ZIP: 9.2 MB)
  - Optimized model size: **767 KB**
  - Applied `@gltf-transform` pipeline: meshopt geometry quantization, WebP texture compression, vertex welding, and deduplication.
- **Rendering Efficiency:**
  - Render loop halts execution when the browser tab is inactive (`document.hidden`), conserving CPU/GPU resources.
  - Device Pixel Ratio clamped (`Math.min(window.devicePixelRatio, 2)`) to maintain steady 50–60 FPS across high-DPI retina screens.
  - Next.js dynamic import (`ssr: false`) ensures the initial server HTML and Critical CSS load instantly without blocking Core Web Vitals (FCP / LCP).
- **SEO Ready:** Complete OpenGraph tags, semantic HTML5 structure, structured metadata, and responsive typography.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS (Custom typography, branding & arch radius)
- **3D Engine:** Three.js (`WebGLRenderer`, `PerspectiveCamera`, `GLTFLoader`, `MeshoptDecoder`)
- **Animation Engine:** GSAP 3 + `ScrollTrigger`
- **Icons:** Lucide React

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js 18.x or newer
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/hemidi-animated-landing.git
cd hemidi-animated-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 📦 Deployment to Vercel

1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete HeMeDi junior animated web developer test"
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and import the repository.
3. Keep default settings (`Framework: Next.js`) and click **Deploy**.

---

## 👨‍💻 Candidate Submission
- **Position:** Junior Animated Web Developer
- **Target Company:** HeMeDi (*Giải pháp đúng - Tăng trưởng thật*)
- **Submission Date:** 2026
