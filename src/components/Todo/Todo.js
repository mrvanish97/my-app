import styles from "./Todo.css"
import PropTypes from 'prop-types'
import React from 'react'
import { DataTable, Checkbox } from "carbon-components-react";
import { Table, TableHead, TableRow, TableBody, TableData } from 'carbon-components-react';

const Todo = ({ onClick, completed, text, id, creationTime }) => {
  return (
        <Checkbox
          checked={completed}
          labelText={text}
        />

  )
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;