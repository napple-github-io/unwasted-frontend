import { request } from './request';

export const postReviewToApi = (reviewText, thumbsUp, reviewer, reviewee) => {
  return request('/reviews/', 'POST', {
    reviewText,
    thumbsUp,
    reviewer: reviewer.userMongooseId,
    reviewee: reviewee._id
  });
};

export const getReviewsByUserId = userId => {
  return request(`/reviews/?id=${userId}`, 'GET');
};
