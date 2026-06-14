# SS Aquarium Website

A premium, highly-interactive, and hyperrealistic single-page React website for an exotic fish and aquascaping business. Built with Vite, React, Tailwind CSS, and Framer Motion.

## 🌟 Features
- **Hyperrealistic Design**: Photorealistic 4k backgrounds and custom-made floating fish graphics.
- **Dynamic Particles & Physics**: Real-time canvas-based swimming fish and intelligent bubble systems.
- **Glassmorphism UI**: Beautiful semi-transparent frosted glass cards and components.
- **Interactive Micro-Animations**: Smooth Framer Motion transitions, custom rippling mouse clicks, and custom cursors.
- **WhatsApp Integration**: Direct one-click order and chat functionality mapped straight to the owners.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/download/) (v16.0.0 or higher recommended)
- **npm** (comes bundled with Node.js) or **yarn**

## 🚀 Getting Started Step-by-Step

Follow these simple steps to run the application on your local machine:

### 1. Open the project
Open your terminal (or Command Prompt / PowerShell) and navigate to the root directory of this project where the `package.json` file is located.

### 2. Install Dependencies
Install all the required libraries (React, Tailwind, Framer Motion, etc.) by running:
```bash
npm install
```

### 3. Start the Development Server
Run the Vite development server to launch the app:
```bash
npm run dev
```

### 4. View in Browser
Once the server starts, it will provide a local URL in your terminal. Usually, this is:
```text
http://localhost:5173
```
Open this link in your Google Chrome or Safari browser to view and interact with the website!

## 📦 Building for Production

When you are ready to deploy your website to the internet (using services like Vercel, Netlify, or Hostinger), run the build command:

```bash
npm run build
```
This command bundles React in production mode and optimizes the build for the best performance. The output will be placed in the `dist` folder, which is what you will upload to your hosting provider.

## 🔮 Next Steps & Customization

If you want to customize the website further, here are some helpful pointers:
- **Images & Media**: You can change the background images or fish graphics by replacing the `.png` files inside the `public/images` folder.
- **Pricing & Products**: Update the inventory, prices, or names in the data files located in the `src/data/` folder (e.g., `src/data/accessories.js`).
- **Contact Details**: Update phone numbers, emails, or social media links in the `src/sections/Contact.jsx` and `src/components/Navbar.jsx` files.
- **Theme Colors**: The primary website colors (like the glowing neon cyan and deep ocean blues) are configured in the `tailwind.config.js` file.

---
*Crafted with 💙 for aquatic lovers of Coimbatore.*
