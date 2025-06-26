# Forest Wood Energy – CMS Website

This is a **showcase version** of the production project.
Due to the exclusion of `.env` variables and customer-specific CMS/API credentials, this repository **is not runnable as-is** in local development.
All sensitive configuration has been removed for security and privacy reasons.
You may review the project structure, component architecture, and CI/CD pipeline setup for reference.

A production-ready content management system (CMS) for **Forest Wood Energy**, built with **Next.js 15**, **TypeScript**, and **Emotion**. Features include admin authentication, dynamic news management, RESTful API, and image uploads with DigitalOcean Spaces.

---

## 🔗 Live Product

This project is a **production-ready CMS** currently live at:

🌐 [https://4est-energy.com](https://4est-energy.com)

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

## 🗂 Pages in this showcase

| Route           | Notes                                    |
| --------------- | ---------------------------------------- |
| `/page`         | Home Page, Hero, dynamic sections        |
| `/media`        | Public news & gallery (uses CDN images)  |
| **Admin panel** | Screenshots below (requires credentials) |

> Pages **/product, /about-us, /sustainability** contain customer-specific marketing copy and therefore are **excluded**.  
> They can still be viewed on the live site for design reference.

---

## 📸 UI Preview

## 📰 Public News Page (Live Product)

🌐 [https://4est-energy.com/media/news](https://4est-energy.com/media/news)

### 🔐 Admin Panel (Login & News Management)

> Admin panel and dynamic news features require API access and auth credentials.
> Here's a preview of what they look like in production.
> ![Admin Panel](./assets/admin-preview.png)

---

## 🛠️ Tech Stack

| Frontend    | Backend               | Infra               |
| ----------- | --------------------- | ------------------- |
| Next.js 15  | REST API (API Routes) | DigitalOcean Spaces |
| TypeScript  | MongoDB Atlas         | DO App Platform     |
| Emotion CSS | Mongoose              | S3 SDK              |

---

## 📂 Folder Structure (Simplified)

The main app is structured using Next.js App Router with the following layout:

```text

components/ # Shared UI components
screen/ # Screen for each page

src/
├── app/
│ ├── page.tsx # Main landing page
│ ├── layout.tsx # Root layout with header
│ ├── admin/page.tsx # Admin page
│ ├── contact_us/page.tsx # Contact us page
│ ├── media/page.tsx # Media page
│ ├── api/ # Connect Api
│ └── css/ # Theme styling and global fonts
├── lib/ # Reusable logic
└── models/ # Models Schema

types/ # TypeScript interface and types
utils/ # Utilities like blur images

```

---

## ⚙️ CI/CD (GitLab – from production)

This GitLab pipeline file was adapted from the original production project to show CI setup.  
It cannot be used with GitHub directly.

> Due to DigitalOcean App Platform’s current lack of native GitLab integration, CI/CD was manually separated. GitLab pipelines were still used to validate build and linting steps per commit.

---

## 🧪 Development Setup

```bash
# 1. Clone the repo
git clone https://github.com/Langen-Tardigrada/forest-wood-energy-port.git

# 2. Install dependencies
npm install

# 3. (Optional) Create a mock `.env.local` file
touch .env.local
# Add fake or placeholder values if needed for local testing

# 4. Run locally
npm run dev

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Digital ocean
```

leekansiree@gmail.com | +66-93-296-8089
