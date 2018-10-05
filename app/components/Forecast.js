var React = require('react');
var PropTypes = require('prop-types');
var Loading = require('./Loading');
var queryString = require('query-string');
var api = require('../utils/api');
var utils = require('../utils/helper')
var dayClassifier = utils.dayClassifier;
var dayNameConverter = utils.dayNameConverter;

function handleClick (day) {
	console.log(day)
}

function Day (props) {
	let forecast = props.date;
	let forecastIntervalLength = forecast.length;
	var [daysOrder, daysNameOrder]=dayClassifier(forecast);

	return (
		<div className='forecastContainer'>
		{daysOrder.map( function(day, index) {
								return(
									<div key={index}>
									{day.length !== 0 && 
										<div className='dayContainer' onClick={handleClick.bind(this,day)}>
											<h4 className='dayTitle'>{daysNameOrder[index]}</h4>
											{day}
										</div>
									}	
									</div>
								)
							}
						)
		}
		</div>
	)
}

Day.propTypes = {
	date: PropTypes.array.isRequired,
	
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
			date={this.state.weatherForecast}
			
		/>
		)

}	
}

module.exports=Forecast;