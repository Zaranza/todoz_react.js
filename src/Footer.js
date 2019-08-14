import React from 'react';
import './App.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);

        this.state = {
            desc: '',
            when: '',
            hour: '',
            active: false
        }
    }

    handleTextChange(evt) {
        evt.preventDefault();
        this.setState({desc: evt.target.value});
    }

    handleDateChange(evt) {
        evt.preventDefault();
        this.setState({when: evt.target.value});
    }

    handleTimeChange(evt) {
        evt.preventDefault();
        this.setState({hour: evt.target.value});
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newTask = {desc: this.state.desc, when: this.state.when, hour: this.state.hour, active: true};
        this.props.onSubmit(newTask);
        this.reset();
    }

    reset() {this.setState({desc: '', when: '', hour: ''})}

    render() {
        return (
            <form className = "footer-container" onSubmit = {this.handleSubmit}>
                <label for desc class="label">New Task: </label>
                <input name="desc" className="inputs" type="text" placeholder="task name" value={this.state.desc} onChange={this.handleTextChange} required/>
                <input className="inputs" type="date" value={this.state.when} onChange={this.handleDateChange} required/>
                <input className="inputs" type="time" value={this.state.hour} onChange={this.handleTimeChange}/>
                <button type="submit" className="submitButton">+</button>
            </form>
        )
    }
    
}

export default Footer;