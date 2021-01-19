const urls = [
    "https://www.swapi.tech/api/people/1",
    "https://www.swapi.tech/api/people/2",
    "https://www.swapi.tech/api/people/3",
    "https://www.swapi.tech/api/people/4"
]
const urls2 = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4"
]


// finally will be called no matter what ( if promise resolves and if it gets rejected)
// finally usually doesnt receive any parameters
Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
}))
    .then(array => {
        //throw Error;
        console.log("1", array[0])
        console.log("2", array[1])
        console.log("3", array[2])
        console.log("4", array[3])
    })
    .catch(err => console.log("ughhh fix it!", err))
    .finally(() => console.log("extra"))
