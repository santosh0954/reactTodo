import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class TodoItem extends Component {
  getStyle = () => {
    return this.props.todo.completed ? 'list-group-item list-group-item-action item-completed list-group-item-success' : 'list-group-item list-group-item-action';

  }
  // changeCompleted = ()=> {
  //   t
  // }
  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <li className={this.getStyle()}>
        <input type="checkbox" className="mr-3" onChange={this.props.changeCompleted.bind(this, id)} checked={completed} />
        {title}
        <button className="close" onClick={this.props.delTodo.bind(this, id)}>&times;</button>
      </li>
    )
  }
}
// proptypes 
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}
export default TodoItem
