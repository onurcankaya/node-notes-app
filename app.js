const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv
const command = process.argv[2]

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('note created')
    notes.logNote(note)
  } else {
    console.log('note already exist')
  }
} else if (command === 'list') {
  const allNotes = notes.getAll(argv.title, argv.body)
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.map((note) => notes.logNote(note))
} else if (command === 'read') {
  const note = notes.getNote(argv.title, argv.body)
  if (note) {
    console.log('note found')
    notes.logNote(note)
  } else {
    console.log('note not found')
  }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title)
  const message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message)
} else {
  console.log('command not recognized')
}
