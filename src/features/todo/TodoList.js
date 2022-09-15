import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getTodoList } from "../../api/todos";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import {initData } from "./todoSlice";

const TodoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoList);
    console.log(todoList);

    useEffect(() => {
        getTodoList().then((res) => {
            console.log(res);
            dispatch(initData(res.data))
        })
    }, [dispatch])

    return (
        <>
            <TodoGroup todoList={todoList}/>
            <TodoGenerator/>
        </>
    );
};

export default TodoList;