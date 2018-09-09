var React = require('react');
var Home = require('./Home');
var ReactRouter= require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Home />
				</div>
			</Router>
		)
	}
}



module.exports = App;