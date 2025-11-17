import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import NotesGrid from './components/NotesGrid'
import NoteModal from './components/NoteModal'
import ConfirmDialog from './components/ConfirmDialog'
import SearchBar from './components/SearchBar'
import { useNotes } from './context/NotesContext'

export default function App() {
  const { state } = useNotes()
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Notes')
  const [sortOrder, setSortOrder] = useState('newest')
  const [modalOpen, setModalOpen] = useState(false)
  const [editingNote, setEditingNote] = useState(null)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [noteToDelete, setNoteToDelete] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }, [darkMode])

  function openCreate() {
    setEditingNote(null)
    setModalOpen(true)
  }

  function openEdit(note) {
    setEditingNote(note)
    setModalOpen(true)
  }

  function openConfirm(note) {
    setNoteToDelete(note)
    setConfirmOpen(true)
  }

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900 transition-colors duration-300">

      <Sidebar
        notes={state.notes}
        selected={selectedCategory}
        onSelect={(c) => {
          setSelectedCategory(c)
          setSidebarOpen(false)
        }}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-4 left-4 z-[60] p-2 rounded bg-white dark:bg-slate-800 border shadow hover:bg-slate-100 dark:hover:bg-slate-700 transition"
          >
            <div className="flex flex-col gap-1">
              <span className="block w-6 h-0.5 bg-slate-700 dark:bg-slate-300"></span>
              <span className="block w-6 h-0.5 bg-slate-700 dark:bg-slate-300"></span>
              <span className="block w-6 h-0.5 bg-slate-700 dark:bg-slate-300"></span>
            </div>
          </button>
        )}

        <Header
          onOpenSidebar={() => setSidebarOpen(true)}
          onCreate={openCreate}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main className="p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
              <SearchBar value={query} onChange={setQuery} />
              <div className="flex items-center gap-2">
                <label className="text-sm dark:text-slate-200">Sort</label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="border dark:border-slate-600 dark:bg-slate-800 dark:text-white rounded px-2 py-1 text-sm"
                >
                  <option value="newest">Latest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>

            <NotesGrid
              notes={state.notes}
              query={query}
              category={selectedCategory}
              sortOrder={sortOrder}
              onEdit={openEdit}
              onDelete={openConfirm}
            />
          </div>
        </main>
      </div>
      <NoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        editing={editingNote}
      />

      <ConfirmDialog
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        note={noteToDelete}
      />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
