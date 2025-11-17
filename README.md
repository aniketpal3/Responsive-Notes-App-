📘 Responsive Notes App

A clean, modern, and fully responsive Evernote-style Notes Management Web App built using React + Vite + Tailwind CSS.
Users can create, edit, search, filter, categorize, and delete notes with a smooth UI and local storage persistence.

🚀 Features
📝 Notes Management

Create new notes with title & content

Edit existing notes

Delete notes with confirmation

Automatic save using LocalStorage

🗂 Categories

Predefined categories: All Notes, Work, Personal, Ideas

Category-based filtering

Category pills in the header

🔍 Search

Real-time search in titles & content

Updates results instantly

🗃 Layout

Clean sidebar navigation

Notes listed in a responsive grid

Clickable card-based design

Smooth modal for note creation & editing

💾 Local Storage Support

All notes stay saved even after page reload

No backend required

📁 Folder Structure
root
│── public/
│     └── notes.json
│
│── src/
│     ├── components/
│     │     ├── CategoryPill.jsx
│     │     ├── ConfirmDialog.jsx
│     │     ├── Header.jsx
│     │     ├── NoteCard.jsx
│     │     ├── NoteModal.jsx
│     │     ├── NotesGrid.jsx
│     │     ├── SearchBar.jsx
│     │     └── Sidebar.jsx
│     │
│     ├── context/
│     │     └── NotesContext.jsx
│     │
│     ├── utils/
│     │     ├── dates.js
│     │     ├── storage.js
│     │     └── titleHelpers.js
│     │
│     ├── App.jsx
│     ├── index.css
│     └── main.jsx
│
├── package.json
├── vite.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
└── README.md

🛠️ Tech Stack
Technology	Purpose
React.js	UI development
Vite	Fast bundler & dev server
Tailwind CSS	Modern styling
LocalStorage	Persistent notes data

📦 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/responsive-notes-app.git
cd responsive-notes-app
2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run dev

4️⃣ Build for Production
npm run build

🔧 How It Works
🟧 NotesContext

A global context for:

managing notes

adding, editing, deleting

filtering by category

managing search query

🟦 NoteModal

Reusable modal component for:

adding new notes

editing existing notes

🟩 NotesGrid

Displays notes in a beautiful responsive grid.

📱 Responsive Design

✔ Mobile friendly
✔ Tablet optimized
✔ Desktop wide-screen layout
✔ Adaptive sidebar & grid

✨ Upcoming Features (Optional)

Dark mode

Drag & drop notes

Color-tagged notes

Cloud sync

🤝 Contributing

Pull requests are welcome.
For major changes, open an issue first to discuss what you'd like to change.

📜 License

This project is licensed under the MIT License.
