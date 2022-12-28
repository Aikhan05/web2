// let user = new Object();

// user.name = 'Islam';
// user.age = 23;
// console.log(user.name);


// const user = {
//     name: 'Islam',
//     surname: 'Awad',
//     age: 23
    
// };

// const user2 = {
//     name: 'Adilet',
//     surname: 'Aitymbetov',
//     age: 17
    
// };

// for (let key in user2){
//     if(typeof user2[key] == "number") {

//         console.log(user2[key] * 2 );
//     }
//     console.log(user2[key])
// }

// for (let key in user){
//     if(typeof user[key] == "number") {

//         console.log(user[key] * 2 );
//     }
//     console.log(user[key])
    
// }
function logout(){
    event.preventDefault();
    // localStorage.clear();
    alert("Вы вышли!")
    window.location.href =('login.html') 
}
const container = document.querySelector('#container')
const GetRes = async(url) => {
    const res = await fetch(url);
    if(!res.ok){
        throw new Error('status: ${res.status}');
    }
    return await res.json();
}

GetRes('user.json')
    .then(data=> {
        for(let key in data) {
            const product = document.createElement("div");
            const name = data[key].name;
            const opis = data[key].opis;
            const cost = data[key].cost;
            const img = data[key].img;

            product.innerHTML = `
            <div class="product">
                <h2>Имя: ${name}</h2>
                <p>Возраст ${opis}</p>
                <h4>Цена: ${cost}</h4>
                <img src="almau.png">${img}
            </div>`
            // container.append(product)
        
        }
        
    }

    )
    
        // console.log(data);
        // for(let key in data){
        //     const name = data[key].name
        //     console.log(name)
        //     document.writeln(name)
        //     const opis = data[key].opis
        //     console.log(opis)
        //     document.writeln(opis)
        //     const cost = data[key].cost
        //     console.log(cost)
        //     document.writeln(cost)
            // for(let i in data[key]) {
                
            //     // console.log(i)
            
            // }
            


