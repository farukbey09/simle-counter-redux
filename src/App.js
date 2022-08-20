import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import { connect } from "react-redux";
import {
  insertTodo,
  setCompleteTodo,
  removeTodo,
  editTodo,
  removeTodos,
} from "./redux/actions/todoActions";
import { createRandomID } from "./components/helpers/helper";

function App(props) {
  const { insertTodo, setCompleteTodo, removeTodo, editTodo, removeTodos } =
    props;

  const [todo, setTodo] = useState("");

  const addTodo = () => {
    const temp = {
      id: createRandomID(8),
      todo: todo,
      isCompleteTodo: false,
    };
    insertTodo(temp);
  };

  const handleCompleteTodo = (id) => {
    setCompleteTodo(id);
  };

  const handleRemoveTodo = (id) => {
    removeTodo(id);
  };

  const handleEditTodo = (todo) => {
    editTodo(todo);
  };

  const removeAllTodos = () => {
    removeTodos();
  };

  return (
    <div>
      <div
        style={{
          height: "100%",
          display: "flex",
          marginTop: "300px",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "70px",
          width: "100%",
        }}
      >
        <input
          style={{ marginRight: "10px" }}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button
          style={{ marginRight: "10px" }}
          type="submit"
          className="btn btn-outline-success"
          onClick={() => addTodo()}
        >
          Send
        </button>
        <button
          style={{ marginRight: "10px" }}
          type="submit"
          className="btn btn-outline-danger"
          onClick={() => removeAllTodos()}
        >
          Clear All Todos
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TodoList
          handleCompleteTodo={handleCompleteTodo}
          handleRemoveTodo={handleRemoveTodo}
          handleEditTodo={handleEditTodo}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  insertTodo: (todo) => {
    dispatch(insertTodo(todo));
  },
  setCompleteTodo: (id) => {
    dispatch(setCompleteTodo(id));
  },
  removeTodo: (id) => {
    dispatch(removeTodo(id));
  },
  editTodo: (todo) => {
    dispatch(editTodo(todo));
  },
  removeTodos: () => {
    dispatch(removeTodos());
  },
});

export default connect(null, mapDispatchToProps)(App);
