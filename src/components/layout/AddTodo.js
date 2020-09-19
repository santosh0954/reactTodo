import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }
  onChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title === '') {
      this.props.showNotification("Input can't be empty", true);
      return
    }
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }
  render() {
    return (
      <form className="mb-4" onSubmit={this.onSubmit}>
        <input type="text" name="todo" className="form-control mb-3 rounded-0 shadow-sm border-danger" placeholder="Add Todo" value={this.state.title}
          onChange={this.onChange} />
        <button className="btn btn-danger rounded-0 shadow-sm mb-3 px-5">Add</button>
      </form>
    )
  }
}

export default AddTodo
