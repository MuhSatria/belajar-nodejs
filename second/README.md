## Apa itu Node Js
---------------------
NodeJs is a Javascript runtime environment.

NodeJs berjalan secara Asynchronous

*Berbeda dengan bahasa pemrograman sisi server pada umumnya yang bersifat blocking, Node.js bersifat non-blocking, sebagaimana halnya JavaScript bekerja.*

bacalah
## Syncronous & Asycnronous
link : https://dev.to/guntur/memahami-synchronous-dan-asynchronous-javascript-4kjj

Syncronous => proses yang berjalan secara berurutan / bisa di katakan blocking.

Asyncronous => proses yang berjalan secara bari perbaris juga. Dalam skenario-nya, sebenarnya kode async telah diproses, hanya saja sebatas penjadwalan untuk dieksekusi pada tahapan berikutnya. Artinya, kode yang berperilaku async tidak akan langsung dieksekusi, tetapi di skip dan akan melakukan eksekusi baris perintah berikutnya.

*Kembali ke NodeJs*

Nodejs memiliki peran agar javascript dapat berjalan di sisi server, sepertihalnya PHP, Ruby, Perl dsb, NodeJs dapat berjalan di sistem operasi seperti windows, Os, Linux, dan NodeJs memiliki pustaka Http sendiri sehingga memungkinkan untuk menjalankan server web sendiri tanpa menggunakan program webserver seperti Apache / Nginx.

Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it.

-- karena inilah banyak yang menyebutkan bahwa javascript merupakan bahasa pemrograman masa depan --- dan karena inilah saat kita menggunakan javascript adabaiknya kita menggunakan ( Async / Await & Promis )

*Why Node.js?*

Here’s a formal definition as given on the official Node.js website:

    Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.

    Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

    Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

*I/O refers to input/output. It can be anything ranging from reading/writing local files to making an HTTP request to an API.*



## File System dalam NodeJs
---------------------------
fungsid ari file sustem (fs) dalam NodJs adalah memungkinkan untuk kita membuat file, menghapus file, membaca file serta menulis file seperti layaknya bahasa pemrograman PHP,
untuk menggunakannya kita hanya perlu untuk mengimportnya saja

example :
const fs = require('fs')

di dalam (fs) terdapat berbagai macam method salah satunya
- fs.readFile => method yang di gunakan untuk membaca file, dan memiliki 2 parameter yaitu (Nama file & Fungsi yang akan dieksekusi saat file dibaca)

 example :
 fs.readFile('index.html', (error, data) => {
   // action yang ingin ditampilkan
 })

 ------------------------------------

- fs.appendFile() => method yang digunakan untuk membuat dan mengisi file.

 example :
 fs.appendFile(path, data, [option], callback)
  - path : string | buffer | url | number - filename or file description
  - data : string | buffer
  - options : object | string
    => encoding : string | nill - Default 'utf8'
    => mode : integer - Default 0o666
    => flag : string - See support of file system (flag) - Default 'a'
  - callback : function
    => err : error

 fs.appendFile('myFile.txt', 'Hello Athanasia', (error) => {
   if (error) throw error
   console.log('succes')
 })

 ----------------------------------------

- fs.open() => method memiliki 2 fungsi untuk membuka dan menulis file

 example :
 fs.open(path, flags, [model], callback)
  - path : string | buffer | url
  - flags : string | number see suport of file system flags. Default: 'r'
  - mode : string | integer Default: 0o666 (readable & writable)
  - callback : function
    => err : error
    => fd : integer

fs.open(myTextFile.txt, 'w', (err, file) => {
  if (err) throw err

  // kontent yang akan kita tulis ke file
  const content = "Hello Athanasia"

  // tulis kontent ke file
  fs.writeFile(file, content, (err) => {
    if (err) throw err
    console.log('saved')
  })

  // baca file
  fs.readFile(file, (err, data) => {
    if (err) throw err
    console.log(data.toString('utf8'))
  })
})

* pada fugsi fs.readFile() kita menggunakan fungsi toString('utf8') untuk mengubah buffer menjadi text dengan encode UTF-8

* flag ada beberapa tidak hanya w
example :
 - r : buka file untuk dibaca, jika tidak ada maka akan terjadi error
 - r+ : buka file untuk dibaca dan ditulis, apabila file tidak ada maka akan error
 - rs : buka file untuk dibaca dalam mode syncronous
 - rs+ : buka file untuk dibaca dan ditulis dalam mode syncronous
 - w : buka file untuk ditulis
 - wx : sama seperti w, tapi akan error jika sudah ada filenya
 - w+ : buka file untuk ditulis dan di baca
 - WX+ : sama seperti w+ tapi akan error jika sudah ada filenya
 - a : buka file untuk diisi
 - ax : sama seperti a, tapi akan error jika sudah ada filenya
 - a+ : buka file untuk diisi
 - ax+ : sama seperti a+, tapi akan error jika sudah ada filenya

------------------------------
- fs.rename() => method yang digunakan untuk menulis ulang nama path / rename

example :
fs.rename(oldPath, newPath, callback)
  - oldPath : string | buffer | url
  - newPath : string | buffer | url
  - callback : function
    => err : error

fs.rename('myTextFile.txt', 'myNewText.txt', (err) => {
  if (err) throw err
  console.log('success renamed')
})

------------------------------

- fs.unlink() => method yang digunakan untuk menghapus file

example : 
fs.unlink(path, callback)
  - path : string | buffer | url
  - callback : function
    => err : error

fs.unlink('myTextFile.txt', (err) => {
  if (err) throw err
  console.log('File Success Delete!')
})

 method lain kalian bisa baca di :
 https://nodejs.org/api/fs.html
 or
 https://www.petanikode.com/nodejs-file/
 or
 https://idjs.github.io/belajar-nodejs/nodejs/index.html