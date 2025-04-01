"use strict";
async function fetchUser(url) {
    const response = await fetch(url);
    return await response.json();
}
fetchUser('https://jsonplaceholder.typicode.com/todos/1')
    .then(user => console.log(user));
