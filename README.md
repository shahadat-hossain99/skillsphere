# 🎓 SkillSphere — Online Learning Platform

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![HeroUI](https://img.shields.io/badge/HeroUI-v2-5A0EF8?style=flat)](https://heroui.com/)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-latest-black?style=flat)](https://better-auth.com/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=flat&logo=vercel)](https://skillsphere-grow-in-public.vercel.app)

**A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.**

[🌐 Live Demo](https://skillsphere-grow-in-public.vercel.app) · [📁 GitHub Repo](https://github.com/shahadat-hossain99/skillsphere) · [👤 Author](https://github.com/shahadat-hossain99)

</div>

---

## 📖 About

**SkillSphere** is a full-featured online learning platform built with Next.js 16 and the App Router. It allows users to browse courses across categories like Web Development, UI/UX Design, Marketing, and Data Science — with protected course detail pages, Google OAuth, profile management, and a polished, responsive UI.

---

## 🌐 Live URL

👉 **[https://skillsphere-grow-in-public.vercel.app](https://skillsphere-grow-in-public.vercel.app)**

---

## ✨ Key Features

### 🏠 Home Page

- Animated hero banner with stats (10K+ Students, 200+ Courses, 50+ Instructors)
- Top 3 highest-rated courses section
- Learning Tips section with study strategies
- Top Instructors section with 4 expert cards
- Student Reviews scrolling marquee
- Trending Courses section

### 📚 Courses Page

- All courses displayed in a responsive grid
- Real-time **search by title** with empty state UI
- Each card shows image, title, instructor, rating, level, and a Details button

### 🔒 Course Details Page (Protected)

- Accessible only when logged in
- Redirects to login if unauthenticated, then back after login
- Full course details — title, instructor, rating, duration, level, description
- Static course curriculum list
- Enroll Now, Wishlist & Share actions
- Sticky sidebar with course includes and rating card

### 🔐 Authentication

- Email + Password sign up and sign in
- **Google OAuth** social login
- Secure session management with BetterAuth
- Toast notifications on all auth events

### 👤 My Profile

- Displays logged-in user's name, email, and avatar
- Update Profile — form to update Name and Image URL
- Uses `authClient.updateUser()` from BetterAuth

### 🎨 UI/UX

- Fully responsive — mobile, tablet, desktop
- Mobile hamburger drawer using React Portal
- Smooth animations with Framer Motion & Animate.css
- Loading skeletons and spinner on data fetch
- Custom 404 not-found page
- Loading page with gradient spinner and skeleton cards

---

## 🛠️ Tech Stack

| Technology                                                  | Version | Purpose                               |
| ----------------------------------------------------------- | ------- | ------------------------------------- |
| [Next.js](https://nextjs.org/)                              | 16.2.4  | React framework & App Router          |
| [React](https://react.dev/)                                 | 19      | UI library                            |
| [Tailwind CSS](https://tailwindcss.com/)                    | v4      | Utility-first styling                 |
| [HeroUI](https://heroui.com/)                               | v2      | UI component library                  |
| [BetterAuth](https://better-auth.com/)                      | latest  | Authentication (Email + Google OAuth) |
| [Framer Motion](https://www.framer.com/motion/)             | v12     | Animations & transitions              |
| [React Fast Marquee](https://www.react-fast-marquee.com/)   | v1      | Reviews scrolling marquee             |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | v11     | Toast notifications                   |
| [React Icons](https://react-icons.github.io/react-icons/)   | v5      | Icon library                          |
| [Animate.css](https://animate.style/)                       | v4      | CSS entrance animations               |

---

## 📦 npm Packages Used

```json
"dependencies": {
  "next": "^16.2.4",
  "react": "^19",
  "tailwindcss": "^4",
  "@heroui/react": "^2",
  "better-auth": "latest",
  "framer-motion": "^12",
  "react-fast-marquee": "^1",
  "react-toastify": "^11",
  "react-icons": "^5",
  "animate.css": "^4"
}
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- A Google OAuth App (for social login)
- A database supported by BetterAuth

### Installation

```bash
# Clone the repository
git clone https://github.com/shahadat-hossain99/skillsphere.git

# Navigate into the project
cd skillsphere

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# BetterAuth
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your-secret-key-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database
DATABASE_URL=your-database-url
```

> ⚠️ Never commit `.env.local` to GitHub. It is already in `.gitignore`.

---

## 📁 Project Structure

```
skillsphere/
├── public/
│
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── api/
│   │   ├── courses/
│   │   │   └── [id]/        ← Protected course detail page
│   │   ├── login/
│   │   ├── profile/
│   │   ├── register/
│   │   ├── layout.js
│   │   ├── loading.jsx
│   │   ├── not-found.jsx
│   │   └── page.js
│   ├── assets/
│   ├── components/
│   │   ├── homepage/
│   │   ├── shared/
│   │   │   ├── Navbar/
│   │   │   └── Footer/
│   │   ├── ToastProvider/
│   │   └── UserInfo/
│   └── lib/
│       ├── auth.js
│       ├── auth-client.js
│       └── proxy.js
├── .env.local
├── next.config.mjs
└── package.json
```

---

## 🧠 What I Learned

- ⚡ Built a production app with **Next.js 16 App Router** — layouts, protected routes, dynamic segments, metadata
- 🔐 Implemented **BetterAuth** for email/password and **Google OAuth** with session management
- 🎬 Combined **Framer Motion** and **Animate.css** for polished UI animations
- 🛡️ Protected routes for unauthenticated users with redirect-back flow
- 📱 Built a fully responsive layout with a **React Portal drawer** for mobile
- 🔔 Used `toast.promise()` for async UX feedback on all auth operations
- 🖼️ Optimized images with Next.js `<Image>` using `fill`, `sizes`, and remote patterns

---

## 👨‍💻 Author

**Md. Shahadat Hossain**
MERN-Stack Developer | Next.js & React Enthusiast

[![GitHub](https://img.shields.io/badge/GitHub-shahadat--hossain99-black?style=flat&logo=github)](https://github.com/shahadat-hossain99)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-md--shahadat--hossain--coder-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/md-shahadat-hossain-coder)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <a href="https://github.com/shahadat-hossain99">Shahadat Hossain</a></p>
