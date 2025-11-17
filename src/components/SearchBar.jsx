import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex-1">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search notes..."
        className="w-full border rounded px-3 py-2 text-sm"
        aria-label="Search notes"
      />
    </div>
  )
}
