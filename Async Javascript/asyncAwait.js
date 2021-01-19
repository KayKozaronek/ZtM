// ASYNC AWAIT 

// Regular code with promises
movePlayer(100, "Left")
    .then(() => movePlayer(400, "Left"))
    .then(() => movePlayer(10, "Right"))
    .then(() => movePlayer(330, "Left"))


/* Same code but with async await
Goal: Make asynchronous code look synchronous
Async await code is just a promise underneath the hood 
It's syntactic sugar */ 
async function playerStart() {
    const firstMove = await movePlayer(100, "Left"); //pause
    await movePlayer(400, "Left"); //pause 
    await movePlayer(10, "Right"); //pause
    await movePlayer(330, "Left"); //pause
}


// Realistic example 
// We fetched data like this before
fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(console.log)

// Let's try the async version
async function fetchUsers() {
    // We can store everything that returns a promise in a variable
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data);
}


// Another example 

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums" 
]

// Return regularly with Promises
Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
    )).then(array => {
        console.log("users", array[0]),
        console.log("posts", array[1]),
        console.log("albums", array[2])
    }).catch("oops");


// Converted to async await
const getData2 = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
            ))
        console.log("users", users)
        console.log("posts", posts)
        console.log("albums", albums)
    } catch(err) {
        console.log("oops", err)
    }
}