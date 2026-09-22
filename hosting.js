//hosting

// console.log(name);
// var name="tarang";



/////////temperoal red zone bcoz of let(the period between interating a scope and intialize a let and const is called temporal red zone) TDZ////
// console.log(age);
// let age=14;

////cloauser////(inner fn can remember alll the varible of outer fun even if outer fn exits is called clauser)

// function outer()
// {
//     let counter=0;
//     function inner()
//     {
//         counter++;
//         console.log("counter",counter)
//     }
//     return inner;
// }

// let incerment=outer();
// incerment();



////////////higher order function/////////when a function accpet another function as an argument and return a function is called higher oredr function////////

// function calculate(a,b, operation) {
//     return operation(a,b);
// }
// function add(a,b) {
//     return a+b;
// }
// function multiply(a,b) {
//     return a*b;
// }
// console.log(calculate(5, 3, add)); 
// console.log(calculate(5, 3, multiply));


///////////////(.map)////
// .map
// let number = [1, 2, 3, 4, 5];
// let square = number.map(function(num) {
//   return num * num;
// });
// console.log(square); 



///with help of using arrow function
// let number = [1, 2, 3, 4, 5];

// let square = number.map((num) => {
//     return num * num;
// });

// console.log(square);


/////////////////filter///////////

// let number = [1, 2, 3, 4, 5];
// let even= number.filter(num=>{return num%2===0});
// console.log(even);



//////////////////reduce(combining all the array elemt in a single value is called reduce)///////
// let number=[1,2,3,4,5];
// let total=number.reduce((Sum,num)=>{
//     return sum+num;
// },0);
// // return total;
// let numbers = [10, 20, 30, 40, 50, 60];
// let maximum = numbers.reduce((max, number)=>{
//     if(number>max){
//         return number;
//     }else{
//         return max;
//     }

// }, 0);
// console.log(maximum);




/////////promisee/////
