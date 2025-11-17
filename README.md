NOTES APP (REACT + VITE + TAILWIND)

This is a small notes-taking web app I built for learning React and getting comfortable with Tailwind CSS and localStorage.
The app lets you create, edit, search and sort notes. Everything is saved in the browser so the data stays even after refreshing.

🚀 FEATURES

Add new notes
Edit existing notes
Choose a category (Work, Personal, Ideas, Other)
Search notes by title
Sort notes by Latest or Oldest
Light & Dark mode toggle
Notes stored using localStorage
Simple and clean UI made with Tailwind

🛠️ TECH STACK

React (with Vite)
Tailwind CSS
JavaScript (ES6+)
LocalStorage for saving data

📂 PROJECT Structure (Compact)
src/
  App.jsx
  main.jsx
  style.css
  ui/
    UI.jsx
    modal.jsx
    ls.js
index.html
tailwind.config.js


I kept the structure small to make it easier to understand and manage.

📦 How to Run the Project :-
Download or clone the folder
Install dependencies
npm install
Start development server
npm run dev
Open the browser at the link shown in terminal

✏️ How Notes Are Saved:-
All notes are stored in the browser inside:
localStorage → key: "n1"
So the app does not need any backend.
If you want to reset the app, just clear localStorage.

📄 Why I Built This

I made this project to practice:
Managing state in React
Handling forms and modals
Working with Tailwind styling
Making UI clean but simple
Understanding how localStorage works
Working with compact folder setups

It helped me improve my confidence in React and writing cleaner code.