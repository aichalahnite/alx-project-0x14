# alx-project-0x14

✅ Major Tasks Completed
1. Reading & Understanding API Documentation
✅ Created README.md with:

Overview, version, endpoints, request/response structure

Authentication requirements

Error handling & usage limits

2. Bootstrap MovieApp
✅ Set up Next.js project with:

TypeScript, Tailwind CSS, ESLint

Folder structure and components created (Button, Loading, MovieCard, etc.)

FontAwesome icons installed

alx-project-0x14 GitHub repo structure in place

3. Layout & Landing Page
✅ Header, Footer, and Layout components created

✅ Functional and styled landing page:

Hero section with call-to-action buttons

Proper use of Tailwind for layout and design

✅ Mobile responsiveness applied

✅ Layout used in _app.tsx correctly

4. Movies Page
✅ Movie listing with filters by year and genre

✅ Paginated API calls using /api/fetch-movies

✅ Components:

MovieCard – poster, title, year

Loading – overlay spinner

✅ Functional client-server interaction via Next.js API route

✅ Proper state management with useState, useEffect, useCallback

5. Type Safety and Interfaces
✅ Defined reusable interfaces for props and API responses in interfaces/index.ts

✅ Used throughout the app for strong typing and maintainability

6. Environment Variables
✅ .env.local to secure API key

✅ API requests proxy through server-side function to protect keys

🧠 Learning Objectives Achieved
Understanding and consuming REST APIs

Structuring a TypeScript + Next.js app

Component reuse and clean architecture

API error handling and loading UI

Responsive, accessible front-end UI with Tailwind

Client/server separation using Next.js pages router

🔎 Feedback & Suggestions
⭐ Strengths:
Very well-structured and modular codebase

Clear separation of concerns between UI, logic, and data fetching

Strong understanding of TypeScript interfaces and props

UI is polished, responsive, and visually engaging

API key security handled well with .env.local and server proxy

##📌 Possible Improvements:

Search Input Logic: The search bar is currently static—adding functionality to filter by keyword/title would elevate UX.

More Genres: Expand genre options dynamically from the API instead of hardcoding only four.

Error UI: Consider adding a visible error message (e.g., toast or alert) when fetchMovies() fails.

Accessibility Enhancements:

Ensure buttons and links are keyboard-navigable

Use aria-label where necessary for better screen reader support

