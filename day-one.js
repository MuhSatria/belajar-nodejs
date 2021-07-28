var person = [1, 2, 3, 4, 5, 6]
console.log('person')

let obj = person.find(o => o === 2)
console.log('find object in array ', obj)

var pushObject = person.push(10)
console.log('push ', pushObject)
console.log('all array  ', person)
console.log('length array  ', person.length)

let varNewObj = [20, 30, 40];

var arrayPushArray = person.push(varNewObj)
console.log('array push array ', arrayPushArray)
console.log('final array ', person)
console.log('type of person ', typeof person)

var arrayOne = [
  {
    id: 1,
    name: 'Cassia'
  },
  {
    id: 2,
    name: 'Athanasia'
  }
]

console.log('Array Name ', arrayOne)
console.log('type of arrayOne ', typeof arrayOne)

var objOne = { id: 3, name: 'Tiana' }
console.log('type of objOne ', typeof objOne)