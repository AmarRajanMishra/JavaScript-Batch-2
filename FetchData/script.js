

// fetch('https://api.github.com/users')
// .then((res)=> res.json())
// .then((data)=> console.log(data))

// fetch('http://127.0.0.1:5500/index.html')
// .then(res => res.text())
// .then(data  => console.log(data))
// .catch(err => console.log(err))

function getData(){
    // console.log('Clicked...')
    let userName = document.getElementById('username').value
    // console.log(userName)
    let url = 'https://api.github.com/users/'+userName
    // console.log(url)
    let store = document.getElementById('store')
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // console.log(`https://github.com/${data.login}`)
        if(data.message){
            store.innerHTML = `<h1>User Not Found </h1>`
        }else{
            store.innerHTML = `
        <a href=https://github.com/${data.login}>
        <h1>${data.login}</h1>
        <h2>Name : ${data.name}</h2>
        <img src='${data.avatar_url}' >
        </a>
        <a href=https://github.com/${data.login}?tab=repositories>Go To Repo</a>
        `
        }
        
    })
    .catch(err => console.log(err))
    document.getElementById('username').value = ''
    
}
