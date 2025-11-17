import React from 'react'
import { useNotes } from '../context/NotesContext'

export default function ConfirmDialog({ isOpen, onClose, note }) {
  const { remove } = useNotes()
  if (!isOpen || !note) return null

  function handleDelete() {
    remove(note.id)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="bg-white rounded shadow-lg z-10 w-full max-w-md p-6">
        <h3 className="text-lg font-medium">Delete note</h3>
        <p className="mt-2 text-sm text-slate-600">Are you sure you want to delete "{note.title}"?</p>

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 rounded border">Cancel</button>
          <button onClick={handleDelete} className="px-3 py-1 rounded bg-red-600 text-white">Delete</button>
        </div>
      </div>
    </div>
  )
}
