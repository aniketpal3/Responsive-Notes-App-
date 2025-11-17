import React from "react";

export default function CategoryPill({ label, count, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center justify-between px-3 py-2 rounded-md text-left
        transition-all duration-200 cursor-pointer

        ${active
          ? "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 font-medium"
          : "text-slate-700 dark:text-slate-300"
        }

        ${!active && "hover:bg-violet-50 dark:hover:bg-slate-700/50"}
      `}
    >
      <span>{label}</span>
      <span
        className={`
          text-xs px-2 py-0.5 rounded-full
          ${active
            ? "bg-violet-200 dark:bg-violet-700 text-violet-900 dark:text-white"
            : "bg-slate-200 dark:bg-slate-700"
          }
        `}
      >
        {count}
      </span>
    </button>
  );
}
