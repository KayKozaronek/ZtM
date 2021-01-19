// for await of 
// allows us to loop through promises as if they were synchronous code

let urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
]

const getData = async function () {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            return response.json();
        }));
        console.log("users", users)
        console.log("posts", posts)
        console.log("albums", albums)
    } catch (err) {
    console.log("ooops", err);
    }   
}

const loopThroughUrls = url => {
    for (url of urls) {
        console.log(url)
    }
}


const getData2 = async function () {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}