const container = document.querySelector('#container')
const getRes = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`status: ${res.status}`);
    }
    return await res.json()
}

getRes('user.json')
    .then(data => {
        console.log(data);
        for(let key in data) {
            const block = document.createElement('div')
            const title = data[key].title
            const desc = data[key].desc
            const share = data[key].share
            const img = data[key].img


            block.innerHTML = `<div class="block">
                <h2>Название: ${title}</h2>
                <p>Чему научился: ${desc}</p>
                <a href="${share}"target="_blank">Ссылка</a>
                <img width="300" height="70" src="${img}">
                <div class="container">
        <div id="newtask">
            <input type="text" placeholder="Ожидаем добавление нового элемента...">
            <button id="push">Добавить</button>
        </div>
        <div id="tasks" contentEditable=true></div>
                </div>
                
       
    </div>`
                
            container.append(block)
            document.querySelector('#push').onclick = function(){
                if(document.querySelector('#newtask input').value.length == 0){
                    alert("Пожалуйста добавьте задачу")
                }
            
                else{
                    document.querySelector('#tasks').innerHTML += `
                        <div class="task">
                            <span id="taskname">
                                ${document.querySelector('#newtask input').value}
                            </span>
                            <button class="delete">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </div>
                    `;
                
                    
                    var current_tasks = document.querySelectorAll(".delete");
                    for(var i=0; i<current_tasks.length; i++){
                        current_tasks[i].onclick = function(){
                            this.parentNode.remove();
                        }
                    }
                }
            }
            
        }
        
    })
    function back(){
        event.preventDefault();
        // localStorage.clear();
        alert("Вы вернулись!")
        window.location.href =('mine.html') 
    }
    function next(){
        event.preventDefault();
        // localStorage.clear();
        alert("Добро пожаловать!")
        window.location.href =('index.html') 
    }

    
