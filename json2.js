

const HTMLResponse = document.querySelector("#app")

fetch(`https://jsonplaceholder.typicode.com/users`)
.then((response)=> response.json())
.then((users)=>{
    const tpl = users.map(user => `<li>${user.name} ${user.address.street}</li>`)
    HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
});