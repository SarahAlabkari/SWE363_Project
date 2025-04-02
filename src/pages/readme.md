# 📄 Pages Folder

This folder contains the main **page components** of the application. Each page typically represents a full screen or route in the app (e.g., Home, About, Contact, etc.).

## 📁 Structure

Each page is a React component, for example:

- `Home.js` – Homepage of the website
- `About.js`

## 🧠 Guidelines

- Each file should export a React component as default.
- Use meaningful names that match the route (e.g., `/about` → `About.js`).
- Keep pages focused on layout and logic; use components from `/components` to build the UI.

## 🔗 Example Usage

In `App.js` (or your router file), you can import like this:

```js
import Home from './pages/Home';
import About from './pages/About';
