import React, { Component } from 'react';

class TitleInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { 
            value: '',
            valuePic: '',
            resultText: [],
            resultPhotos: []
         };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        alert('You selected ' + this.state.value + ' to search for.');
        event.preventDefault();
        fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=' + this.state.value + '&country=us',
            {
                headers: {
                    'X-RapidAPI-Key': 'aae1d6a8b4msh2fc4e6f48db645fp10f005jsn41b2e20d540d'
                }
            }
        )
            .then(results => {
                return results.json();
            }).then(data => {
                let resultText = data.results.locations 
                this.setState({ resultText: resultText });
            })
        console.log(this.resultText);
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <div style={{ marginTop: '20px' }}>
                        <label>Input the name of a TV Show or Movie: </label>
                        <input type="text" onChange={this.handleChange} />
                    </div>

                    <input type="submit" value="Submit" />

                    <p>{this.state.value}</p>
                    <p>{this.state.resultText}</p>
                </form>
        );
    }
}

export default TitleInput