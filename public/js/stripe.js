/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
import { loadStripe } from '@stripe/stripe-js';

export const bookTour = async (tourId) => {
  try {
    const stripe = await loadStripe(
      'pk_test_51NiCykEaPOrM59FlrY5BNiJjbHR7mWlnCMtZYGbqg7X19BfDK9sGdipLy6J0a07Isae7bDS2jP9f3nj8F25qutEV00X7ZfxG22'
    );

    // 1) Get checkout session from API
    const session = await axios.get(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session.data.session.id);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
