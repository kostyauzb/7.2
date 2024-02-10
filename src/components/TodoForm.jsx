// TodoForm.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
const TodoForm = ({ dispatchAddTodo }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatchAddTodo({
      id: new Date().getTime(),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="inp"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button className="btn_add" type="submit">
        Add Todo
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchAddTodo: (todo) => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
