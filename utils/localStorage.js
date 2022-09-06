export function getNotesFromLs() {
  const localNotes = localStorage.getItem('notes')
  return JSON.parse(localNotes)
}

export function setLocalNotes(updatedList) {
  localStorage.setItem('notes', JSON.stringify(updatedList))
}