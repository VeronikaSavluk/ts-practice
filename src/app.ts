// const btn1 = document.querySelector("button")!;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// btn1.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });

// // 1. Задайте правильні ts типи для класичних js;

// let age:number;
// age = 50;
// let userName:string;
// userName = 'Max';
// let toggle:boolean;
// toggle = true;
// let empty:null;
// empty = null;
// let notInitialize:undefined;
// notInitialize = undefined;
// // let callback = (a:number) => number;
// // callback = (a) => { return 100 + a };

// // 2. Задайте тип для змінної, в яку можна зберегти будь-яке значення.

// let anything:any;
// anything = -20;
// anything = 'Text';
// anything = {};

// // 3. Виправте код зі змінною unknown,
// // щоб у нього можна було зберегти змінну з текстом.
// // let person = ['Max', 21];

// let person:[string, number];
// person = ['Max', 21];

// // 4. Опишіть enum умову наступну:
// // він повинен відображати статус завантаження.
// // Завантажується (LOADING) та завантажена (READY).

// enum Load {LOADING, READY};

// const picture = {
// 	load: Load.READY
// };

// if(picture.load === Load.LOADING){
// 	console.log('Picture is loading');
// };

// if(picture.load === Load.READY){
// 	console.log('Picture is loaded');
// };


// //5. Зробіть змінну, яка може приймати або рядок, або число.

// let something: string | number;
// something = 6;
// something = 'Hello!';

// //6. Зробіть змінну, яка може приймати лише одне значення з двох:
// // 'enable' або 'disable'

// let btn: 'enable' | 'disable';

// // 7. Вкажіть типи для наступних функцій
// function showMessage(message:string):void {
//   console.log(message);
// }


// function calc(num1:number, num2:number):number {
//   return num1 + num2;
// }

// function customError():never {
//   throw new Error('Error');
// }


// // 8. Створіть свій тип даних на основі наявних даних.
// 	// const page1 = {
// 	//   title: 'The awesome page',
// 	//   likes: 100,
// 	//   accounts: ['Max', 'Anton', 'Nikita'],
// 	//   status: 'open',
// 	//   details: {
// 	//     createAt: '2021-01-01',
// 	//     updateAt: '2021-05-01',
// 	//   }
// 	// };
	
// 	// const page2 = {
// 	//   title: 'Python or Js',
// 	//   likes: 5,
// 	//   accounts: ['Alex'],
// 	//   status: 'close',
// 	// };
	
// type page = {
// 	title:string;
//   likes:number;
//   accounts:string[];
//   status: 'open' | 'close';
//   details?: {
//     createAt:Date;
//     updateAt:Date;
//   }
// };