import React, { useEffect, useRef, useState } from 'react'
import { useNotes } from '../context/NotesContext'

const CATEGORY_OPTIONS = ["Work", "Personal", "Ideas", "Other"]

export default function NoteModal({ isOpen, onClose, editing }) {
  const { create, update } = useNotes()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Other')
  const [message, setMessage] = useState('')
  const dialogRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      if (editing) {
        setTitle(editing.title || '')
        setDescription(editing.description || '')
        setCategory(editing.category || 'Other')
      } else {
        setTitle('')
        setDescription('')
        setCategory('Other')
      }
      setMessage('')
      setTimeout(() => dialogRef.current?.focus(), 40)
    }
  }, [isOpen, editing])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  async function handleSave(e) {
    e.preventDefault()

    if (!title.trim()) {
      setMessage('Title is required.')
      return
    }

    if (editing) {
      update(editing.id, {
        ...editing,
        title: title.trim(),
        description: description.trim(),
        category: category || 'Other',
      })
    } else {
      const note = {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        title: title.trim(),
        description: description.trim(),
        category: category || 'Other',
        createdAt: new Date().toISOString(),
      }
      create(note)
    }

    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <form
        onSubmit={handleSave}
        className="bg-white rounded shadow-lg z-10 w-full max-w-xl p-6"
        role="dialog"
        aria-modal="true"
        ref={dialogRef}
        tabIndex="-1"
      >
        <h2 className="text-lg font-medium mb-3">
          {editing ? 'Edit Note' : 'Create Note'}
        </h2>
        <label className="block text-sm">
          Title *
          <input
            className="mt-1 block w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className="block text-sm mt-3">
          Description
          <textarea
            className="mt-1 block w-full border rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          />
        </label>
        <label className="block text-sm mt-3">
          Category
          <select
            className="mt-1 block w-full border rounded px-3 py-2 bg-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORY_OPTIONS.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        {message && (
          <div className="text-sm text-red-600 mt-2">{message}</div>
        )}

  <div className="mt-4 flex items-center justify-end gap-2">
  <button
    type="button"
    onClick={onClose}
    className="
      px-3 py-1 rounded border 
      bg-slate-100 hover:bg-slate-200
      dark:bg-slate-700 dark:border-slate-600 dark:text-white
      dark:hover:bg-slate-600
      transition
    "
  >
    Cancel
  </button>
  <button
    type="submit"
    className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
  >
    Save
  </button>
</div>
      </form>
    </div>
  )
}
