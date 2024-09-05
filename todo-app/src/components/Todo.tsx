import "../css/Todo.css";
import { TodoType } from "../types/Types";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { removeTodoById, editTodoById } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

interface TodoProps {
  todo: TodoType;
}

function Todo({ todo }: TodoProps) {
  const { id, content } = todo;
  const [editable, setEditable] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>(content);
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleEditTodo = () => {
    if (editable) {
      if (newContent.trim().length > 0) {
        const payLoad: TodoType = {
          id,
          content: newContent,
        };

        dispatch(editTodoById(payLoad));
      } else setNewContent(content);
    }
    setEditable(!editable);
  };

  return (
    <div className="todo">
      <div className={`text ${editable ? "hide" : ""}`}>{content}</div>
      <input
        className={`edit-input ${editable ? "show" : ""}`}
        type="text"
        value={newContent}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewContent(e.target.value)
        }
      />
      <div className="icons">
        <IoRemoveCircleOutline onClick={handleRemoveTodo} />
        {editable ? (
          <CiCircleCheck onClick={handleEditTodo} />
        ) : (
          <CiEdit onClick={handleEditTodo} />
        )}
      </div>
    </div>
  );
}

export default Todo;
