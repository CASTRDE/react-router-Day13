import axios from  "axios";

const api = axios.create({
    baseURL: "https://6322c436362b0d4e7dd2cd6d.mockapi.io/api/",
});

export function getTodoList(){
    return api.get("/todos");
}

export function addTodoItem(data){
    return api.post("/todos", data);
}

export function deleteTodoItem(id){
    console.log(id);
    return api.delete(`/todos/${id}`);
}

export function toggleTodoItem(id, done){
    return api.put(`/todos/${id}`, { "done": done });
}
