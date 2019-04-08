import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import {
  Form,
  FormItem,
  TextInput,
  Button
} from 'carbon-components-react'

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value, Date.now()))
          input.value = '';
        }}
      >
        <FormItem>
          <TextInput placeholder="Enter todo" ref={node => (input = node)} />
        </FormItem>
        <FormItem>
          <Button type="submit">Add Todo</Button>
        </FormItem>
      </Form>
    </div>
  );
}

export default connect()(AddTodo);