const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// create folder data
fs.exists('./data', (e) => {
  if (!e) {
    fs.mkdir('./data', { recursive: true }, (err) => {
      if (err) throw err
    })
  }
})

// create file contacts.json
fs.exists('./data/contacts.json', (e) => {
  if (!e) {
    fs.writeFile('./data/contacts.json', '[]', 'utf8', (err) => {
      if (err) throw err
    })
  }
})

rl.question('Masukkan Nama Anda : ', (name) => {
  rl.question('Masukkan Nomor Hp : ', (telephon) => {
    const contact = { name, telephon }

    // const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const file = fs.readFile('data/contacts.json', 'utf8', (err, data) => {
      if (err) throw err

      const contacts = JSON.parse(data) // karena data di atas masih berbentuk string, jadi kit aperlu ubah ke dalam Json agar bisa di push ke dalam contact

      contacts.push(contact)

      // karena kita ingin memasukan data tersebut ke dalam file contacts.json maka kita perlu untuk membaca file tersebut dng wwriteFile dan untuk data contacts akan kita ubah menjadi string
      fs.writeFile('data/contacts.json', JSON.stringify(contacts), (err) => {
        if (err) throw err

        console.log('Terimakasih Data telah berhasil di push ke dalam contacts.json')
      })
    })

    rl.close()
  })
})