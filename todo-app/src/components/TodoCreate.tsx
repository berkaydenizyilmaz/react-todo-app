import { useState } from "react";
import "../css/TodoCreate.css";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../types/Types";

function TodoCreate() {
  const dispatch = useDispatch();
  const [todoContent, setTodoContent] = useState<string>("");

  const todoCreateHandler = () => {
    if (todoContent.trim().length > 0) {
      const payLoad: TodoType = {
        id: Math.floor(Math.random() * 999999),
        content: todoContent,
      };

      dispatch(createTodo(payLoad));
      setTodoContent("");
    } else return alert("Please write something...");
  };

  return (
    <div className="todo-create">
      <input
        type="text"
        value={todoContent}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodoContent(e.target.value)
        }
        placeholder="Write something..."
      />
      <button onClick={todoCreateHandler}>Add</button>
    </div>
  );
}

export default TodoCreate;
