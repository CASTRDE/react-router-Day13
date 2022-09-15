import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./todoSlice";
import "./TodoItem.css";
import { deleteTodoItem, toggleTodoItem } from "../../api/todos";

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
        toggleTodoItem(todo.id, !todo.done).then((res) => {
            dispatch(toggleTodo(res.data));
            dispatch(toggleTodo(todo.id));
        });
    }

    return (
        <div onClick={onToggle}>
            <span className={todo.done ? "done" : ""}>{todo.text}</span>
            <span onClick={onDelete}> &times;</span>
        </div>
    );
}

export default TodoItem;