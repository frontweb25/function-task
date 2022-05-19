// // Pure функции

// function squad (n) {
//     return n**2;
// }

// // console.log(squad(4));

// function squad2(n) {
//     document.querySelector('.out-1').textContent = squad(n);
// }

// // squad2(5);

// let count = 0;

// function myCount(){
//     return count++;
// }

// // console.log(myCount());
// // console.log(myCount());
// // console.log(myCount());

// function showAlert(){
//     alert('Hello');
// }

// // showAlert();

// function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// // for (let i = 0; i < 20; i++) {
// //     console.log(randomInt(10,20));
// // }

// function year(d){
//     let today = new Date();
//     let year = today.getFullYear()
//     return (year - d);
// }

// console.log(year(2005));

// function show(d){
//     console.log(d);
// }

// // show(4444);

// function hello(){
//     console.log('hello');
// }
// hello.hi = 123;

// console.log(hello.hi);

// function pOdd() {
//     console.log('odd');
// }

// function pEven() {
//     console.log('even');
// }

// function myNumber(n, odd, even) {
//     if (n % 2 === 0) return even;
//     else return odd;
// }

// let z = myNumber(6, pOdd, pEven);
// // console.log(z);
// z();

// const w = [
//     { name: "Ivan", "age" : 25},
//     { name: "Serg", "age" : 35},
//     { name: "Olga", "age" : 27},
// ];


// function mySortAge(arr){
//     return arr.filter(item => item.age > 26 ? true : false);
    
// }


const user = {
    age: 25,
    password: '35fgdfga',
    agreeToTerms: true,
};


const checkAge = (user) => user.age > 18;
const checkPassword = (user) => user.password.length > 6;
const checkTerms = (user) => user.agreeToTerms === true;


function createValidator(...testUser){
    return function(obj) {
        for(let i = 0; i < testUser.length; i++){
            if(testUser[i](obj) === false){
                return false
            }
        }
        return true;
    };
}


const validator1 = createValidator(checkAge, checkPassword, checkTerms);
console.log(validator1(user));




