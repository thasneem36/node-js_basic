const a = ['a','b']

// const b = a.slice()
const b = [...a]

b.push('c')

// console.log(a)
// console.log(b)

// const toArray = (a1,a2,a3) => {
//     return [a1,a2,a3]
// }
// console.log(toArray(1,2,3))

const toArray = (...a) => {
    return a
}
console.log(toArray(1,2,3))