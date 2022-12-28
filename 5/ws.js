// const { url } = require("inspector");

// let user = {
//     name: "Artur",
//     age: 17,
//     height: 197,
//     weight: 90,
//     secondname: "Babich"
// }

// function multiply(){
//     for(let key in user){
//         if(typeof user[key] == "number"){
//             console.log(user[key]*2);
//         }     
//     }  
// }
// console.log(user)
// multiply()
// fetch('user.json')
//     .then(response => response.json())
//     .then(json => console.log(json));
 
const container = document.querySelector('#container')
const GetRes = async(url) => {
    const res  = await fetch(url);
    if(!res.ok){
        throw new Error(`status: ${res.status}`);
    }
    return await res.json()
}

GetRes('ws1.json')
    .then(data=> {
        console.log(data);
        for(let key in data) {
            const mugi = document.createElement("div");
            const name = data[key].name;
            const age = data[key].age;
            const bounty = data[key].bounty;

            mugi.innerHTML = `<div class="mugi">
                <h2>Имя: ${name}</h2>
                <p>Возраст ${age}</p>
                <h4>Цена: ${bounty}</h4>
            </div>`
            container.append(mugi)
        
        }
    })