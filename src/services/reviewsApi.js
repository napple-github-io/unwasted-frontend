import { request } from './request';

export const postReviewToApi = (review, thumbsUp, reviewer, reviewee) => {
  console.log('before submit', thumbsUp);
  return request('/reviews/', 'POST', {
    reviewText: review,
    thumbsUp,
    reviewer: reviewer.userMongooseId,
    reviewee
  });
};
