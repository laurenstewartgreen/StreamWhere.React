import React, { Component } from 'react';


class TitleInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { 
            value: '',
            resultText: [],
            loaded: false
         };
    }

    handleChange = (event) => {
        this.setState({ 
            value: event.target.value,
            loaded: false });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const that = this;
        fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=' + this.state.value + '&country=us',
            {
                headers: {
                    'X-RapidAPI-Key': 'aae1d6a8b4msh2fc4e6f48db645fp10f005jsn41b2e20d540d'
                }
            }
        )
            .then((results) => results.json())
            .then(function(data) {
                let dataText = data.results;
                
                dataText.map(function(dataText) {
                    let locs = dataText.locations;
                    locs.map(function(locs) {
                    let resultText = locs.display_name;
                    that.setState({
                        resultText: resultText,
                        loaded: true
                    })
                })}
                
            )
        })
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <div style={{ marginTop: '20px' }}>
                        <label>Input the name of a TV Show or Movie: </label>
                        <input type="text" onChange={this.handleChange} />
                    </div>

                    <input type="submit" value="Submit" />

                    <p>
                    {this.state.loaded ? this.state.value + ' streams on ' + this.state.resultText + '.' : ''}
                    </p>
                </form>
        );
    }
}

export default TitleInput