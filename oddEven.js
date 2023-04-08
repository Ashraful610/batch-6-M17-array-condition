// odd and even number

// const num1 = 23;
// const num2 = 44;
// if(num2 % 2 == 0){
//     console.log('this is even number', num2)
// }
// else{
//     console.log('this is odd number', num1)
// }

// leapyear 
function leapyear(year){
    const year2 = year % 4;
    if(year2 == 0){
    console.log("this is leap year" , year2)
    }
    else{
        console.log('this is not leap year' , year)
    }
}
// const happyFebruary = leapyear(2024)

// return odd numbers in array =
const numbersArray = [3, 5  , 7 , 9 , 13 , 17 , 20 , 12 , 25 , 24 , 44 , 82 , 6]
let totalNumbers = 0;
for(var i = 0 ; i < numbersArray.length ; i++){
    const num1 = numbersArray[i]
    if(num1 % 2 == 0){
        totalNumbers += num1;
        // console.log(num1)
    }
}
// console.log(totalNumbers)

// factorial 
function factorial(number){
    let num = 1;
    for(let i = 1; i <= number; i++){
        num *= i;
    }
    return num;
}
const result = factorial(5)
console.log(result)