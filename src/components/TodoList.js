import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

function TodoList(props) {
  const { todos, handleCompleteTodo, handleRemoveTodo, handleEditTodo } = props;

  return (
    <div style={{ marginTop: "20px", overflow: "auto", maxHeight: "300px" }}>
      {todos &&
        todos.map((todo) => (
          <Todo
            todo={todo.todo}
            key={todo.id}
            id={todo.id}
            isCompleteTodo={todo.isCompleteTodo}
            handleCompleteTodo={handleCompleteTodo}
            handleRemoveTodo={handleRemoveTodo}
            handleEditTodo={handleEditTodo}
          />
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
