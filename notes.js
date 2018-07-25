console.log('starting notes.js')

const fs = require('fs')

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
  let notes = fetchNotes()
  const note = {
    title,
    body,
  }

  const duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

const getAll = (title, body) => {
  console.log('Listing all the notes')
}

const getNote = (title) => {
  console.log('Fetching note', title)
}

const removeNote = (title) => {
  let notes = fetchNotes()
  const filteredNotes = notes.filter((note) => note.title !== title)
  saveNotes(filteredNotes)

  return notes.length !== filteredNotes.length
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
}
