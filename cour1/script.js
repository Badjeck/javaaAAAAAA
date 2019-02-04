//'use strict';

// let username;
// username = 'Jeremy';
// username="toto";
// username=3;

// const unserStatus =1;

// let myString1 = 'HELLO';
// let myString2 = "HELLO";
// let myString3 = `UI`;

// let myNumber = 1.5;

// let myBoolean = true;

// let myUndefine = undefined;

// let MyNull = null;

// console.log('HELLO '+ 'WORD');
// const str1 ="HELLO";
// const str2 ='HELLO';
// console.log(`${str1} ${str2}`);7

// let a = 10 + 32;
// a += 8;

// let b=10-5;
// b -=8
// console.log('b', b);

// let c= 5*7;
// c *=2;
// let d = 7/2;
// d /=2;

// let e =5;
// e++;

// let f=5;
// f--;

// console.log(+'3');
// console.log(+true);

// console.log('4' + 3); //concatenation 43
// console.log(3 + 4 + '7') //77
// console.log('7' + 4 + 3) //743

/* 
<
>
>=
<+
===
!==
*/

// console.log('2>1', 2>1); //true
// console.log('2<1', 2<1); //false

// console.log('',20 >=10); //true
// console.log('', 10<=10); //true
// console.log('',4!=4); // false
// console.log('', 4 !== 4); //true

// console.log('hello' === 'hello'); //true
// console.log('hello' === 'hello'); //false

// if (5 >0 && 5< 10){
//     console.log('1');

// }else {
//     console.log('2');
// }


// if(20/0 >10 || 20/2 <115){
//     console.log('yes');
// }else{
//     console.log('no');
// }

// isPrivate = true
// isMembre = false

// if(isPrivate === false || (isPrivate === true && isMembre === true)){
//     console.log('can see the group');
// }else{
//     console.log('nop nop nop');
// }

// if(isPrivate || (isPrivate && isMembre)){
//     console.log('can see the group');
// }else{
//     console.log('nop nop nop');
// }


// const today = 'lundi';

// if (today === 'lundi'){

// }else if (today === 'mardi'){

// }else if (today === 'mercredi'){
    
// }else if (today === 'jeudi'){
    
// }else if (today === 'vendredi'){
    
// }

// switch (today){
//     case 'lundi':
//     console.log(`Aujourd'hui on est ${today}`);
//     break;
//     case 'mardi':
//     console.log(`Aujourd'hui on est ${today}`);
//     break;
//     case 'mercredi':
//     console.log(`Aujourd'hui on est ${today}`);
//     break;
//     case 'jeudi':
//     console.log(`Aujourd'hui on est ${today}`);
//     break;
//     case 'vendredi':
//     console.log(`Aujourd'hui on est ${today}`);
//     break;
// }



// let username = prompt('what is your name');
// console.log('username', username);

// if (username) {
//     alert(`Nice to meet you ${username}`);  
// }else{
//     alert(`'Don't be shy!'`);
// }


// username !== null ?
//     alert(`Nice to meet you ${username}`) :
//     alert(`'Don't be shy!'`);

// text ='hello word'

// function myFunc(text) {
//     console.log(text);
//     return;
// }

// const myFunc2 = (text) => {
//     return text;
// }

// console.log(myFunc2());

// const sum = (p1,p2=0) => {
//     return p1 +p2;
// }

// console.log(sum(4,10));

//const sum = (p1,p2=0) => p1+p2;

// const truncate = (str,length,trail='...') =>{
//     if (str.lenght > lenght){
//         return str.substring(0,lenght)+trail
//     }else{
//         return str
//     }   
// }

// const res1 = truncate('I will be troncaated',15,'->');
// console.log(res1);
// const res2 = truncate('I will be truncated',5);
// console.log(res2);


// const myArray = [1,'hello',[1,2,3]]
// console.log(myArray);

// console.log(myAway[0]);
// console.log(myAway[1]);

// console.log(myAway.length);
// console.log(myAway[myArray.length -1]);

// const arr = [0,1,2,3,4,5,6,7];


// arr.map(x => {
//     console.log('x',x);
//     return x/2;
// });

// let res =[]

// arr.forEach(num => {
//     console.log('num',num);
//     res.push(num /2);
// })
// console.log('res',res);


// const myArr = [1,2,3];
// const myArr2 = myArr; //myArr2 = [...myArr] pour ne plus que les tableau ai les mêmes references

// myArr[0] = 0;
// console.log(mayArr);
// console.log(mayArr2);

