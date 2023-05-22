const divide = ({ dividend, divisor }: { dividend: number, divisor: number }):number => dividend / divisor;
  
console.log(divide({dividend:10,divisor:2}))

// Define a type alias for a function that takes two numbers and returns a number
type BinaryOperation = (a: number, b: number) => number;

// Define a variable that has the type of the BinaryOperation type alias
const add: BinaryOperation = (a, b) => a + b;
console.log(add(5,5))

type myNumbers = {
    x: number,
    y:number
}

const myNum :myNumbers = {x:20, y:23}

console.log(add(myNum.x, myNum.y))

//function with spread operator
const combineStrings = (...strings: string[]) => strings.join(' ');

const greet = (name: string, ...messages: string[]) => {
    const combinedMessage = combineStrings(...messages);
    console.log(`Hello, ${name}! ${combinedMessage}`);
};

greet('Mari', 'How are you?', 'What have you been up to?');


const addNum = (a: number, b: number, ...rest: number[]):number => a + b + rest.reduce((p, c) => p + c, 0);
  
console.log(addNum(5,8,3,6,12,52,-70))