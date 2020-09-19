import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'


class Todos extends Component {
  render() {
    // console.log(this.props.todos);
    return <ul className='list-group list-group-flush'>
      {this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} changeCompleted={this.props.changeCompleted}
          delTodo={this.props.delTodo} />
      ))}
    </ul>
  }
}
// proptypes 
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
