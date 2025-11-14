
# 🌿 Emotional Vent Space

A calming, anonymous space for users — especially international students — to safely express their thoughts, worries, and emotions.

Live Demo: **(add your Vercel link here)**
Tech Stack: React (Vite), CSS, LocalStorage

---

## 🌸 Overview

This project was built as part of the **Muhe Health Support Group Full Stack Web Developer** assessment.
The goal was to design a safe, inclusive space where users can anonymously share what's on their mind, view others' vent messages, and feel supported.

The experience is intentionally minimal, soothing, and easy to use — focusing on emotional safety and UX clarity.

---

## ✨ Features

### 💬 Anonymous Venting Form

* No login, no identity — users can express themselves freely.
* Live character count (max 500).
* “I don’t know what to say” prompt button to help start a message.

### 🧵 Live Message Feed

* Displays latest messages instantly (newest on top).
* Shows timestamps (“Today • 10:42 AM”).
* Clean, calming UI inspired by mental wellness apps.

### 🛡 Basic Moderation

* Blocks harmful or abusive phrases.
* Gently asks users to express feelings safely.

### 💾 Persistent Storage

* Uses **localStorage** so messages remain after page refresh.

### 🎨 UI & UX

* Soft layout, pastel gradient background
* Rounded message cards
* Smooth spacing and shadows
* Balanced two-panel design (left = form, right = live feed)

---

## 🛠 Tech Stack

**Frontend:**

* React (Vite)
* CSS (custom)
* Hooks: `useState`, `useEffect`
* LocalStorage API

**Other:**

* Responsive layout
* Accessible form labels
* Icon support for page branding

---

## 📂 Project Structure

```
src/
 ├── App.jsx
 ├── App.css
 ├── assets/
 │    └── heart-logo.png
 └── main.jsx
public/
 └── index.html
```

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

App will open at:

```
http://localhost:5173
```

---

## 🧪 Future Enhancements (optional ideas)

* Keyword-based emotional tags (“homesick”, “exam stress”)
* Emoji reactions
* Animated transitions
* Backend storage (MongoDB / Firebase)
* Anonymous reply threads
* Basic sentiment detection

---

## 🙋‍♀️ Author

**Harshana Reddy Gillala**
Full Stack Developer & CS Graduate Student
GitHub: [https://github.com/harshanareddy](https://github.com/harshanareddy)


