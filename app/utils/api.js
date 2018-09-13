var axios = require('axios');

function get5DayForecast (city) {
	var url='http://api.openweathermap.org/data/2.5/forecast?q='+city+'&APPID=505fb23177047802420fd0daaa8c0789'
	return (
		axios.get(url)
			.then(function(weather) {
				return weather.data.list
			})
	)
}

function getCurrentWeather (city) {
	var url='http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=505fb23177047802420fd0daaa8c0789'
	return (
		axios.get(url)
			.then(function(weather) {
				return weather.data.list
			})
	)
}

module.exports = {
	get5DayForecast: get5DayForecast,
	getCurrentWeather: getCurrentWeather
}