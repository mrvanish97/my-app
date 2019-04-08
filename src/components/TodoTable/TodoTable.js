import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';

const TodoTable = ({ todos, toggleTodo }) => (
  2
);

TodoTable.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoTable;