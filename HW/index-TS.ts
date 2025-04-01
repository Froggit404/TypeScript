async function fetchUser<T>(url: string): Promise<T> {
    const response = await fetch(url)
    return await response.json()
}

interface IUser {
    userId: number
    id: number
    title: string
    completed: boolean
}

fetchUser<IUser>('https://jsonplaceholder.typicode.com/todos/1')
    .then(user => console.log(user))