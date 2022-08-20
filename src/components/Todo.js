import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { connect } from "react-redux";

function Todo(props) {
  const {
    isCompleteTodo,
    todo,
    handleRemoveTodo,
    id,
    handleCompleteTodo,
    handleEditTodo,
  } = props;

  const [isClickedTodo, setIsClickedTodo] = useState(false);
  const [text, setText] = useState("");

  const completeTodo = {
    id: id,
    todo: text,
    isCompleteTodo: isCompleteTodo,
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      {todo && (
        <div
          style={{
            width: "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className={isCompleteTodo ? "card completedTodo" : "card"}
            style={{
              width: "240px",
              textAlign: "center",
              marginTop: "2px",
              cursor: "pointer",
              marginRight: "5px",
            }}
            onClick={() => handleCompleteTodo(id)}
          >
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{todo}</li>
            </ul>
          </div>
          <div>
            <IconButton onClick={() => handleRemoveTodo(id)}>
              <CancelPresentationIcon
                fontSize="large"
                style={{ cursor: "pointer" }}
              />
            </IconButton>
          </div>
          <div>
            <IconButton onClick={() => setIsClickedTodo(!isClickedTodo)}>
              <EditIcon fontSize="large" style={{ cursor: "pointer" }} />
            </IconButton>
          </div>
        </div>
      )}

      <div className={isClickedTodo ? "show" : "dontShow"} style={{}}>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          style={{ width: "224px" }}
        />
        <IconButton
          onClick={() => {
            if (text) {
              handleEditTodo(completeTodo);
            }
            setIsClickedTodo(!isClickedTodo);
          }}
          style={{ marginLeft: "5px" }}
        >
          <ArrowBackIcon fontSize="large" style={{ cursor: "pointer" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default connect(null, null)(Todo);
