var React = require('react');
var GetWeather = require('./GetWeather')

function Home (props) {
	console.log(props.match.url)
	return (
		<div className='home'>
		<h1>Enter a City and State</h1>
		<GetWeather url={props.match.url}/>
		</div>
	)
	

}

module.exports = Home;