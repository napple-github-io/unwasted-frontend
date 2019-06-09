import React from 'react';
import './display/main.css';
import Review from './reviews/ReviewList';

export default function App() {
  const reviewList = [
    {
      image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNjUxNTk3ODM3/tom-hanks-9327661-1-402.jpg',
      name: 'Tom Hanks',
      reccomended: true,
      content: 'Miss ya wilson'
    },
    {
      image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNjUxNTk3ODM3/tom-hanks-9327661-1-402.jpg',
      name: 'Tom Hanks',
      reccomended: true,
      content: 'Miss ya wilson'
    },
    {
      image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNjUxNTk3ODM3/tom-hanks-9327661-1-402.jpg',
      name: 'Tom Hanks',
      reccomended: true,
      content: 'Miss ya wilson'
    }
  ];

  return (
    <Review reviewList={reviewList} />
  );
}
