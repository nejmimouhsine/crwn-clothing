import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.page';

const HatsPage = () => <h1>Hats Page</h1>;
const JacketPage = () => <h1>Jacket Page</h1>;

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/hats" component={HatsPage} />
				<Route path="/jacket" component={JacketPage} />
			</Switch>
		</div>
	);
};

export default App;
