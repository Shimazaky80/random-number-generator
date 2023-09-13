// Math.random() will return a random decimal
// number between 0 and 1
let x = Math.random()

// if wanting to get a random number between
// 1 and 6
// will return a random number
// between 1 and 5
x = Math.random() * 20

// to truncate the decimal portion
// we can run down with Math.floor() method
// thiw will generate a random number
// between 0 through 5
x = Math.floor(x)

// if wanting to count from 1 to 6
// add the offset + 1
x = Math.floor(x + 1)
console.log(x)

// Rolling 3 dice
let a
let b
let c
// console.log(a)
// console.log(b)
// console.log(c)

document.getElementById("rollButton").onclick = ()=> {
    a = Math.floor(Math.random() * 6) + 1
    b = Math.floor(Math.random() * 6) + 1
    c = Math.floor(Math.random() * 6) + 1

    // every time we roll the dice
    // change the label element
    document.getElementById("aLabel").innerHTML = a
    document.getElementById("bLabel").innerHTML = b
    document.getElementById("cLabel").innerHTML = 6
}