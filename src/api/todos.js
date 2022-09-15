import axios from  "axios";

const api = axios.create({
    baseURL: "https://6322c436362b0d4e7dd2cd6d.mockapi.io/api/",
});

export function getTodoList(){
    return api.get("/todos");
}