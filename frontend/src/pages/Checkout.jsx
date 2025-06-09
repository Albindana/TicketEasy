import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/Checkout.css';

// Replace with your Stripe publishable key
const stripePromise = loadStripe('your_publishable_key');

const Checkout = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Fetch event details
    // Replace with actual API call
    setEvent({
      id: id,
      title: "Summer Music Festival 2024",
      date: "July 15-17, 2024",
      venue: "Central Park, New York",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const stripe = await stripePromise;
      
      // Call your backend to create a Stripe Checkout Session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: id,
          email: email,
        }),
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        setError(result.error.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!event) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="event-summary">
          <img src={event.image} alt={event.title} />
          <div className="event-details">
            <h1>{event.title}</h1>
            <div className="event-info">
              <p><i className="fas fa-calendar"></i> {event.date}</p>
              <p><i className="fas fa-map-marker-alt"></i> {event.venue}</p>
              <p className="price"><i className="fas fa-ticket-alt"></i> ${event.price}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Complete Your Purchase</h2>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">Payment successful!</div>}

          <button 
            type="submit" 
            className="checkout-button"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout; 