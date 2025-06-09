import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/EventDetails.css';

const EventDetails = () => {
  const { id } = useParams();

  // Mock data - replace with actual API call
  const event = {
    id: id,
    title: "Summer Music Festival 2024",
    date: "July 15-17, 2024",
    venue: "Central Park, New York",
    description: "Join us for the biggest music festival of the summer! Three days of amazing performances, food, and fun activities.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: {
      lat: 40.7829,
      lng: -73.9654
    }
  };

  const relatedEvents = [
    {
      id: 2,
      title: "Jazz Night",
      date: "August 5, 2024",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Rock Concert",
      date: "September 10, 2024",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "Classical Evening",
      date: "October 15, 2024",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const handleBuyTicket = () => {
    window.location.href = `/checkout/${id}`;
  };

  return (
    <div className="event-details">
      <div className="event-banner">
        <img src={event.image} alt={event.title} />
      </div>
      
      <div className="event-content">
        <h1>{event.title}</h1>
        <div className="event-info">
          <p><i className="fas fa-calendar"></i> {event.date}</p>
          <p><i className="fas fa-map-marker-alt"></i> {event.venue}</p>
          <p><i className="fas fa-ticket-alt"></i> ${event.price}</p>
        </div>
        
        <div className="event-description">
          <h2>About the Event</h2>
          <p>{event.description}</p>
        </div>

        <button className="buy-ticket-btn" onClick={handleBuyTicket}>
          Buy Ticket
        </button>

        <div className="event-location">
          <h2>Location</h2>
          <div className="map-container">
            <iframe
              title="Event Location"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${event.location.lat},${event.location.lng}`}
              allowFullScreen
            />
          </div>
        </div>

        <div className="related-events">
          <h2>You May Also Like</h2>
          <div className="related-events-grid">
            {relatedEvents.map(event => (
              <div key={event.id} className="related-event-card">
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails; 