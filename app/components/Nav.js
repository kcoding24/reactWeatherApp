var React = require('react');
var GetWeather = require('./GetWeather')

function Nav (props) {
	console.log(props.match.url)
	return (
		<div className='nav'>
			<GetWeather url={props.match.url}/>
		</div>
	)
	

}

module.exports = Nav;