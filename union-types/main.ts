// Union types are used when a value can be more than a single type.

// Such as when a property would be string or number.

//--------union on variables -- --- --- -
let myUnionType : string | number = 'Hello world'
console.log(myUnionType)
myUnionType = 2023
console.log(myUnionType)

let myAnotherUnionType : string | number | boolean = 'Hello Georgia'
console.log(myAnotherUnionType)
myAnotherUnionType = 2023
console.log(myAnotherUnionType)
myAnotherUnionType = true
console.log(myAnotherUnionType)

//--------union on array -- --- --- -

const myArray : Array<string|number> = [213, 'asd',1233, 'sad', 324]
console.log(myArray)

myArray.push('car')
myArray.push(2023)
console.log(myArray)



//--------union on function -- --- --- -

const myFunc = (num: string | number):string | void =>{
    num = num.toString()
    console.log(`User inputed ${num} as value`)
    // return num
}

console.log(myFunc(345))


