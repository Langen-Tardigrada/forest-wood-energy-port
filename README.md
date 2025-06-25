# Forest Wood Energy – CMS Website

A production-ready content management system (CMS) for **Forest Wood Energy**, built with **Next.js 15**, **TypeScript**, and **Emotion**. Features include admin authentication, dynamic news management, RESTful API, and image uploads with DigitalOcean Spaces.

---

## 🚀 Features

- ✅ Fully responsive UI
- ✅ Admin panel with login & session-based auth
- ✅ Create / Edit / Delete news with nested content
- ✅ RESTful API built with Next.js API routes
- ✅ MongoDB Atlas integration (via Mongoose)
- ✅ Image upload to DigitalOcean Spaces (S3-compatible)
- ✅ SEO-friendly with meta & OG tags
- Public news page with generateMetadata ISR
- Optimized for low-end devices

---

## 🛠️ Tech Stack

| Frontend    | Backend               | Infra               |
| ----------- | --------------------- | ------------------- |
| Next.js 15  | REST API (API Routes) | DigitalOcean Spaces |
| TypeScript  | MongoDB Atlas         | DO App Platform     |
| Emotion CSS | Mongoose              | S3 SDK              |

---

## 📂 Folder Structure (Simplified)

A production-ready content management system (CMS) for **Forest Wood Energy**, built with **Next.js 15**, **TypeScript**, and **Emotion**. Features include admin authentication, dynamic news management, RESTful API, and image uploads with DigitalOcean Spaces.

## 🧪 Development Setup

```bash
# 1. Clone the repo
git clone https://gitlab.com/forest-wood-energy/fwe-website.git
cd fwe-website

# 2. Install dependencies
npm install

# 3. Set up .env.local
cp .env.example .env.local
# → Fill in MongoDB URI, DigitalOcean credentials, etc.

# 4. Run locally
npm run dev

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Digital ocean
```
