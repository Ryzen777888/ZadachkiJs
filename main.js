let array = ["john", "smith", 123, 8000, undefined, null]
console.log(array[0],array[array.length-1]);


// //1. log first and last item of array. Array length can be infinite.
//
// 2. Append "start of array" at the beginning of array.
array.unshift("john")
console.log(array)

//3. Append arrayOfCustomers at the end of array.
const arrayOfCustomers = [
    {id: 1, name: "James", role: "user"},
    {id: 2, name: "Brandon", role: "admin"},
    {id: 3, name: "Marie", role: "user"}

]
array.push(arrayOfCustomers)
console.log({array})

// //4. Change all numbers in array to string type.
function transoformNumberInArray(element) {

    if (typeof element === `number`){

        return String(element)  //`${}`
    }
    return element
}


array = array.map(transoformNumberInArray)


console.log(array)

// //5. Filter array to receive an array of strings.
const arrayOfStrings = array.filter(e=>typeof e===`string` && e)
console.log(arrayOfStrings)

// //6. Find array of customers in shuffledArray.
const shuffledArray = shuffle(array)
let foundedArrayOfCustomers = shuffledArray.find(element => Array.isArray(element));
console.log(foundedArrayOfCustomers)

console.log(shuffledArray)

// //7. separate users and admins into two arrays from foundedArrayOfCustomers
const users = arrayOfCustomers.filter(person => person.role==="user")
console.log({users})
const admins = arrayOfCustomers.filter(person => person.role==="admin")
console.log({admins})
//
// //8. modify foundedArrayOfCustomers, role user should be named as 'customer'
foundedArrayOfCustomers = foundedArrayOfCustomers.map(element => {
    if (element.role === "user") {
        element.role = "customer"
    }
    return element
})

console.log(foundedArrayOfCustomers)

console.log({foundedArrayOfCustomers, arrayOfCustomers}) //figure out why arrayOfCustomers is also changed

// //9. concat 'foundedArrayOfCustomers' and 'arrayOfCustomers'
const nonUniqueCustomers = [...foundedArrayOfCustomers,...arrayOfCustomers] //foundedArrayOfCustomers.concat(arrayOfCustomers)
console.log({nonUniqueCustomers})

//10. sort nonUniqueCustomers by ascending of first letter in name of customer
const sorted = nonUniqueCustomers.sort(function (a,b) {
    if(a.name>b.name){
        return 1
    }
    if(a.name<b.name){
        return -1
    }
    return 0

})
console.log({sorted})
//
// //11. remove nesting of arrays
const nestedArrays = [
    ["first array"],
    ["second array"],
    ["third array"]
]

const flatArray = nestedArrays.flat()
console.log({flatArray})
//
//12. concat items of flatArray into single string
const string = flatArray.concat()
console.log(string.join(''))
//
//
//


function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

