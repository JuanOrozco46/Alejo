const loadBtn = document.getElementById("load-btn");
const container = document.getElementById("container");
const spinner = document.getElementById("spinner");

export async function iniApp(callback){
    loadBtn.addEventListener("click", async () =>{
        spinner.classList.remove("show");
        spinner.classList.add("show");
        try{
            const todos = await callback();
            spinner.classList.remove("show");
            spinner.classList.add("hide");
            render(todos);
        } catch {
            console.log("error");
        }
    });
}

function getCard(todos){
    const status = todos.completed ? "completadoo" : "Pendiente";
    const style = todos.complated ? "completado" : "Pendiente";
    return `<div class = "todo-card">
                <div class="todo-header">
                    <span class=2todo-id">#${todos.id}</span>
                </div>
                <h3 class= "todo-tittle">${todos.title}</h3>
                <div class ="todo.footer">
                    <span class="todo-status ${style}">${status}<span>
                </div>
            </div>`;
}
function render (todos) {
    todos.forEach((todo)=>{
        const card = getCard(todo);
        container.innerHTML += card;
    });
}