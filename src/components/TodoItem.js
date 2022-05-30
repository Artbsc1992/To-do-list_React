import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  render() {
    return <li>{this.props.todo.title}</li>;
  }
}

export default TodoItem;
