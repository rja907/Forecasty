import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    //converting Temperatures to Celcius
    const temps = _.map(cityData.list.map(weather=>weather.main.temp), temp => temp - 273);
    const pressures = cityData.list.map(weather=>weather.main.pressure);
    const humidities = cityData.list.map(weather=>weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    //ES6 syntax
    const { lon, lat } = cityData.city.coord;
    return(
      <tr key={name}>
          <td><GoogleMap lon={lon} lat={lat} /></td>
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
