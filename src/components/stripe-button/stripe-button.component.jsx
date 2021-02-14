import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
    const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Hk4Y1IQ8MiZInN8D5Vpmcg6ldlMctjhF6zDH3t6wc1amkEaSj3GjpYZTQn8pWE6D3s1Tehq8k0cgxDHSvufEPcX00ulsb1V5J';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
