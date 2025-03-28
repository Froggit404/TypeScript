"use strict";
// {
//     let a: string = 'hello'
//     let b: string = 'owu'
//     let c: string = 'com'
//     let d: string = 'ua'
//     let e: number = 1
//     let f: number = 10
//     let g: number = -999
//     let h: number = 123
//     let i: number = 3.14
//     let j: number = 2.7
//     let k: number = 16
//     let l: boolean = true
//     let m: boolean = false
//
//     console.log(a, b, c, d, e, f, g, h, i, j, k, l, m)
// }
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
// {
//     let firstName: string = 'Dmytro'
//     let lastName: string = 'Hrytsyk'
//     let middleName: string = 'Igorevich'
//     console.log(firstName + " " + lastName + " " + middleName)
// }
// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
// {
//     let a:number = 100
//     let b: string = '100'
//     let c: boolean = true
//     console.log(typeof a,typeof b, typeof c)
// }
// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//let a = 100; let b = '100'; let c = true;
// {
//     let firstName: string = 'Dmytro'
//     let age: string = '29' //тайтл промта приймае тільки стрінгові значення
//     let middleName: string = 'Igorevich'
//    prompt(firstName)
//    prompt(middleName)
//    prompt(age)
// }
// Додаткове для тих хто цікавився prompt`oм
// – За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
//--------------------------------------------------------------------------------------------------------------------------------------
// {
//     let arr: any = [10, true, 'cat', 3.14, false, 111, 'dag', 0.5, 100500, 'bird']
//     console.log(arr[0])
//     console.log(arr[1])
//     console.log(arr[2])
//     console.log(arr[3])
//     console.log(arr[4])
//     console.log(arr[5])
//     console.log(arr[6])
//     console.log(arr[7])
//     console.log(arr[8])
//     console.log(arr[9])
// }
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// {
//     interface Ibook {
//         title: string
//         pageCount: number
//         genre: string
//     }
//
//     let book1: Ibook = {title: 'tittle', pageCount: 44, genre: 'genre'}
//     let book2: Ibook = {title: 'tittle', pageCount: 12, genre: 'genre'}
//     let book3: Ibook = {title: 'tittle', pageCount: 22, genre: 'genre'}
//
//     console.log(book1, book2, book3)
// }
// – Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// {
//     type Book = {
//         title: string
//         pageCount: number
//         genre: string
//         authors:
//             {
//                 name: string,
//                 age: number
//             }[]
//     }
//
//     let book1: Book = {
//         title: 'title',
//         pageCount: 22,
//         genre: 'genre',
//         authors: [{name: 'name', age: 11}, {name: 'name', age: 22}]
//     }
//     let book2: Book = {
//         title: 'title',
//         pageCount: 44,
//         genre: 'genre',
//         authors: [{name: 'name', age: 33}, {name: 'name', age: 44}]
//     }
//     let book3: Book = {
//         title: 'title',
//         pageCount: 33,
//         genre: 'genre',
//         authors: [{name: 'name', age: 55}, {name: 'name', age: 66}]
//     }
//     console.log(book1,book2,book3)
// }
// – Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//     Поле “автори" – являється  масивом. Кожен автор має поля name та age.
// {
//     type user = {
//         name:string
//         username:string
//         password:string
//     }[]
//     let users:user = [
//         {name: 'user1', username: 'userName', password: 'passWord'},
//         {name: 'user2', username: 'userName', password: 'passWord'},
//         {name: 'user3', username: 'userName', password: 'passWord'},
//         {name: 'user4', username: 'userName', password: 'passWord'},
//         {name: 'user5', username: 'userName', password: 'passWord'}
//     ]
//     console.log(users[0].password)
//     console.log(users[1].password)
//     console.log(users[2].password)
//     console.log(users[3].password)
//     console.log(users[4].password)
// }
// – Створити масив з 10 об'єктами які описують сутніть “користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
// {
//     type Weather ={
//         day: string
//         morning_temp:number
//         day_temp:number
//         night_temp:number
//     }[]
// let weather:Weather =[
//     {day: 'Monday',morning_temp: 11,day_temp:12,night_temp:10},
//     {day: 'Tuesday',morning_temp: 11,day_temp:12,night_temp:10},
//     {day: 'Wednesday',morning_temp: 11,day_temp:12,night_temp:10},
//     {day: 'Thursday',morning_temp: 11,day_temp:12,night_temp:10},
//     {day: 'Friday',morning_temp: 11,day_temp:12,night_temp:10},
//     {day: 'Saturday',morning_temp: 11,day_temp:12,night_temp:10},
//     {day: 'Sunday',morning_temp: 11,day_temp:12,night_temp:10}]
//     console.log(weather)
// }
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
// {
//     let input: string | null = prompt('Ввведіть одне з чисел "1, 0, -3"')
//     let x: number = input !== null ? Number(input) : NaN;
//     if (isNaN(x)){
//         console.log('error')
//     }
//     else if (x === 0) {
//         document.write('<h1>Невірно</h1>')
//     } else {
//         document.write('<h1>Вірно</h1>')
//     }
// }
// – Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
// {
//     let input: string | null = prompt('Введіть число від 0 до 59')
//     let time: number = input !== null ? Number(input) : NaN
//
//     if (isNaN(time)) {
//         console.log('error')
//     } else if (time >= 0 && time < 15) {
//         console.log('перша чверть')
//     } else if (time >= 15 && time < 30) {
//         console.log('друга чверть')
//     } else if (time >= 30 && time < 45) {
//         console.log('третя чверть')
//     } else if (time >= 45 && time < 60) {
//         console.log('четверта чверть')
//     }
// }
// – Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// {
//     let input: string | null = prompt('Вкажіть дату від 1 до 31')
//     let day: number = input !== null ? Number(input) : NaN
//     if (isNaN(day)) {
//         throw new Error('incorrect input')
//     } else if (day >= 1 && day <= 10) {
//         console.log('перша декада')
//     } else if (day > 10 && day <= 20) {
//         console.log('друга декада')
//     } else if (day > 20 && day <= 31) {
//         console.log('третя декада')
//     }
// }
// – У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// {
//     let input: string | null = prompt('Оберіть день тижня')
//     let day: number = input !== null ? Number(input) : NaN
//     if (isNaN(day)) {
//         throw new Error('incorrect input')
//     } else {
//         switch (day) {
//             case 1:
//                 console.log('monday')
//                 break
//             case 2:
//                 console.log('tuesday')
//                 break
//             case 3:
//                 console.log('wednesday')
//                 break
//             case 4:
//                 console.log('thursday')
//                 break
//             case 5:
//                 console.log('friday')
//                 break
//             case 6:
//                 console.log('saturday')
//                 break
//             case 7:
//                 console.log('sunday')
//                 break
//             case NaN:
//                 console.log('error')
//                 break
//             default:
//                 console.log('incorrect day')
//         }
//     }
// }
// – Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
// {
//     let a: number = 21
//     let b: number = 21
//     if (a > b) {
//         console.log(a)
//     } else if (b > a) {
//         console.log(b)
//     } else if (a === b) {
//         console.log('числа рівні між собою')
//     }
// }
// – Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.
// {
//     let x:any = "ghjkl"
//     if (x ===0 || x===null||x===undefined||isNaN(x)){
//         x = "default"
//     }
//     console.log(x)
// }
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення “default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
// {
//     type coursesArr = {
//         title:string
//         monthDuration:number
//     }[]
//     let coursesAndDurationArray:coursesArr = [
//         {title: 'JavaScript Complex', monthDuration: 5},
//         {title: 'Java Complex', monthDuration: 6},
//         {title: 'Python Complex', monthDuration: 6},
//         {title: 'QA Complex', monthDuration: 4},
//         {title: 'FullStack', monthDuration: 7},
//         {title: 'Frontend', monthDuration: 4}
//     ];
// if (coursesAndDurationArray[0].monthDuration > 5){console.log("Супер")}
// if (coursesAndDurationArray[1].monthDuration > 5){console.log("Супер")}
// if (coursesAndDurationArray[2].monthDuration > 5){console.log("Супер")}
// if (coursesAndDurationArray[3].monthDuration > 5){console.log("Супер")}
// if (coursesAndDurationArray[4].monthDuration > 5){console.log("Супер")}
// if (coursesAndDurationArray[5].monthDuration > 5){console.log("Супер")}
//
// }
// *з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль “Супер".
//----------------------------------------------------------------------------------------------------------------------------------
// {
//     for (let i: number = 0; i < 10; i++) {
//         document.write('<div><p>QQQ</p></div>')
//     }
// }
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// {
//     for (let i: number = 0; i < 10; i++) {
//         document.write(`<div><p>${i} QQQ</p></div>`)
//     }
// }
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// {
//     let i: number = 0
//     while (i < 20) {
//         document.write('<h1>QQQQ</h1>')
//         i++
//     }
// }
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// {
//     let i:number = 0
//     while (i <20){
//         document.write(`<h1>${i} QQQ</h1>`)
//         i++
//     }
// }
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// {
//     let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//     document.write('<ul>')
//     for (const item of listOfItems) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write('</ul>')
// }
// – Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
// <!–
//
//         і тд інші об'єкти масиву
//          …
// …
// …
// –>
//
// </ul>
//
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// {
//     type Product = {
//         title: string
//         price: number
//         image: string
//     }[]
//     let products: Product = [
//         {
//             title: 'milk',
//             price: 22,
//             image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg'
//         },
//         {
//             title: 'juice',
//             price: 27,
//             image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//         },
//         {
//             title: 'tomato',
//             price: 47,
//             image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//         },
//         {
//             title: 'tea',
//             price: 15,
//             image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//         },
//     ];
//     for (const product of products) {
//         document.write(`
//         <div class="product-card">
//         <h3 class="product - title">${product.title}.Price - ${product.price}</h3>
//         <img src="${product.image}" alt="" class="product-image">
//         </div>
//         `)
//     }
// }
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
//
// < div class= "product - card" >
// <h3 class = "product - title" >
//     TITLE.Price – PRICE < /h3>
// < img
// src = "IMAGE"
// alt = ""
// class = "product - image" >
//     </div>
//
// Замість
// TITLE
// PRICE
// IMAGE – підставити
// відповідні
// поля
// з
// об
// 'єкту
// {
//     type Users = {
//         name: string
//         age: number
//         status: boolean
//     }[]
//     let users: Users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
//     for (const user of users) {
//         if (user.status) {
//             console.log(user)
//         }
//     }
//     for (const user of users) {
//         if (!user.status) {
//             console.log(user)
//         }
//     }
//     for (const user of users) {
//         if (user.age > 30) {
//             console.log(user)
//         }
//     }
//
// }
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
// {name: 'petya', age: 30, status: true},
// {name: 'kolya', age: 29, status: true},
// {name: 'olya', age: 28, status: false},
// {name: 'max', age: 30, status: true},
// {name: 'anya', age: 31, status: false},
// {name: 'oleg', age: 28, status: false},
// {name: 'andrey', age: 29, status: true},
// {name: 'masha', age: 30, status: true},
// {name: 'olya', age: 31, status: false},
// {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     – користувачів зі статусом true
//  – користувачів зі статусом false
//  – користувачів які старші за 30 років
// ----------------------------------------------------------------------------------------------------------------------------------
// {
//     function rectangle(width: number, height: number): number {
//         return width * height
//     }
//
//     let square: number = rectangle(8, 2)
//     console.log(square)
// }
// – створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// {
//     function circle(radius: number): number {
//         return Math.PI * radius * radius
//     }
//
//     let square: number = circle(5)
//     console.log(square)
// }
// – створити функцію яка обчислює та повертає площу кола з радіусом r
// {
//     function cylinder(radius: number, height: number): number {
//         return 2 * Math.PI * radius * height
//     }
//     let square:number= cylinder(4,2)
//     console.log(square)
// }
// – створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// {
//     function foo(array:number[]):void {
//         for (const element of array) {
//             console.log(element)
//         }
//
//     }
//     let numbers: number[] = [21, 32, 43, 54, 65]
//     foo(numbers)
// }
// – створити функцію яка приймає масив та виводить кожен його елемент
// {
//     function paragraph(text: string): void {
//         document.write(`<p>${text}</p>`)
//     }
//
//     paragraph('QQQQ')
//
// }
// – створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// {
//     function list(text:string):void {
//         document.write
//         (`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//         </ul>`)
//     }
//     list('hhhh')
// }
// – створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
// {
//     function list(text:string, lines:number):void {
//         document.write('<ul>')
//         for (let i:number = 0; i < lines; i++) {
//             document.write(`<li>${text}</li>`)
//         }
//         document.write('</ul>')
//     }
//     list('QQQ',7)
// }
// – створити функцію яка створює ul з  елементами li.
//     Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// {
//     function list(array: (number|string|boolean)[]):void {
//         document.write('<ul>')
//         for (const item of array) {
//             document.write(`<li>${item}</li>`)
//         }
//         document.write('</ul>')
//     }
// list([12,'qwerty',true,34])
// }
// – створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
// {
//     type Users = {
//         id: number
//         name: string
//         age: number
//     }[]
//
//     function f(array: Users): void {
//         for (const user of array) {
//             document.write(`
//             <div>
//             <p>${user.id}</p>
//             <p>${user.name}</p>
//             <p>${user.age}</p>
//             </div>`)
//         }
//     }
//
//     let users:Users=[
//         {id: 1, name: 'qqw', age: 21},
//         {id: 2, name: 'qqe', age: 22},
//         {id: 3, name: 'qqr', age: 23},
//         {id: 4, name: 'qqt', age: 24},
//     ]
//     f(users)
// }
// – створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// {
//     let arr: number[] = [12, 32, 23, 4, 56]
//
//     function f(arr: number[]): number {
//         let minNumber: number = arr[0]
//         for (let i: number = 1; i < arr.length; i++) {
//             let number: number = arr[i]
//             if (number < minNumber) {
//                 minNumber = number
//             }
//         }
//         return minNumber
//     }
//
//     console.log(f(arr));
// }
// – створити функцію яка повертає найменьше число з масиву
// {
//     let numbers: number[] = [1, 2, 10]
//
//     function sum(arr: number[]): number {
//         let box: number = 0
//         for (const number of arr) {
//             box = box + number
//         }
//         return box
//     }
//
//     console.log(sum(numbers));
// }
// – створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// {
//     function swap(arr: number[], insex1: number, index2: number): number[] {
//         if (insex1 < arr.length && index2 < arr.length) {
//             let temp: number = arr[insex1]
//             arr[insex1] = arr[index2]
//             arr[index2] = temp
//             return arr
//         }
//         throw new Error('incorrect index')
//     }
//
//     let numbers: number[] = [11, 22, 33, 44]
//     console.log(swap(numbers, 1, 0));
// }
// – створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// {
//     type CurrencyValues = {
//        currency:string
//        value:number
//     }[]
//     function exchange(sumUAH:number,currencyValues:CurrencyValues,exchangeCurrency:string):number|string {
//         for (const currency of currencyValues) {
//             if (currency.currency === exchangeCurrency){
//                 return sumUAH/currency.value
//             }
//
//         }
//         return "incorrect data"
//     }
//
//     console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
// }
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
//--------------------------------------------------------------------------------------------------------------------------//
// {
//     let square = (width: number, height: number): number => {
//         return width * height
//     }
//     console.log(square(12, 2));
// }
// – створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// {
//     let square = (radius: number): number => {
//         return Math.PI * radius * radius
//     }
//     console.log(square(22));
// }
// – створити функцію яка обчислює та повертає площу кола з радіусом r
// {
//     let square = (h:number,r:number):number =>{
//         return 2*Math.PI*r*h
//     }
//     console.log(square(3, 5));
// }
// – створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// {
//     let foo = (arr:(number|string)[]) => {
//         for (const item of arr) {
//             console.log(item)
//         }
//     }
//     foo([21,'KFKFK',44,'irfr'])
// }
// – створити функцію яка приймає масив та виводить кожен його елемент
// {
//     let foo = (text:string):void =>{
//         document.write(`<p>${text}</p>`)
//     }
//     foo('TTtt')
// }
// – створити функцію яка створює параграф з текстом. Текст задати через аргумент
// {
//     let foo = (text: string): void => {
//         document.write(`
//         <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//         </ul>
//         `)
//     }
//     foo('yyyttt')
// }
// – створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// {
//     let foo = (text: string, lines: number): void => {
//         document.write('<ul>')
//         for (let i = 0; i < lines; i++) {
//             document.write(`<li>${text}</li>`)
//         }
//     }
//     foo('yyyyy', 8)
// }
// – створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// {
//     let foo = (arr:(number|string|boolean)[]) =>{
//         document.write('<ul>')
//         for (const element of arr) {
//             document.write(`<li>${element}</li>`)
//         }
//         document.write('</ul>')
//     }
//     foo([21,'yyyy',true])
// }
// – створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// {
//     let foo = (arr: user) => {
//         for (const user of arr) {
//             document.write
//             (`<div>
//              <p>${user.id}-${user.name}-${user.age}</p>
//              </div>`)
//         }
//     }
//     foo([
//         {id: 1, name: 'qwerty', age: 22},
//         {id: 2, name: 'qwerty', age: 23},
//         {id: 3, name: 'qwerty', age: 24},
//         {id: 4, name: 'qwerty', age: 25},
//     ])
//     type user = {
//         id: number
//         name: string
//         age: number
//     }[]
// }
// – створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
// {
//     let foo = (arr:number[]):number => {
//        let minNumber = arr[0]
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i]<minNumber){
//                 minNumber = arr[i]
//             }
//         }
//         return minNumber
//     }
//     console.log(foo([12, 32, 3, 55]));
// }
// – створити функцію яка повертає найменьше число з масиву
// let sum = (arr: number[]): number => {
//     let temp: number = 0
//     for (const nuber of arr) {
//         temp = temp + nuber
//     }
//     return temp
// }
// console.log(sum([1, 2, 10]));
// – створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// {
//     let swap = (arr: number[], index1: number, index2: number) => {
//         if (index1 < arr.length && index2 < arr.length) {
//             let temp: number = arr[index1]
//             arr[index1] = arr[index2]
//             arr[index2] = temp
//             return arr
//         }
//         throw new Error('wrong index')
//     }
//
//     console.log(swap([22, 33, 44, 55], 1, 0));
// }
// – створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
//----------------------------------------------------------------------------------------------------------------------//
// {
//     let exam1:string = 'hello world'
//     let exam2:string = 'lorem ipsum'
//     let exam3:string = 'javascript is cool'
//     console.log(exam1.length, exam2.length, exam3.length)
// }
// – Знайти та вивести довижину настипних стрінгових значень
//  'hello world'
// 'lorem ipsum'
// 'javascript is cool'
// {
//     let exam1:string = 'HELLO WORLD'
//     let exam2:string = 'LOREM IPSUM'
//     let exam3: string = 'JAVASCRIPT IS COOL'
//
//     console.log(exam1.toLowerCase(), exam2.toLowerCase(), exam3.toLowerCase())
// }
// – Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// {
//     let exam:string = '  dirty string '
//     console.log(exam.trim())
// }
// – Є “брудна” стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// {
//     function foo(text:string):string|string[] {
//         if (text){
//             let arr:string[] = text.split(' ')
//             return arr
//         }
//         return ' '
//     }
//
//     console.log(foo('Ревуть воли як ясла повні'));
// }
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// {
//     let arr: number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
//     let stringArr: string[] = arr.map(number => number + '')
//     console.log(stringArr)
// }
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// {
//     function sortNums(array: number[], direction: string) {
//         if (direction === 'ascending') {
//             return array.sort((a: number, b: number) => a - b)
//         }
//         if (direction === 'descending') {
//             return array.sort((a: number, b: number) => b - a)
//         }
//         else return new Error('Incorrect direction')
//     }
//
//     let nums = [11, 21, 3]
//     console.log(sortNums(nums, 'ascending'));
//     console.log(sortNums(nums, 'descending'));
// }
// – створити функцію sortNums(array,direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// {
//     type Courses = {
//         title: string
//         monthDuration: number
//     }[]
//     let coursesAndDurationArray: Courses = [
//         {title: 'JavaScript Complex', monthDuration: 5},
//         {title: 'Java Complex', monthDuration: 6},
//         {title: 'Python Complex', monthDuration: 6},
//         {title: 'QA Complex', monthDuration: 4},
//         {title: 'FullStack', monthDuration: 7},
//         {title: 'Frontend', monthDuration: 4}
//     ]
//
//     let list = coursesAndDurationArray
//         .sort((a, b) => b.monthDuration - a.monthDuration)
//         .filter(value => value.monthDuration > 5)
//         .map((value, index) => ({...value, id: index + 1}))
//
//     console.log(list)
// }
// — відсортувати його за спаданням за monthDuration
// — відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// {
//     type Courses = {
//       title: string
//       monthDuration:number
//       hourDuration:number
//       modules:string[]
//     }[]
//
//     let coursesArray:Courses = [
//         {
//             title: 'JavaScript Complex',
//             monthDuration: 5,
//             hourDuration: 909,
//             modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//         },
//         {
//             title: 'Java Complex',
//             monthDuration: 6,
//             hourDuration: 909,
//             modules: ['html',
//                 'css',
//                 'js',
//                 'mysql',
//                 'mongodb',
//                 'angular',
//                 'aws',
//                 'docker',
//                 'git',
//                 'java core',
//                 'java advanced']
//         },
//         {
//             title: 'Python Complex',
//             monthDuration: 6,
//             hourDuration: 909,
//             modules: ['html',
//                 'css',
//                 'js',
//                 'mysql',
//                 'mongodb',
//                 'angular',
//                 'aws',
//                 'docker',
//                 'python core',
//                 'python advanced']
//         },
//         {
//             title: 'QA Complex',
//             monthDuration: 4,
//             hourDuration: 909,
//             modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//         },
//         {
//             title: 'FullStack',
//             monthDuration: 7,
//             hourDuration: 909,
//             modules: ['html',
//                 'css',
//                 'js',
//                 'mysql',
//                 'mongodb',
//                 'react',
//                 'angular',
//                 'aws',
//                 'docker',
//                 'git',
//                 'node.js',
//                 'python',
//                 'java']
//         },
//         {
//             title: 'Frontend',
//             monthDuration: 4,
//             hourDuration: 909,
//             modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//         }]
//
//     console.log(coursesArray.filter(value => value.modules.includes('sass')));
//     console.log(coursesArray.filter(value => value.modules.includes('docker')));
// }
// взяти з arrays.js масив coursesArray
// –написати пошук всіх об'єктів, в яких в modules є sass
// –написати пошук всіх об'єктів, в яких в modules є docker
// {
//     type Card = {
//         suit: string
//         value: string
//         color: string
//     }
//     const cardSuit: string[] = ['spade', 'diamond', 'heart', 'clubs']
//     const cardValue: string[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king']
//     let cards: Card[] = []
//     for (const suit of cardSuit) {
//         for (const value of cardValue) {
//             let card: Card = {suit: suit, value: value, color: ''}
//             if (card.suit === 'heart' || card.suit === 'diamond') {
//                 card.color = 'red'
//             } else card.color = 'black'
//             cards.push(card)
//         }
//     }
//     console.log(cards)
//
//     console.log(cards.find(value => value.suit === 'spade' && value.value === 'ace'));
//     console.log(cards.filter(value => value.value === '6'));
//     console.log(cards.filter(value => value.color === 'red'));
//     console.log(cards.filter(value => value.suit === 'diamond'));
//     console.log(cards.filter(card => card.suit === 'spade' && card.value !== '6' && card.value !== '7' && card.value !== '8'));
// }
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// ---------------------------------------------------------------------------------------------------------------------
// – Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(….)
// {
//     class User  {
//         id: number
//         name: string
//         surname: string
//         email: string
//         phone: string
//
//
//     constructor (id: number, name: string, surname: string, email: string, phone: string) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//     }}
//
//     let users: User[] = [
//         new User(6, 'Andrew', 'none', 'qwe@qwe', '+380'),
//         new User(7, 'Axel', 'none', 'qwe@qwe', '+380'),
//         new User(8, 'Adam', 'none', 'qwe@qwe', '+380'),
//         new User(9, 'Addison', 'none', 'qwe@qwe', '+380'),
//         new User(10, 'Adrian', 'none', 'qwe@qwe', '+380'),
//         new User(1, 'Ava', 'none', 'qwe@qwe', '+380'),
//         new User(2, 'Amelia', 'none', 'qwe@qwe', '+380'),
//         new User(3, 'Anthony', 'none', 'qwe@qwe', '+380'),
//         new User(4, 'Aurora', 'none', 'qwe@qwe', '+380'),
//         new User(5, 'Abigail', 'none', 'qwe@qwe', '+380')
//     ]
//     console.log(users)
//
//     console.log(users.filter(user => user.id % 2 === 0));
//     console.log(users.sort((user1, user2) => user1.id - user2.id));
// }
// {
//     class Client {
//         id:number
//         name:string
//         surname:string
//         email:string
//         phone:string
//         order:Order[]
//
//         constructor(id:number, name:string, surname:string, email:string, phone:string, order:Order[]) {
//             this.id = id
//             this.name = name
//             this.surname = surname
//             this.email = email
//             this.phone = phone
//             this.order = order
//         }
//     }
//     class Order{
//         item:string
//         price:number
//         constructor(item:string,price:number) {
//             this.item = item
//             this.price = price
//         }
//     }
//
//     let clients:Client[] = [
//         new Client(1, 'naname','mamane','qwe@qwe','+380',[new Order('TV',44),new Order('Phone',55)]),
//         new Client(1, 'naname','mamane','qwe@qwe','+380',[new Order('TV',44),new Order('Phone',55)])
//     ]
//     console.log(clients)
// }
// – створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Car {
//     model:string
//     manufacturer:string
//     year:number
//     maximumSpeed:number
//     engine:number
//     driver?: {name:string, age:number}
//
//     constructor(model:string, manufacturer:string, year:number, maximumSpeed:number, engine:number) {
//         this.model = model
//         this.manufacturer = manufacturer
//         this.year = year
//         this.maximumSpeed = maximumSpeed
//         this.engine = engine
//     }
//     drive() {console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)}
//     info() {
//         for (const key in this) {
//             console.log(key, `-`, this[key])
//         }}
//     increaseMaxSpeed (newSpeed:number) {this.maximumSpeed = this.maximumSpeed + newSpeed}
//     changeYear (newValue:number) {this.year = newValue}
//     addDriver (driver:{name:string,age:number}) {this.driver = driver}
// }
// let car = new Car('911', 'Porsche', 2022, 260, 3.8)
// car.drive()
// car.addDriver({name:'qqq',age:33})
// car.info()
// car.increaseMaxSpeed(100)
// car.changeYear(2000)
// console.log(car)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
// — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
// — changeYear (newValue) – змінює рік випуску на значення newValue
// — addDriver (driver) – приймає об'єкт який “водій” з довільним набором полів, і додає його в поточний об'єкт car
// class Cinderella {
//     name: string
//     age: number
//     footSize: number
//
//     constructor(name: string, age: number, footSize: number) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince {
//     name: string
//     age: number
//     slipper: number
//     wife?:string
//
//     constructor(name: string, age: number, slipper: number) {
//         this.name = name;
//         this.age = age;
//         this.slipper = slipper;
//     }
// }
//
// const cinderellas:Cinderella[] = [
//     new Cinderella('ewqt', 22, 31),
//     new Cinderella('ewqr', 23, 32),
//     new Cinderella('ewqe', 24, 33),
//     new Cinderella('ewqw', 25, 34),
//     new Cinderella('ewqq', 26, 35),
// ]
// const prince = new Prince("ewq", 43, 33)
//
// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.slipper){
//         prince.wife = cinderella.name
//         console.log(prince.wife)
//     }
// }
// console.log(cinderellas.find(cinderella => cinderella.footSize === prince.slipper));
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Сторити об'єкт класу “принц” за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// {
//     type Course = {
//         title: string
//         monthDuration: number
//         id?: number
//     }
//
//     let coursesAndDurationArray: Course[] = [
//         {title: 'JavaScript Complex', monthDuration: 5},
//         {title: 'Java Complex', monthDuration: 6},
//         {title: 'Python Complex', monthDuration: 6},
//         {title: 'QA Complex', monthDuration: 4},
//         {title: 'FullStack', monthDuration: 7},
//         {title: 'Frontend', monthDuration: 4}
//     ];
//    let courses = coursesAndDurationArray.map((course: Course, index: number) => ({id: index + 1,...course }))
//     console.log(courses)
// }
//------------------------------------------------------------------------------------------------------------------------
// {
//     let div:HTMLDivElement = document.createElement('div');
//     div.classList.add('wrap')
//     div.classList.add('collapse')
//     div.classList.add('alpha')
//     div.classList.add('beta')
//     document.body.append(div, div.cloneNode(true))
// }
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// {
//     const arr:string[] = ['Main', 'Products', 'About us', 'Contacts']
//     let ul:HTMLUListElement = document.createElement('ul');
//     for (const item of arr) {
//         let li:HTMLLIElement = document.createElement('li');
//         li.innerText = `${item}`
//         ul.appendChild(li)
//     }
//     document.body.appendChild(ul)
// }
// – Є масив:
// [‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// {
//     type CourseType ={
//         title:string
//         monthDuration:number
//     }
//
//     let coursesAndDurationArray:CourseType[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//     for (const course of coursesAndDurationArray) {
//         let courseDiv:HTMLDivElement = document.createElement('div');
//         let p:HTMLParagraphElement = document.createElement("p");
//         p.innerText = `${course.title} - ${course.monthDuration}`
//         courseDiv.appendChild(p)
//         document.body.appendChild(courseDiv)
//     }
//
// }
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// {
//     const h1:HTMLHeadingElement = document.createElement("h1");
//     h1.id = 'text'
//     h1.innerText = ('Lorem')
//
//     const button:HTMLButtonElement = document.createElement("button");
//     button.innerText = ('hide')
//     document.body.append(h1, button)
//
//     button.onclick = function () {
//         h1.remove()
//     }
// }
// – Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
// {
//     const form:HTMLFormElement = document.createElement("form");
//     form.id = 'f1'
//
//     const input:HTMLInputElement = document.createElement("input");
//     input.type = 'number'
//
//     const button:HTMLButtonElement = document.createElement("button");
//     button.innerText = ('check')
//
//     form.append(input, button)
//     document.body.appendChild(form)
//
//     form.onsubmit = function (ev) {
//         ev.preventDefault()
//         let age:number = +input.value
//         if (age >= 18) {
//             console.log('Adult')
//         } else if (age < 18) {
//             console.log('Young')
//         }
//     }
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// {
//     const form:HTMLFormElement = document.createElement("form");
//
//     const name:HTMLInputElement = document.createElement("input");
//     name.placeholder = ('Name')
//
//
//     const surname:HTMLInputElement = document.createElement("input");
//     surname.placeholder = ('Surname')
//
//     const age:HTMLInputElement = document.createElement("input");
//     age.placeholder = ('Age')
//     age.type = ('number')
//
//     const button:HTMLButtonElement = document.createElement("button");
//     button.innerText = ('add')
//
//     form.append(name, surname, age, button)
//     document.body.appendChild(form)
//
//     form.onsubmit = function (ev){
//         ev.preventDefault()
//         const div:HTMLDivElement = document.createElement("div");
//         div.innerText = (`Your name - ${name.value} Your surname - ${surname.value} Your age - ${age.value}`)
//         document.body.appendChild(div)
//     }
// }
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// {
//     let number:number = Number(localStorage.getItem('number'))
//     number += 1
//     localStorage.setItem('number', String(number))
//
//     let div:HTMLDivElement = document.createElement("div")
//     document.body.appendChild(div)
//     div.innerText = String(number)
// }
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1
// {-----------
//     const form:HTMLFormElement = document.createElement("form");
//     document.body.appendChild(form)
//     form.name = 'form'
//
//     const inputLines:HTMLInputElement = document.createElement("input");
//     inputLines.type = 'number'
//     inputLines.name = 'inputLines'
//
//     const inputCells:HTMLInputElement = document.createElement("input");
//     inputCells.type = 'number'
//     inputCells.name = 'inputCells'
//
//     const inputText:HTMLInputElement = document.createElement("input");
//     inputText.name = 'inputText'
//
//     const button:HTMLButtonElement = document.createElement("button");
//     button.innerText = 'Generate'
//     form.append(inputLines, inputCells, inputText, button)
//
//     const table:HTMLTableElement = document.createElement("table");
//     document.body.appendChild(table)
//
//     form.onsubmit = function (ev):void {
//         table.innerText = ""
//         ev.preventDefault()
//         const linesValue:number = form.inputLines.value;
//         const cellsValue:number = form.inputCells.value;
//         const textValue:string = form.inputText.value;
//
//         for (let i:number = 0; i < linesValue; i++) {
//             const tr:HTMLTableRowElement = document.createElement('tr');
//
//             for (let j:number = 0; j < cellsValue; j++) {
//                 const td:HTMLTableCellElement = document.createElement('td');
//                 td.innerText = textValue
//                 tr.appendChild(td)
//             }
//             table.appendChild(tr)
//         }
//     }
// }
// {
//     let sessionsList:Date[] = JSON.parse(localStorage.getItem('sessionsList')!) || []
//     sessionsList.push(new Date())
//     localStorage.setItem('sessionsList', JSON.stringify(sessionsList))
// }
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM
// {
//     const input:HTMLInputElement = document.createElement("input");
//     input.type = 'number'
//     const div:HTMLDivElement = document.createElement("div");
//     input.oninput = function () {
//         let inputValue:number = Number(input.value)
//         div.innerText = String(inputValue * 2.2)
//     }
//     document.body.append(input, div)
// }
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
{
    localStorage.setItem('arrayName', JSON.stringify([]));
    function addToLocalStorage(arrayName, objToAdd) {
        let lsItem = localStorage.getItem(arrayName);
        if (!lsItem) {
            throw new Error('Error');
        }
        let arr = JSON.parse(lsItem);
        arr.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(arr));
    }
    let item = { a: 12, b: 32, c: 43 };
    let item3 = { a: 1, b: 3, c: 4 };
    addToLocalStorage('arrayName', item);
    addToLocalStorage('arrayName', item3);
}
// В localStorage зберігаються масиви.
// Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
