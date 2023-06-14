import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CheckoutForm = ({ price, paidSubject }) => {

  const { user } = useAuth();

  const stripe = useStripe();

  const navigate = useNavigate()

  const elements = useElements();

  const [axiosSecure] = useAxiosSecure();

  const [cardError, setCardError] = useState("");

  const [clientSecret, setClientSecret] = useState("");

  const [processing, setProcessing ] = useState(false);

  const [transactionId, setTransactionId] = useState("")


  useEffect(() => {
    if( price > 0){
      axiosSecure.post("/create-payment-intent/", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details:{
            email: user?.email || "unknown",
            name: user?.displayName ||"anonymous",
          }
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false)

    if(paymentIntent.status === "succeeded"){
        setTransactionId(paymentIntent.id)
        const payment = {
            email:user?.email, 
            name: user?.displayName,
            date: new Date(),
            subjectId: paidSubject.subjectId,
            selectedClassId: paidSubject._id,
            enrolledStudents: parseInt(paidSubject.enrolledStudents) +1,
            availableSits: parseInt(paidSubject.availableSits) -1,
            transactionId: paymentIntent.id,
             price,
             instructor: paidSubject.instructor,
             enrolledSubject: paidSubject.subject,
             image: paidSubject.image
        }
        axiosSecure.post("/payments", payment)
        .then(res => {
            if(res.data.result.insertedId){
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Payment Success Enjoy The Course !!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/dashboard/enrolledClass")
            }
        })
    }
  };

  return (
    <div>
      <form className="w-2/3 m-10" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn bg-orange-600 text-white hover:bg-orange-400 mt-8 w-3/12"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay Now !
        </button>
      </form>
      {cardError && <p className="text-red-600 m-10">{cardError}</p>}
      {transactionId && <p className="text-green-600">Successfully Enrolled! Your Transition id is: {transactionId}</p>}
    </div>
  );
};

export default CheckoutForm;
