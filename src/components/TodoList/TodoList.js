import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';
import { Table, TableHead, TableRow, TableBody, TableData } from 'carbon-components-react';
import { TableHeader } from 'carbon-components-react/lib/components/DataTable';

/* const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
); */

const TodoList = ({ todos, toggleTodo }) => {
  if (todos.length != 0) {
    return (<Table>
      <TableHead>
        <TableHeader>Todo text</TableHeader>
        <TableHeader>Created at</TableHeader>
        <TableHeader>Completed at</TableHeader>
      </TableHead>
      <TableBody>
        {
          todos.map(todo => (
            <TableRow
              onClick={() => toggleTodo(todo.id, Date.now())}
            >
              <TableData><Todo key={todo.id} {...todo} /></TableData>
              <TableData>{(new Date(todo.creationTime)).toLocaleString()}</TableData>
              <TableData>{function() {
                if (todo.complTime) {
                  return (new Date(todo.complTime)).toLocaleString();
                }
              }()}</TableData>
            </TableRow>))
        }
      </TableBody>
    </Table>)
  } else {
    return <text>There is nothing to do %)</text>
  }
};



TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      creationTime: PropTypes.number.isRequired,
      complTime: PropTypes.number,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;