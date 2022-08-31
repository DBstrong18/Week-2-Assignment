const newPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(myTitle => {
let result = myTitle.map(user => `<li>${user.title}</li>`)
document.body.innerHTML = result.join("")
});
console.log(newPromise);