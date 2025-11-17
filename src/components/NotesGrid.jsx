import React, { useMemo } from 'react'
import NoteCard from './NoteCard'

export default function NotesGrid({ notes, query, category, sortOrder, onEdit, onDelete }) {
  const filtered = useMemo(() => {
    let list = [...notes]
    if (category && category !== 'All Notes') {
      list = list.filter((n) => n.category === category)
    }
    if (query && query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter((n) => (n.title + ' ' + (n.description || '')).toLowerCase().includes(q))
    }
    list.sort((a, b) => (sortOrder === 'newest' ? new Date(b.createdAt) - new Date(a.createdAt) : new Date(a.createdAt) - new Date(b.createdAt)))
    return list
  }, [notes, query, category, sortOrder])

  if (!filtered.length) {
    return <p className="text-center text-slate-500 mt-8">No notes found.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filtered.map((n) => (
        <NoteCard key={n.id} note={n} onEdit={() => onEdit(n)} onDelete={() => onDelete(n)} />
      ))}
    </div>
  )
}
