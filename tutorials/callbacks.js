// callbacks, promises and async
// async can wait for a response and not halt the program.
const fetch = require('node-fetch');

const posts = [
    {title: "post One", body: "This is post one"},
    {title: "post Two", body: "This is post two"}
]

function getPosts(){
    setTimeout(() => {
        let output = ''
        posts.forEach((item, index)=>{
            output += `${item.title} `
        })
        console.log(output)
    }, 1000)
}

function createPost(post){ //callback) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post)
            //callback()
            const error = false
            if(!error){
                resolve()
            } else {
                reject("Error: something went wrong")
            }
        },2000)
    })
}

//createPost({title:"Third Post", body:"I don't think I can write here"}, getPosts)


// promises
// createPost({title:"3rd post", body:"this is a new body"})
// .then(getPosts)
// .catch(err => console.log(err))

// prmise.all
// const promise1 = Promise.resolve("Hello World")
// const promise2 = 10
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, "Goodbye")
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
//
// Promise.all([promise1,promise2,promise3,promise4]).then((values)=>{
//     console.log(values);
// })


//async await -- different way to handle responses.

// async function init(){
//     await createPost({
//         title:"async post", body:"new body. old body. Idk about this"})
//         getPosts()
// }
//
// init()

// async/ await /fetch

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
}

fetchUsers()
