<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# DevSnap 📸  
A modern photo sharing web application built with **Next.js**, **React**, and **TypeScript**.  
This project is designed to practice real-world front-end concepts used in modern social apps —  
including CSR/SSR, custom hooks, infinite scroll, skeleton UI, and component optimization.

---

## 🚀 Features

### ✔ Feed Page (CSR)
- Infinite scroll powered by `IntersectionObserver`
- Skeleton UI for smooth loading
- Optimized PostList & PostItem components

### ✔ Post Detail Page (SSR)
- Server-rendered dynamic route: `/post/[id]`
- Automatic hydration on client

### ✔ Custom Hooks
- `usePosts` — paginated data fetching
- `useInfiniteScroll` — scroll-based pagination
- Additional hooks planned (image upload, theme, modal)

### ✔ UI/UX Enhancements
- Skeleton loading placeholders
- Sticky header navigation
- Responsive layout

---

## 🧱 Tech Stack

- **Next.js 14+ (App Router)**
- **React 18**
- **TypeScript**
- **CSS Modules / Global CSS**
- (Optional) Zustand, React Query — coming soon

---

## 📦 Installation

```bash
git clone https://github.com/<YOUR_USERNAME>/devsnap.git
cd devsnap
npm install
npm run dev
```
---
## 📦 Development Scripts
DevSnap is built as a full learning playground for mastering modern React & Next.js fundamentals:
	•	Component rendering strategies (CSR / SSR / hydration)
	•	State & performance optimization
	•	Infinite scrolling
	•	Skeleton UI
	•	Custom hooks architecture

It’s also a great portfolio project for front-end interviews.

---

## 🎯 Why This Project Exists

**DevSnap** is a practice-focused photo sharing web application built to master  
modern **React + Next.js** skills used in real production environments.

This project helps you practice:

- Rendering strategies: **CSR, SSR, Hydration**
- Component optimization (**React.memo**, **useCallback**, **useMemo**)
- Building and organizing **custom hooks**
- Implementing **infinite scroll** with IntersectionObserver
- Designing reusable UI components and layout structure
- Managing UI loading states using **Skeleton UI**
- Strengthening TypeScript + project architecture habits

It also serves as a strong portfolio project for front-end interviews 🚀

---
## 📌 Roadmap

- [ ] Image upload with preview UI
- [ ] User authentication flow
- [ ] Like / comment interactions (optimistic UI)
- [ ] React Query integration
- [ ] Zustand global state management
- [ ] Theme toggle (dark/light)
- [ ] Improve feed virtualization (react-window)
- [ ] Server Actions adoption
- [ ] API integration (real backend / mock server)

---

## 📝 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and learn from this project.

---

## 💛 Author

**Zen (Jinkyung Choi)**  
Full-Stack Developer · Burnaby, Canada  
twin7014@gmail.com
>>>>>>> c531a6dbf4bde33dd1176fd7620f1e214660bbef
