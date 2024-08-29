// CIA I - Q2a
// a) You are working with an API response that returns an array of objects, where each object contains a user's “id”, “name”, and an array of “posts” they have made. 
// Each post is an object with properties “title” and “content”. 
// Write a JavaScript function “extractUserPosts” that takes this API response and returns an array of objects, 
// where each object contains the “userId”, “username”, and a concatenated string of all post titles separated by commas.

function extractUserPosts(apiResponse) { 
    return apiResponse.map(user => { 
        const { id: userId, name: userName, posts } = user; 
        const postTitles = posts.map(post => post.title).join(', '); 

        return { userId, userName, postTitles }; 
    }); 
} 

// Input
const apiResponse = [ 
    { 
        id: 1, 
        name: 'Alice', 
        posts: [ 
            { title: 'Hello World', content: 'This is my first post!' }, 
            { title: 'React Tips', content: 'Here are some useful tips for React.' } 
        ] 
    }, 
    { 
        id: 2, 
        name: 'Bob', 
        posts: [ 
            { title: 'JavaScript Best Practices', content: 'Follow these best practices.' }, 
            { title: 'Python Best Practices', content: 'Follow these best practices.' } 
        ] 
    } 
]; 

console.log(extractUserPosts(apiResponse)); 

// Output:  
// > node .\2a.js
// [
//   {
//     userId: 1,
//     userName: 'Alice',
//     postTitles: 'Hello World, React Tips'
//   },
//   {
//     userId: 2,
//     userName: 'Bob',
//     postTitles: 'JavaScript Best Practices, Python Best Practices'
//   }
// ]
