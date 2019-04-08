let nextTodoId = 0;

export const addTodo = (text, creationTime) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  creationTime
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = (id, toggleTime) => ({
  type: 'TOGGLE_TODO',
  id,
  toggleTime
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  TOGGLE_TODO: 'TOGGLE_TODO'
};