var React = require('react');
var PropTypes = require('prop-types');
var Loading = require('./Loading');
var queryString = require('query-string');
var api = require('../utils/api');
var utils = require('../utils/helper')
var getDate = utils.getDate;

function Day (props) {
	var date = getDate(props.date)
	var weather = '../images/weather-icons/'+props.weather+'.svg';
	console.log(weather);
	return (
		<div>
			<img src={'/app/images/weather-icons/'+props.weather+'.svg'}/>
			<p>{date}</p>

			
		</div>
	)
}

Day.propTypes = {
	date: PropTypes.string.isRequired,
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
			date={this.state.weatherForecast[0].dt_txt}
			weather={this.state.weatherForecast[0].weather[0].icon}
		/>
		)
	}
}

module.exports=Forecast;