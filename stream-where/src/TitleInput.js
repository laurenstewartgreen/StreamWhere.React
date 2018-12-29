import React, { Component } from 'react';

class TitleInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        alert('You selected ' + this.state.value + ' to search for.');
        event.preventDefault();
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <div style={{ marginTop: '20px' }}>
                        <label>Input the name of a TV Show or Movie: </label>
                        <input type="text" onChange={this.handleChange} />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
        );
    }
}

export default TitleInput