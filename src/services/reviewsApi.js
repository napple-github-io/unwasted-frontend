import { request } from './request';

export const postReviewToApi = (review, thumbsUp, reviewer, reviewee) => {
  return request('/reviews/', 'POST', {
    reviewText: review,
    thumbsUp,
    reviewer,
    reviewee
  });
};
