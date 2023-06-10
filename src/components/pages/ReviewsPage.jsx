import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'service/video-servise';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const { movie_id: id } = useParams();
  useEffect(() => {
    if (!id) return;
    const getReviewsList = async () => {
      const data = await getReviews(id);
      setReviews(data.data.results);
    };
    getReviewsList();
  }, [id]);
  if (reviews.length === 0) return `There is no review yet`;
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h2>{review.author}</h2>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsPage;
