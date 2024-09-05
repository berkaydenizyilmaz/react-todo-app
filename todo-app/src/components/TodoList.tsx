import Todo from "./Todo";
import "../css/TodoList.css";
import { useSelector } from "react-redux";
import { TodoType } from "../types/Types";
import { RootState } from "../redux/store";

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <div className="todo-list">
      {todos &&
        todos.map((todo: TodoType) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
}

export default TodoList;
