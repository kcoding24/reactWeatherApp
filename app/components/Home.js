var React = require('react');
var Link = require('react-router-dom').Link;
var api = require('../utils/api');

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state= {
			city: '',
		};

		this.handleChange=this.handleChange.bind(this);
	}

	handleChange(event) {
		var value = event.target.value;

		this.setState(function() {
			return {
				city: value
			}
		});
	}


	render() {
	
		return (
				<div className="home">
					<h1>Enter a City and State</h1>
					<input
						id="city"
						placeholder="Yangon, Myanmar"
						type="text"
						value={this.state.city}
						autoComplete="off"
						onChange={this.handleChange}
					/>
					<Link className="button " to="/forecast" onClick={api.get5DayForecast.bind(null,this.state.city)}>
						Get Weather
					</Link>


					
				</div>
		)
	}

}

module.exports = Home;