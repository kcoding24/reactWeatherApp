var React = require('react');
var PropTypes = require('prop-types');
var Loading = require('./Loading');
var queryString = require('query-string');
var api = require('../utils/api')

function Day (props) {
	return (
		<div>
			{props.date}
			{props.weather}
		</div>
	)
}

Day.propTypes = {
	date: PropTypes.number.isRequired,
	weather: PropTypes.string.isRequired
}


class Forecast extends React.Component {
		
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			weatherForecast: []
		}
	}

	componentDidMount() {
		var city = queryString.parse(this.props.location.search);
		api.get5DayForecast(city.city)
			.then(function(results) {
				console.log(results);
				this.setState(function() {
					
					return {loading: false,
									weatherForecast:results}
				})
				
			}.bind(this));
	}

	render() {
		var loading = this.state.loading;
		if(loading===true) {
				return (<Loading />)
			}
		return(	
		<Day 
			date={this.state.weatherForecast[0].dt}
			weather={this.state.weatherForecast[0].weather[0].icon}
		/>
		)
	}
}

module.exports=Forecast;