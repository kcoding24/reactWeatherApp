var React = require('react');
var Link = require('react-router-dom').Link


class Home extends React.Component {


	render() {


		return (
				<div className="home">
					<h1>Enter a City and State</h1>
					<input
						id="city"
						placeholder="Yangon, Myanmar"
						type='text'
					/>
					<Link className="" to="/battle">
						Get Weather
					</Link>


					
				</div>
		)
	}

}

module.exports = Home;