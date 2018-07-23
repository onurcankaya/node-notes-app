console.log('starting notes.js')

const addNote = (title, body) => {
  console.log('Adding note', title, body)
}

const getAll = (title, body) => {
  console.log('Listing all the notes')
}

const getNote = (title) => {
  console.log('Fetching note', title)
}

const removeNote = (title) => {
  console.log('Removing note', title)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
}
