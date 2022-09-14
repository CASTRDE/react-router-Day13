import { useState } from "react";

const TodoGenerator = () => {
    const [todoText, setTodoText] = useState("");

    const onTodoTextChange = (event) => {
        setTodoText(event.target.value);
    };

    return (
    <div>
        <input 
        type = "text" 
        placeholder="input your todo" 
        value={todoText} 
        onChange={onTodoTextChange}/>
        <button>Add</button>
    </div>
    );
};

export default TodoGenerator;