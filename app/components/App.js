var React = require('react');
var Home = require('./Home');
var ReactRouter= require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Forecast = require('./Forecast')
var Nav = require('./Nav')

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Route path='/' component={Nav} />
					<Route exact path='/' component={Home} />
					<Route path='/forecast' component={Forecast} />
				</div>
			</Router>
		)
	}
}



module.exports = App;