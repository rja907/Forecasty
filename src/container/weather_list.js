import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather=>weather.main.temp), temp => temp - 273);
    const pressures = cityData.list.map(weather=>weather.main.pressure);
    const humidities = cityData.list.map(weather=>weather.main.humidity);

    console.log(temps);
    return(
      <tr key={name}>
          <td>{name}</td>
          <td>
            <Chart data={temps} color="orange" units="°C" />
          </td>
          <td>
            <Chart data={pressures} color="yellow" units="hPa" />
          </td>
          <td>
            <Chart data={humidities} color="white" units="%" />
          </td>
      </tr>
    )
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (°C)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state){
//   return {weather:state.weather};
// }

//ES6 syntax
function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
