type UserType = {
    id:number
    name:string
    surname:string
    email:string
    phone:string
}
function User(id:number, name:string, surname:string, email:string, phone:string) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}
let users:UserType = [
    new User(6, 'Andrew', 'none', 'qwe@qwe', '+380'),
    new User(7, 'Axel', 'none', 'qwe@qwe', '+380'),
    new User(8, 'Adam', 'none', 'qwe@qwe', '+380'),
    new User(9, 'Addison', 'none', 'qwe@qwe', '+380'),
    new User(10, 'Adrian', 'none', 'qwe@qwe', '+380'),
    new User(1, 'Ava', 'none', 'qwe@qwe', '+380'),
    new User(2, 'Amelia', 'none', 'qwe@qwe', '+380'),
    new User(3, 'Anthony', 'none', 'qwe@qwe', '+380'),
    new User(4, 'Aurora', 'none', 'qwe@qwe', '+380'),
    new User(5, 'Abigail', 'none', 'qwe@qwe', '+380')
]
console.log(users)