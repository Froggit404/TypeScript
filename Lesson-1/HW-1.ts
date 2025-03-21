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
//     {name: ‘vasya’, age: 31, status: false},
// {name: ‘petya’, age: 30, status: true},
// {name: ‘kolya’, age: 29, status: true},
// {name: ‘olya’, age: 28, status: false},
// {name: ‘max’, age: 30, status: true},
// {name: ‘anya’, age: 31, status: false},
// {name: ‘oleg’, age: 28, status: false},
// {name: ‘andrey’, age: 29, status: true},
// {name: ‘masha’, age: 30, status: true},
// {name: ‘olya’, age: 31, status: false},
// {name: ‘max’, age: 31, status: true}
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

{

}

// – створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write