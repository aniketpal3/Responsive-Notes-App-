
export function ensureUniqueTitleOnCreate(currentNotes, note) {
  const base = note.title.trim()
  const cat = note.category || 'Other'
  const existing = currentNotes.filter(
    (n) => n.category === cat && n.title.toLowerCase().startsWith(base.toLowerCase())
  )

  if (!existing.some((n) => n.title.toLowerCase() === base.toLowerCase())) {
    return note
  }

  let max = 0
  const regex = new RegExp(`^${escapeRegExp(base)}(?: \((\\d+)\))?$`, 'i')
  existing.forEach((n) => {
    const m = n.title.match(regex)
    if (m) {
      const num = m[1] ? parseInt(m[1], 10) : 0
      if (num > max) max = num
    }
  })
  const newTitle = `${base} (${max + 1})`
  return { ...note, title: newTitle, _autoAdjusted: true }
}

export function ensureUniqueTitleOnUpdate(currentNotes, id, data) {
  const base = data.title.trim()
  const cat = data.category || 'Other'
  const existing = currentNotes.filter(
    (n) => n.category === cat && n.id !== id && n.title.toLowerCase().startsWith(base.toLowerCase())
  )

  if (!existing.some((n) => n.title.toLowerCase() === base.toLowerCase())) {
    return data
  }

  let max = 0
  const regex = new RegExp(`^${escapeRegExp(base)}(?: \((\\d+)\))?$`, 'i')
  existing.forEach((n) => {
    const m = n.title.match(regex)
    if (m) {
      const num = m[1] ? parseInt(m[1], 10) : 0
      if (num > max) max = num
    }
  })
  const newTitle = `${base} (${max + 1})`
  return { ...data, title: newTitle, _autoAdjusted: true }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')
}
