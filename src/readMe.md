# 📁 `src/` Folder – Source Code Overview

The `src/` folder contains **all the source code** for the React application. This is where you write, organize, and manage everything that shows up in your app — from layout and styling to logic and interactivity.

---

## ✅ What Should Go Inside `src/`?

| Folder/File       | Description                                                              |
|-------------------|--------------------------------------------------------------------------|
| `App.js`          | Main component that controls the layout of your entire app              |
| `App.css`         | Styles for your `App.js` and global UI settings                         |
| `index.js`        | Entry point that renders your React app into the HTML page              |
| `index.css`       | Optional global styles (reset CSS, body styles, fonts, etc.)            |
| `components/`     | Reusable pieces of UI like buttons, cards, navbars                      |
| `pages/`          | Full-screen views or pages (like Home, About, Contact)                  |
| `assets/`         | Images, fonts, and other static files used by components                |
| `styles/`         | (Optional) Global style files or variables (if you use SCSS/CSS modules)|
| `utils/`          | (Optional) Helper functions and utilities (e.g., formatters, validators)|

---

## 📌 What You SHOULD Edit

- ✅ `App.js` – Structure/layout of your app
- ✅ `App.css` – Styling your layout and components
- ✅ `components/` – Build and update UI elements
- ✅ `pages/` – Create and update full pages of the app
- ✅ `assets/` – Add logos, icons, or images for the site

---

## ⚠️ What You Should Be Careful With

- ⚠️ `index.js` – Only modify this if you’re adding routing or global providers (e.g. Context, Redux)
- ⚠️ `index.css` – Make changes here only for global styling (like font reset or body color)
- ⚠️ Avoid creating unnecessary files or clutter in the root of `src/`

---

## 🧠 Best Practices

- Use **PascalCase** for component names: `MyComponent.js`
- Keep components small and reusable
- Use folders like `components/` and `pages/` to organize code
- Write clear, meaningful comments if something isn’t obvious
- Keep your code readable and consistent (indentation, naming, etc.)

