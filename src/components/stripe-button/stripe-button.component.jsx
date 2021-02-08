import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_E3Gl1XAVpS19uKzvF0jUjulh00SuUM68zY';

	const onToken = (token) => {
		console.log(token);
		alert('Payment successful!');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Crwn Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amout={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
