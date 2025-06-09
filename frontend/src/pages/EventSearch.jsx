import React from 'react';

const EventSearch = () => {
  const mockEvents = [
    {
      id: 1,
      name: 'Summer Music Festival',
      date: '2024-07-15',
      location: 'Central Park, NY',
      price: '$50',
      image: 'https://placehold.co/400x200'
    },
    {
      id: 2,
      name: 'Tech Conference 2024',
      date: '2024-08-20',
      location: 'Convention Center, SF',
      price: '$200',
      image: 'https://placehold.co/400x200'
    },
    {
      id: 3,
      name: 'Food & Wine Expo',
      date: '2024-09-05',
      location: 'Exhibition Hall, CHI',
      price: '$75',
      image: 'https://placehold.co/400x200'
    }
  ];

  return (
    <div className="container">
      <h2 className="section-title">Search Events</h2>
      
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search events..."
            style={{ flex: 1, minWidth: '200px' }}
          />
          <select className="form-control" style={{ width: '200px' }}>
            <option value="">All Categories</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="food">Food & Drink</option>
            <option value="tech">Technology</option>
          </select>
          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {mockEvents.map(event => (
          <div key={event.id} className="card">
            <img
              src={event.image}
              alt={event.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
            />
            <div style={{ padding: '1rem' }}>
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Price: {event.price}</p>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSearch; 