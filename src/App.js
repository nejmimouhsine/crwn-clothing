import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop.page';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';

import Header from './components/header/header.component';
import { auth } from './components/firebase/firebase.utils';

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		let unsubscribeFromAuth = null;
		unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			console.log(user);
		});

		return () => unsubscribeFromAuth();
	}, [currentUser]);

	return (
		<div className="App">
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInAndSignUpPage} />
			</Switch>
		</div>
	);
};

export default App;
