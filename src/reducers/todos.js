import { ActionTypes } from "../actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          creationTime: action.creationTime,
          completed: false
        }
      ];
    case ActionTypes.TOGGLE_TODO:
      return state.map(todo => todo.id === action.id ? {
        ...todo,
        completed: !todo.completed,
        complTime: (!todo.completed ? action.toggleTime : undefined),
      } : todo);
    default:
      return state;
  }
};

export default todos;