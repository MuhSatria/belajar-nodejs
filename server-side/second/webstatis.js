const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((request, response) => {
  const query = url.parse(request.url, true)
  var fileName = './website' + query.pathname

  fs.readFile(fileName, (err, data) => {
    // wajib menggunakan return untuk menghendari error
    if (err) {
      response.writeHead(404, { 'Content-type': 'text/html' })
      return response.end('404 Not Found')
    }

    response.writeHead(200, { 'Content-type': 'text/html' })
    response.write(data)
    return response.end()
  })
}).listen(8000)

console.log('Server Running on https://localhost:8000')