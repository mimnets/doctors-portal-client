import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ booking }) => {   
  const { price, email, patient, _id } = booking;
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe()
  const elements = useElements();

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}}`
      },
      body: JSON.stringify({ price }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
  }, [price])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      // console.log(error);
      setCardError(error.message);
    }
    else {
      setCardError('');
    }

    setSuccess('');
    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      },
    );
    if(confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if(paymentIntent.status === 'succeeded'){
      // console.log(card);
      // Store payment info in the database
      const payment = {
        price,
        email,
        transactionId: paymentIntent.id, 
        bookingId: _id,
      }

      fetch('http://localhost:5000/payments',{
        method: 'POST',
        headers:{
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment),
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          setSuccess('Congrats! Your payment has been confirmed');
          setTransactionId(paymentIntent.id)
        }
      })
    }

    setProcessing(false); 
    // console.log(paymentIntent);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-sm btn-primary mt-4' type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {
        success && <div>
          <p className='text-green-500'>{success}</p>
          <p>Your TransactionId: <span className='font-bold'>{transactionId}</span></p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;