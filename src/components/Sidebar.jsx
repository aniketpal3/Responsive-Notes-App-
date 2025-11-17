import React from "react";
import CategoryPill from "./CategoryPill";

const DEFAULT_CATS = ["All Notes", "Work", "Personal", "Ideas", "Other"];

export default function Sidebar({ notes, selected, onSelect, sidebarOpen, setSidebarOpen }) {
  const counts = DEFAULT_CATS.reduce((acc, c) => {
    acc[c] =
      c === "All Notes"
        ? notes.length
        : notes.filter((n) => n.category === c).length;
    return acc;
  }, {});

  return (
    <aside
      className={`
        h-screen p-4 border-r 
        bg-white dark:bg-slate-800 dark:border-slate-700 
        shadow-lg z-40 
        transition-all duration-300 ease-out overflow-hidden
        ${sidebarOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full"}
      `}
    >
      {sidebarOpen && (
        <>
          <button
            onClick={() => setSidebarOpen(false)}
            className="mb-4 p-1 text-sm text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition"
          >
            ✕ Close
          </button>
          <nav className="flex flex-col gap-2">
            {DEFAULT_CATS.map((c) => (
              <CategoryPill
                key={c}
                label={c}
                count={counts[c]}
                active={selected === c}
                onClick={() => onSelect(c)}
              />
            ))}
          </nav>
        </>
      )}
    </aside>
  );
}
