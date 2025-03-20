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

// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

// {
//     let firstName: string = 'Dmytro'
//     let lastName: string = 'Hrytsyk'
//     let middleName: string = 'Igorevich'
//     console.log(firstName + " " + lastName + " " + middleName)
// }

// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З’єднати їх в одну змінну person (Не об’єкт, просто за допомоги конкатенації)

// {
//     let a:number = 100
//     let b: string = '100'
//     let c: boolean = true
//     console.log(typeof a,typeof b, typeof c)
// }

// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//let a = 100; let b = ‘100’; let c = true;

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

// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

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

// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre, authors.
//     Поле “автори” – являється  масивом. Кожен автор має поля name та age.

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

// – Створити масив з 10 об’єктами які описують сутніть “користувач”.
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

{
    type Weather ={
        day: string
        morning_temp:number
        day_temp:number
        night_temp:number
    }[]
let weather:Weather =[
    {day: 'Monday',morning_temp: 11,day_temp:12,night_temp:10},
    {day: 'Tuesday',morning_temp: 11,day_temp:12,night_temp:10},
    {day: 'Wednesday',morning_temp: 11,day_temp:12,night_temp:10},
    {day: 'Thursday',morning_temp: 11,day_temp:12,night_temp:10},
    {day: 'Friday',morning_temp: 11,day_temp:12,night_temp:10},
    {day: 'Saturday',morning_temp: 11,day_temp:12,night_temp:10},
    {day: 'Sunday',morning_temp: 11,day_temp:12,night_temp:10}]
    console.log(weather)
}

// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу