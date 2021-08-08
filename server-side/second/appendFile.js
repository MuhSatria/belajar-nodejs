const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
  fs.appendFile('myFile.txt', 'Hello ini file text yang dibuat oleh fs.appendFile', (error) => {
    if (error) throw error

    console.log('success')
  })
  response.end('Bisa di tambah cuy')
}).listen(8000)

console.log('Server Running on https://localhost:8000')
