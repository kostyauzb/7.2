// TodoList.js

import { connect } from "react-redux";
import Todo from "./Todo";
import { removeTodo } from "../redux/actions";

const TodoList = ({ todos, dispatchRemoveTodo }) => (
  <div className="tit">
    {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} onRemove={dispatchRemoveTodo} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRemoveTodo: (id) => dispatch(removeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
