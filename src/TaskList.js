import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;/*props.tasks;{
            tasks:  [
                      {desc: 'Finish JS Work', when: '15-08-2019', active: true},
                      {desc: 'Learn React', when: '01-08-2019', active: true},
                      {desc: 'Learn NPM', when: '01-08-2019', active: true},
                      {desc: 'Learn NODE.JS', when: '01-08-2019', active: true}
                    ]
        }*/
    }

    handleRemoveTask (indexToRemove) {
        !this.props.onRemoveTask || this.props.onRemoveTask(indexToRemove);
    }

    handleCompleteTask (indexToComplete) {
        !this.props.onCompleteTask || this.props.onCompleteTask(indexToComplete);
    }

    handleEditTask (indexToEdit, taskData) {
        !this.props.onEditTask || this.props.onEditTask(indexToEdit, taskData);
    }

    render() {
        return (
            this.props.value.map( (value, index) =>  {
                return(
                    <Task value = {value}
                          key = {"tsk" + index}
                          onRemove = {this.handleRemoveTask.bind(this, index)}
                          onComplete = {this.handleCompleteTask.bind(this, index)}
                          onSaveEdit = {this.handleEditTask.bind(this, index)}/>
                )
            })
        );
    }
    
}

export default TaskList;