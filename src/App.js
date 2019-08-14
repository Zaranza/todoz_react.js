import React from 'react';
import TaskList from './TaskList';
import Footer from './Footer';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.state = {
      tasks:  [
                {desc: 'Finish JS Work', when: "2018-08-15", hour: '14:30', active: true},
                {desc: 'Learn React', when: "2018-08-16", hour: '14:30',  active: false},
                {desc: 'Learn NPM', when: "2018-08-17", hour: '14:30',  active: true},
                {desc: 'Learn NODE.JS', when: "2018-08-18", hour: '14:30',  active: true}
              ]
    }
  }

  handleSubmit(taskToAdd) {
    const prevState = Object.assign({}, this.state);
    prevState.tasks.push(taskToAdd);
    this.setState({tasks: prevState.tasks,});
  }

  handleRemoveTask(indexToRemove) {
    const prevState = Object.assign({}, this.state);
    prevState.tasks.splice(indexToRemove, 1);
    this.setState({tasks: prevState.tasks,});
  }

  handleCompleteTask(indexToComplete) {
    const prevState = Object.assign({}, this.state);
    prevState.tasks[indexToComplete].active = false;
    this.setState({tasks: prevState.tasks,});
  }

  handleEditTask(indexToEdit, taskData) {
    const prevState = Object.assign({}, this.state);
    prevState.tasks[indexToEdit] = taskData;
    prevState.tasks[indexToEdit].active = true;
    console.log(taskData);
    this.setState({tasks: prevState.tasks,});
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className ="title">todoZ</h1>
          <p>your daily tasks</p>
        </header>
        <div className= "tasklist-container">
          <TaskList className ="tasklist"
                    value = {this.state.tasks}
                    onRemoveTask = {this.handleRemoveTask}
                    onCompleteTask = {this.handleCompleteTask}
                    onEditTask = {this.handleEditTask}/>
        </div>
        <Footer className ="footer" onSubmit = {this.handleSubmit}/>
      </div>
    );
  }
}

export default App;