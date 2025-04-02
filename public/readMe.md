# 🗂️ Public Folder Overview

This folder contains static files that are **publicly accessible** and do **not go through the React build pipeline**. Everything in here is served as-is.

React only uses one actual HTML file, and that’s inside this folder.

---

## 📄 Key Files in the Public Folder

### ✅ `index.html`

This is the **main HTML file** for your React app. React renders everything inside the `<div id="root"></div>` in this file.

🔧 You can edit:
- The page title (`<title>My Website</title>`)
- Add a favicon
- Link fonts or global meta tags

⚠️ You should NOT add your app’s actual content here (like buttons or images). That happens in React components (`App.js`, etc.).

---

### ✅ `favicon.ico`

This is the **icon shown in the browser tab**.

You can replace this with your own `.ico` file to personalize your website tab icon.

---

### ✅ `manifest.json`

This file is used for **progressive web apps (PWA)** and helps define how your app appears when installed on a device.

You usually don’t need to edit this unless you’re customizing your app icon, name, or theme colors.

---

### ✅ `robots.txt`

This file tells search engines **what to index** and **what to ignore** on your site. You usually don’t need to change this unless you're working with SEO.

---

## 📁 What Goes in the Public Folder?

- Images or files you want to access directly (e.g. `public/image.png`)
- Static assets like fonts or downloadable files
- Meta tags and links inside `index.html`

---

## ⚠️ What NOT to Put Here

- JavaScript or React components
- CSS meant for components
- Sensitive data (anything here is public!)

---

## 🧠 Summary

| File            | Purpose                                       | Can You Edit? |
|------------------|-----------------------------------------------|----------------|
| `index.html`     | Base HTML template for your React app         | ✅ Yes          |
| `favicon.ico`    | Icon in the browser tab                       | ✅ Yes          |
| `manifest.json`  | PWA config file                               | ⚠️ Only if needed |
| `robots.txt`     | SEO control for web crawlers                  | ⚠️ Rarely       |

---

Keep this folder clean and focused on public/static assets. Most of your work as a developer will happen inside the `src/` folder.
