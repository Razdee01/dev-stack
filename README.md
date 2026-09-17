# Dev Stack

<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
</div>

A modern React app for exploring developer tools and building your ideal technology stack. Instead of guessing which tools fit your project, you can browse categories, compare popular technologies, and choose the ones you want in your personalized stack.

## 🚀 Overview

This project is a clean and interactive UI where users can:

- discover technologies by category
- read short descriptions and metadata for each tool
- add technologies to a personal stack
- remove items or reset the full selection

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI

## ✨ Features

1. Interactive technology cards with category, rating, difficulty, and badge information.
2. A personal "Your Stack" panel where selected technologies can be added or removed.
3. Responsive and modern layout built for desktop and mobile browsing.

## 📸 Project Preview

This app is designed to help developers quickly build a stack that matches their project goals, from frontend frameworks to backend tools and databases.

## 🧠 React Questions

### 1. What is JSX, and why is it used in React?
JSX is a special syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to read and helps us describe the UI in a simple way.

### 2. What is the difference between props and state?
Props are data passed from a parent component to a child component. State is data stored inside a component that can change while the app is running.

### 3. What does the useState hook do, and where did you use it in this project?
useState lets a component keep track of changing values. In this app, it is used to manage the selected technologies and the button state that changes from “Add to Stack” to “Added to Stack”.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs after a component renders, which is useful for side effects such as fetching data from an API or a local JSON file. In this project, the technology list is loaded from JSON in a React data-fetching pattern, and the same idea is used to fetch data after render before it is shown in the UI.

### 5. Why does every item in a .map() list need a unique key prop?
React uses keys to track which item is which when the list changes. A unique key helps React update, reorder, or remove items correctly without bugs.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different content depending on a condition. For example, if the selected stack is empty, the app can show a message instead of a list, which is a common empty-state pattern.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child through props, like sending the list of technologies or a function to update the parent state. A child sends data back by calling a function that was passed down as a prop, such as updating the selected stack.

## ✅ Run This Project

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

---

Built with ❤️ for developers who want to design a smarter tech stack.
