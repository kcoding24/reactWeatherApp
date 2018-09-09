var React = require('react');
var Link = require('react-router-dom').Link;
var api = require('../utils/api');

class Home extends React.Component {


	render() {
		api.get5DayForecast('london');
		return (
				<div className="home">
					<h1>Enter a City and State</h1>
					<input
						id="city"
						placeholder="Yangon, Myanmar"
						type='text'
					/>
					<Link className="button " to="/fiveday">

						Get Weather
					  
					</Link>


					
				</div>
		)
	}

}

module.exports = Home;