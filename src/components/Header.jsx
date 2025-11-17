import React from 'react'

export default function Header({ onOpenSidebar, onCreate }) {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSidebar}
            className="md:hidden p-2 rounded hover:bg-slate-100"
            aria-label="Open sidebar"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">Notes</h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCreate}
            className="bg-indigo-600 text-white px-3 py-1.5 rounded shadow-sm hover:bg-indigo-700 text-sm"
          >
            + New Note
          </button>
        </div>
      </div>
    </header>
  )
}
