# ItzFizz Scroll-Driven Hero

A responsive React + Vite landing page inspired by the supplied car-scroll reference. It uses GSAP and ScrollTrigger for the intro reveal and scroll-linked car movement. The car artwork is an inline SVG, so no external image asset is required.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. In the terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.

## Build check

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages

1. Create a **public** GitHub repository named `itzfizz-scroll-hero`.
2. Upload all project files and folders to the repository (not the ZIP file itself).
3. In `vite.config.js`, the base is configured for the repository name `itzfizz-scroll-hero`. If you choose another repository name, update `base` to `'/YOUR-REPOSITORY-NAME/'`.
4. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the build/deployment source.
5. Add `.github/workflows/deploy.yml` from this project and push to the `main` branch.
6. Wait for the workflow to finish. Your live URL will be:
   `https://YOUR-GITHUB-USERNAME.github.io/itzfizz-scroll-hero/`

## How the animation works

- Intro: GSAP animates the headline, stats and car into place on load.
- Scroll: `ScrollTrigger` maps scroll progress to the car's `x`, `y`, `rotate` and `scale`. `scrub: 1.1` smooths the relationship between scroll and motion.
- Performance: animated properties use transforms and opacity; the GSAP context is cleaned up when the component unmounts.

## Tech stack

- HTML entry point
- React + JavaScript
- CSS (with Tailwind directives included)
- GSAP + ScrollTrigger
- Vite for local development and production builds
