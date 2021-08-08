// import library http dari node_module (direktory yang menyimpan library Nodejs.)
// library http - berfungsi untuk menangani protokol http seperti membuat dan menerima request
var http = require('http');
var url = require('url');
// const moment = require('moment');

// menampilkan module yang aku buat sendiri
// const nameFnc = require('./what')

// server yang kita buat akan merespon dengan "Hi, selamat datang di nodejs" saat di akses oleh client
var server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-type': 'text/html'});
  // 200 itu berarti response, seperti api jika responsenya 200 berarti ok / bisa
  // response.write(nameFnc.nameQuery());
  // response.write('Time ' + moment().format('D MMMM YYYY, h:mm:ss a'));
  // switch(request.url) {
  //   case '/home':
  //     response.write('You are in Homepage')
  //     break
  //   case '/profile':
  //     response.write('You are in Profile')
  //     break
  //   case '/about':
  //     response.write('You are in About')
  //     break
  //   default:
  //     response.write('404: Halaman tidak tersedia')
  // }
  var q = url.parse(request.url, true).query
  var txt = 'Header: ' + q.name
  // jika q.name kamu ganti q.keyword maka urlnya nanti harus di ubah jadi keyword, kalau menggunakan name maka tidak akan terbaca
  response.end(txt)
})

// nomor port yang akan di gunakan oleh server
server.listen(8000)
console.log('Server Running on https://localhost:8000')