// const user = {
//     id: 1,
//     name: 'Joshua',
//     email: 'email@email.email',
//     car:{
//         color: 'bleuge'
//     },
//     test: [oui,non,noin]
// }

// console.log(user.id);
// console.log(user['id']);
// console.log(user.car.color);
// console.log(['car'].color);

// const myProp = 'car';
// console.log(user[myProp].color);


// const cart = [
//     { item: 'a', price: 2, quantity: 1 }
//     { item: 'b', price: 3, quantity: 1 }
//     { item: 'c', price: 4, quantity: 1 }
// ];

// const res = cart.reduce((acc, curVal) => {
//     console.log('acc',acc);
//     console.log('curVal',curVal);
//     return acc += curVal.price * curVal.quantity
// },0);

// console.log('res',res);




// myCharacter = 'Luna Lovegood';

// function useSortingHat(char) {
//   let choice = ''
  
//   switch (char) {
//     case 'Harry Potter':
//       choice = 'Gryffindor';
//     case 'Draco Malfoy':
//       choice = 'Ravenclaw';
//     case 'Luna Lovegood':
//       choice = 'Ravenclaw';
//     default:
//       'Gryffindor'
//   }
// }

// const checkMyGringottsAccount = () =>{
//     myMoney = Math.random() * 100

//     if (myMoney > 0 || myMoney < 30) {
//         return 'Hello Weasley'
//     }else if ( myMoney > 30 ||  myMoney < 75 ) {
//         return `Hey, that's cool` 
//     }else {
//         return `You're reach!`
//     }
// }

// myCharacterHouse = useSortingHat()

// isMyCharacterRich = checkMyGringottsAccount()



// const MyDivs = 
// document.getElementsByTagName('div');
// console.log('MyDivs', MyDivs)

// const MyDivs2 =
// document. querySelectorAll('div');
// console.log('Mydivs2', MyDivs2)

// const MyParagraphs =
// document.getElementsByTagName('secondary-paragraph');
// const MyParagraphs2 =
// document.querySelectorAll('.secondary-paragraph');

// const myUniqueEl = document.getElementById('js-unique-el');
// const myUniqueEl2 = document. querySelector('js-unique-el');

// const MyParagraphsInDivs = document.querySelectorAll('div p');

// const spanPrecededByDivs = document.querySelector('dic + span');
// console.log('spanPrecededByDivs',spanPrecededByDivs);

// const myDivs = document.getElementsByTagName('div');
// console.log('myDivs', myDivs);

// const myDivs2 = document.querySelectorAll('div');
// console.log('myDivs2', myDivs2);

// const myParagraphs = document.getElementsByClassName('secondary-paragraph');
// const myParagraphs2 = document.querySelectorAll('secondary-paragraph');

// const myUniqueEl = document.getElementById('js-unique-el');
// const myUniqueEl2 = document.querySelectorAll('#js-unique-el');

// const myParagraphsInDivs = document.querySelectorAll('div p');
// console.log('myparagraphInDivs', myParagraphsInDivs);

// const spansProceededByDivs = document.querySelector('div + span');
// console.log('spansProceedByDivs', spansProceededByDivs);








// const firstP = document.querySelector('.first-p');
// firstP.innerText = 'I am the first paragraph';
// console.log('firstP > text', firstP.innerText);

// const secondP = document.querySelector('.second-p');
// secondP.innerHTML = '<span>Hello</span>';
// console.log('secondP html', secondP.innerHTML);

// const myImg = document.querySelector('img');
// myImg.setAttribute('width', '50%');
// myImg.setAttribute('height', 'auto');

// firstP.getElementsByClassName.color = 'blue';
// firstP.getElementsByClassName.fontSize = '1.5rem';


// myImg.className = 'my-class';
// myImg.classList.add('my-class');
// myImg.classList.remove('some-class');

// const myBody = document.querySelector('body');
// const newEl = document.createElement('p');
// newEl.innerText = 'Hello';
// newEl.style.color = 'red';

// myBody.appendChild(newEl);

// const newEl2 = document.createElement('p');
// newEl2.innerText = 'HEEEELLLLLOOOOO';
// newEl2.style.color = 'yellow';

// myBody.removeChild(newEl2);







// const lepoulet = document.querySelector('.p1');
// lepoulet.innerText = navigator.userAgent

// const ladinde = document.querySelectorAll('.p2');
// ladinde.innerText = navigator.language

// const lecanard = document.querySelector('.p3');
// lecanard.innerText = navigator.platform



























