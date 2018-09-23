var React = require('react');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');


class GetWeather extends React.Component {
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
		<div>
					
					<input
						id="city"
						placeholder="Yangon, Myanmar"
						type="text"
						value={this.state.city}
						autoComplete="off"
						onChange={this.handleChange}
					/>
					<Link 
						className="button " 
						to={{
								pathname: this.props.url+'forecast',
								search: '?city='+this.state.city
						}}>
							Get Weather
					</Link>
		</div>
	)
}	
}

GetWeather.propTypes = {
	url: PropTypes.string.isRequired
}


module.exports = GetWeather;