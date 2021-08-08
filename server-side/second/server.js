const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
  fs.readFile('index.html', (error, data) => {
    if (error) throw error

    // kirim response
    response.writeHead(200, { 'Content-type': 'text/html' })
    response.write(data)
    response.end()
  })
}).listen(8000)

console.log('Server Running on https://localhost/8000')
