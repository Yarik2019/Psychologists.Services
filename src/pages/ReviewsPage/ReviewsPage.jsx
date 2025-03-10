import { useLocation } from "react-router-dom";

const ReviewsPage = () => {
  const location = useLocation();
  const reviews = location.state?.reviews || [];
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsPage;
