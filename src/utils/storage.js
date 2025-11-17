export const STORAGE_KEY = 'notes_app_v1'

export async function loadNotesFromSeed() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      return JSON.parse(raw)
    }
    const resp = await fetch('/notes.json')
    const data = await resp.json()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return data
  } catch (err) {
    console.error('Failed to load notes:', err)
    return []
  }
}

export function saveNotesToStorage(notes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  } catch (err) {
    console.error('Failed to save notes:', err)
  }
}
