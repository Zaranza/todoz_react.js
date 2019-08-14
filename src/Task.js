import React from 'react';


class Task extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            editing: false,
            taskData: null,
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSaveEdit = this.handleSaveEdit.bind(this);
    }

    handleDelete(evt) {
        evt.preventDefault();
        !this.props.onRemove || this.props.onRemove();
    }

    handleComplete(evt) {
        evt.preventDefault();
        !this.props.onComplete || this.props.onComplete();
    }

    handleEdit(evt) {
        evt.preventDefault();
        this.setState({editing: true, taskData: this.props.value});
    }

    handleSaveEdit(evt) {
        //evt.preventDefault();
        this.setState({editing: false});
        !this.props.onSaveEdit || this.props.onSaveEdit(this.state.taskData);
    }

    handleFieldChange(evt) {
        evt.preventDefault();
        const currentData = Object.assign({}, this.state.taskData);
        currentData[evt.target.name] = evt.target.value;
        this.setState({
            taskData: currentData
        });
    }

    render() {
        let classe = "";

        if (this.props.value.active === true) {
            classe = "task-container";
        } else {
            classe = "task-container inactive";
        }

        if (this.state.editing === false) {
            return(
                <div className = {classe}>
                    <h3>{this.props.value.desc}</h3>
                    <h5>{this.props.value.when}</h5>
                    <h5>{this.props.value.hour}</h5>
                    <button className="task_buttons" onClick={this.handleEdit}>edit</button>
                    <button className="task_buttons" onClick={this.handleDelete}>delete</button>
                    <button className="task_buttons" onClick={this.handleComplete}>check done</button>
                </div>
            );
        } else {
            return(
                <div className = {classe}>
                    <form onSubmit={this.handleSaveEdit}>
                        <input className="desc_input" name="desc" value={this.state.taskData.desc} type="text" id="desc" onChange = {this.handleFieldChange}></input>
                        <input className="when_input" name="when" value={this.state.taskData.when} type="date" onChange = {this.handleFieldChange}></input>
                        <input className="hour_input" name="hour" value={this.state.taskData.hour}  type="time" onChange = {this.handleFieldChange}></input>
                        <button className="task_buttons" type="submit">save</button>
                    </form>
                </div>
            );
        }
    }
}

export default Task;