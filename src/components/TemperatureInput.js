import React from 'react';

// definimos un objeto para las escalas

const scaleNames = {
    c: "Celsius",
    f: "Farenheit"
}

export default class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }
    
    render() {
        // I deconstruct temperature and scale to use them in the input

        const { temperature, scale } = this.props
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}