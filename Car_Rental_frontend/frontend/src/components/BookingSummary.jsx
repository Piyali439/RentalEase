import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function BookingSummary() {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="text-center mt-20 text-red-500">
        Booking details not found. <Link to="/" className="underline text-blue-600">Go Home</Link>
      </div>
    );
  }

}

export default BookingSummary;
