import React from 'react';
import './weather-data-display.css';

class WeatherDataDisplay extends React.Component {

	render() {

		let data = this.props.data;

		return(
		<div className="weather-display">
			<div className="city-name">
				<span>{data.city}</span>
			</div>
			<div className="weather-condition">
				<span>{data.description}</span>
			</div>
			<div className="weather-icon">
				<img src={data.icon} alt={data.description}/>
			</div>
			<div className="weather-details">
				<div className="temp-section">
					<span className="main-temp">{data.temp}&deg;</span>
					<div className="temp-max-min">
					<span className="min-temp">	&#9660;{data.tempMin}&deg;</span>
					<span className="max-temp">	&#9650;{data.tempMax}&deg;</span>
					</div>
				</div>
				<div className="air-condition">
					<div className="humidity">
						<span>HUMIDITY</span>
						<span>{data.humidity}%</span>
					</div>
					<div className="wind-speed">
						<span>Wind</span>
						<span>{data.wind}km/h</span>
					</div>
				</div>
			</div>
			<div className="day">
				<span>SUNDAY</span>
			</div>
			<div className="date">
				<span>MAY,19</span>
			</div>
		</div>
		)
	}
}

export default WeatherDataDisplay;