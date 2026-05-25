# Kaoutar Machouat Portfolio

A polished one-page editorial portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## What is included

- Fashion-editorial hero section
- Resume button in the Hero section
- Download Resume button in the Contact section
- Project cards with GitHub URLs instead of `#`
- Profile placeholder image in `public/profile-placeholder.svg`
- Resume PDF in `public/resume.pdf`
- Responsive layout for mobile, tablet, and desktop
- Smooth scrolling navigation
- Accessible semantic sections and keyboard-friendly links

## Tech stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Deploy on Vercel

1. Push this folder to GitHub.
2. Go to Vercel.
3. Click Add New Project.
4. Import the repository.
5. Use these settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
6. Deploy.

## Deploy on GitHub Pages

In `vite.config.js`, change:

```js
base: "/"
```

to your repo name, for example:

```js
base: "/kaoutar-portfolio/"
```

Then run:

```bash
npm run deploy
```

In GitHub:

1. Open the repository settings.
2. Go to Pages.
3. Select the `gh-pages` branch.
4. Save.

## Customization before publishing

### 1. Project links

The project buttons are already using real GitHub profile/repository URLs instead of `#`.

Open:

```txt
src/data.js
```

Then replace each `codeUrl` and `caseStudyUrl` with the exact repository or case-study URL when those pages are ready.

### 2. Photo

A placeholder is included here:

```txt
public/profile-placeholder.svg
```

To use a real photo:

1. Add your photo to `public/`, for example:

```txt
public/profile.jpg
```

2. Open:

```txt
src/components/Hero.jsx
```

3. Replace:

```jsx
src="/profile-placeholder.svg"
```

with:

```jsx
src="/profile.jpg"
```

### 3. Resume

A starter resume PDF is included here:

```txt
public/resume.pdf
```

To replace it with your real resume, save your final file with the same name:

```txt
public/resume.pdf
```

The Hero and Contact buttons already point to this file.

## Fast publish path

```bash
npm install
npm run build
git init
git add .
git commit -m "Launch portfolio"
git branch -M main
git remote add origin https://github.com/KaoutarMk/kaoutar-portfolio.git
git push -u origin main
```

Then import the repo in Vercel.
