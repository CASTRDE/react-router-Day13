import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./todoSlice";
import "./TodoItem.css";
import { deleteTodoItem } from "../../api/todos";

const TodoItem = (props) => {
    const {todo} = props;
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteTodo(todo.id));
        deleteTodoItem(todo.id).then((res) => {
            dispatch(deleteTodo(res.data));
        });
    }

    const onToggle = () => {
        dispatch(toggleTodo(todo.id));
    }

    return (
        <div onClick={onToggle}>
            <span className={todo.done ? "done" : ""}>{todo.text}</span>
            <span onClick={onDelete}> &times;</span>
        </div>
    );
}

export default TodoItem;