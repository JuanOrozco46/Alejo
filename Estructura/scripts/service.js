export async function getTodos(){
    const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
    const allFieldTodos = await response.json();
    const todos = allFieldsTodos.map((todo)=>{
        return{
            id: todo.id,
            tittle : todo.tittle,
            completed: todo.completed,
        };
    });
    return todos;
}