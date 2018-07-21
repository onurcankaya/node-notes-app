console.log('starting app')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes')

const result = notes.addNote()
console.log(result)

const filteredArray = _.uniq(['Onur', 3, 4, 9, 'Onur', 3, 3, 3, 'Onur'])
console.log(filteredArray)

// const user = os.userInfo()

// fs.appendFile('greetingz.txt', ' hello ' + user.username, (err) => {
//     if (err) {
//         console.log('unable to write to file')
//     }
// })

// fs.appendFileSync('greetings.txt', `hello ${user.username}`)