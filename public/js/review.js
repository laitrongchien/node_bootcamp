/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
export const reviewTour = async (tourId, rating, review) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `http://127.0.0.1:3000/api/v1/tours/${tourId}/reviews`,
      data: {
        rating,
        review,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Create a review successfully!');
    }
  } catch (err) {
    // showAlert('error', err.response.data.message);
    console.log(err);
    showAlert('error', 'You have already reviewed this tour!');
  }
};
