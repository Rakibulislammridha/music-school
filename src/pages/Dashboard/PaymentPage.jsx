import React from 'react';
import Title from '../../components/Title/Title';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/Dashboard/CheckoutForm';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const PaymentPage = () => {

    const paidSubject = useLoaderData()

    const paid = paidSubject.price;

    const price = parseFloat(paid)

    return (
        <div>
            <Title
              subHeading={"Please Pay Your"}
              heading={`Available Sites: ${paidSubject.availableSits}`}
            ></Title>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                  price={price}
                  paidSubject={paidSubject}
                ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PaymentPage;