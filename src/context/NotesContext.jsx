import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { loadNotesFromSeed, saveNotesToStorage, STORAGE_KEY } from '../utils/storage'
import { ensureUniqueTitleOnCreate, ensureUniqueTitleOnUpdate } from '../utils/titleHelpers'

const NotesContext = createContext()

const initialState = { notes: [], loaded: false }

function reducer(state, action) {
  switch (action.type) {
    case 'LOAD':
      return { ...state, notes: action.payload, loaded: true }
    case 'CREATE': {
      const note = action.payload
      const unique = ensureUniqueTitleOnCreate(state.notes, note)
      const nextNotes = [unique, ...state.notes]
      saveNotesToStorage(nextNotes)
      return { ...state, notes: nextNotes }
    }
    case 'UPDATE': {
      const { id, data } = action.payload
      const updated = ensureUniqueTitleOnUpdate(state.notes, id, data)
      const nextNotes = state.notes.map((n) => (n.id === id ? { ...n, ...updated } : n))
      saveNotesToStorage(nextNotes)
      return { ...state, notes: nextNotes }
    }
    case 'DELETE': {
      const id = action.payload
      const next = state.notes.filter((n) => n.id !== id)
      saveNotesToStorage(next)
      return { ...state, notes: next }
    }
    default:
      return state
  }
}

export function NotesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function init() {
      const notes = await loadNotesFromSeed()
      dispatch({ type: 'LOAD', payload: notes })
    }
    init()
  }, [])

  const actions = {
    create: (note) => dispatch({ type: 'CREATE', payload: note }),
    update: (id, data) => dispatch({ type: 'UPDATE', payload: { id, data } }),
    remove: (id) => dispatch({ type: 'DELETE', payload: id }),
  }

  return <NotesContext.Provider value={{ state, ...actions }}>{children}</NotesContext.Provider>
}

export function useNotes() {
  const ctx = useContext(NotesContext)
  if (!ctx) throw new Error('useNotes must be used within NotesProvider')
  return ctx
}
