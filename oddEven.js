// odd and even number

const num1 = 23;
const num2 = 44;
if(num2 % 2 == 0){
    console.log('this is even number', num2)
}
else{
    console.log('this is odd number', num1)
}

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
const happyFebruary = leapyear(2024)
console.log(happyFebruary)