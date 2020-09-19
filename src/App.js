import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/custom.scss';
import Header from './components/layout/Header';
import AddTodo from './components/layout/AddTodo';
import Todos from './components/Todos';
import About from './components/pages/About'
import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer';
import PropTypes from 'prop-types'


class App extends Component {
  state = {
    todos: []
  }
  // fetching default data 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => res.json())
      .then(data => this.setState({ todos: data }));
  }
  // toggle complete 
  changeCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          if (todo.completed) {
            this.showNotification('Checked', true);

          }
        }
        return todo;
      })
    });
  }
  // show notification 
  showNotification = (message, type = false) => {
    let noti = document.createElement('div');
    const className = type ? 'noti danger' : 'noti success';
    noti.className = className;
    noti.textContent = message;
    document.body.prepend(noti);
    setTimeout(() => {
      noti.remove();
    }, 3000);
  }
  // adding todo in the list 
  addTodo = (title) => {
    // console.log(title);
    const newTodo = {
      id: uuidv4(),
      title: title
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  // delete todo list 
  delTodo = (id) => {
    // console.log(id);
    this.setState({
      // my way doing it working
      // todos: this.state.todos.filter(todo => todo.id !== id
      // )
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
    this.showNotification('Deleted Successfully');
  }

  render() {
    // console.log(this.state.todos)
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' >
            <section className="container p-5 my-5 shadow-sm bg-white">
              {/* <h1 className="text-danger display-4 pb-2 mb-4 border-bottom">Todo</h1> */}
              <AddTodo addTodo={this.addTodo} showNotification={this.showNotification} />
              <Todos todos={this.state.todos} changeCompleted={this.changeCompleted}
                delTodo={this.delTodo} />
            </section>
          </Route>
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    )
  }
}
// proptype 
App.prototypes = {
  AddTodo: PropTypes.func.isRequired,
  Todos: [PropTypes.array.isRequired, PropTypes.func.isRequired]
}

export default App;
