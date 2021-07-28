// {
//   "name": "belajar-npm",
//   "version": "1.0.0",
//   "description": "proses belajar npm",
//   "main": "what.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [
//     "npm"
//   ],
//   "author": "athanasia",
//   "license": "ISC"
// }

// selain properti-properti di atas, masih ada lagi properti lain:
// - depedencies => berisi keterangan modul atau library yang di butuhkan aplikasi.
// - devDependencies => berisi keterangan modul atau library yang dibutuhkan untuk pengembangan aplikasi

// -------------------------------------------------------------------------------------------------------------
// Kemampuan NPM berikutnya yang patut kita coba adalah kemampuannya mengeksekusi skrip bash atau command line. Biasanya digunakan untuk melakukan kompilasi, build, menjalankan server, testing, dan sebagainya.

// jika di script kita menuliskan :
// "hello": "echo \"Hello Athanasia\"" dan kita run dng ( npm run hello )
// maka akan muncul Hello Athanasia

// membuat module sendiri
exports.nameQuery = () => {
  return "Hallo this is Athanasia "
}
