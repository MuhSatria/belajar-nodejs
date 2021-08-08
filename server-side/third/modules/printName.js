
function printNameFnc (name) {
  return `Hello, my name is ${name}`
}

const author = {
  name: 'Athanasia De Alger Obelia',
  age: '16',
  printAuthor () {
    return `Hello, My name is ${this.name} and i am ${this.age} old.`
  }
}

module.exports = {
  printNameFnc,
  author
}