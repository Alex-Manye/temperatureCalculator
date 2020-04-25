import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";



function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// I use the temperature and the function to convert it

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    //this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    //this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  // setean el estado con la escala y la temperature

  handleCelsiusChange = (temperature) => this.setState({scale: 'c', temperature});

  handleFarenheitChange = (temperature) => this.setState({scale: 'f', temperature});

  render() {
    const { scale, temperature } = this.state;

    // According to the scale, I convert the temperature to celsius or to fahrenheit

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
          {/* I renderize the inputs, pass as props the scale, temperature y method to set the state */}
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFarenheitChange}/>
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
