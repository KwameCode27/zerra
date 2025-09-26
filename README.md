# Zerra Hotel Booking Web App

A modern, responsive hotel booking web application built with React, TypeScript, Vite, and Tailwind CSS. Zerra provides a seamless experience for users to browse rooms, book stays, and interact with hotel services.

## Features

- Beautiful landing page with hero, statistics, testimonials, and blog sections
- Room listing with details, amenities, and booking modal
- Multi-step room booking form
- Facilities and featured properties showcase
- User authentication (Sign Up & Sign In) with Firebase
- About and Contact pages
- Fully responsive design

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase Authentication](https://firebase.google.com/products/auth)

## Getting Started

1. **Clone the repository:**
	```bash
	git clone https://github.com/KwameCode27/zerra.git
	cd zerra/zerraproject
	```

2. **Install dependencies:**
	```bash
	npm install
	```

3. **Configure Firebase:**
	- Copy your Firebase config to `src/firebase.ts` as described in the code comments.

4. **Run the development server:**
	```bash
	npm run dev
	```
	The app will be available at `http://localhost:5173` (or as shown in your terminal).

## Project Structure

```
zerraproject/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components (About, Contact, RoomBookings, etc.)
│   ├── firebase.ts      # Firebase config
│   ├── App.tsx          # Main app component
│   └── ...
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── ...
```

## Customization
- Update hotel info, images, and content in the respective components/pages.
- Adjust Tailwind classes for your brand colors and style.

## License

This project is licensed under the MIT License.

---
