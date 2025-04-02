# 🧩 Components Folder

This folder contains **reusable UI components** that are used across different pages of the application.

## 📁 Purpose

Components are the building blocks of the UI. Instead of repeating code across pages, you can build modular and reusable components here.

Examples:
- `Navbar.js` – Navigation bar shown on all pages
- `Button.js` – Custom button used in forms or modals
- `Card.js` – Layout for displaying content in a styled container

## 🧠 Guidelines

- Each component should be self-contained (JSX + CSS if needed)
- Use **PascalCase** for component file names (e.g., `MyComponent.js`)
- Components should be reusable and not depend on specific page data
- Split large components into smaller ones when possible

## 🧪 Example Usage

In a page or another component:

```js
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome!</h1>
    </div>
  );
}
