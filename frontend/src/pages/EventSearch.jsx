import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/EventSearch.css';

const EventSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Mock categories
  const categories = [
    { id: 'music', name: 'Music' },
    { id: 'sports', name: 'Sports' },
    { id: 'food', name: 'Food & Drink' },
    { id: 'tech', name: 'Technology' },
    { id: 'arts', name: 'Arts & Theater' },
    { id: 'family', name: 'Family' }
  ];

  // Mock events data
  const mockEvents = [
    {
      id: 1,
      name: 'Summer Music Festival',
      date: '2024-07-15',
      location: 'Central Park, NY',
      price: 50,
      category: 'music',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Join us for the biggest music festival of the summer featuring top artists from around the world.'
    },
    {
      id: 2,
      name: 'Tech Conference 2024',
      date: '2024-08-20',
      location: 'Convention Center, SF',
      price: 200,
      category: 'tech',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'A three-day conference featuring the latest in technology, AI, and innovation.'
    },
    {
      id: 3,
      name: 'Food & Wine Expo',
      date: '2024-09-05',
      location: 'Exhibition Hall, CHI',
      price: 75,
      category: 'food',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Experience the finest cuisines and wines from renowned chefs and wineries.'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchEvents = async () => {
      try {
        // TODO: Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setEvents(mockEvents);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch events');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Additional search logic can be added here
  };

  if (loading) {
    return (
      <div className="event-search-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="event-search-page">
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button onClick={() => window.location.reload()} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="event-search-page">
      <div className="search-container">
        <h1 className="search-title">Discover Events</h1>
        <p className="search-subtitle">Find the perfect event for your holiday</p>

        <form onSubmit={handleSearch} className="search-form">
          <div className="search-inputs">
            <div className="search-field">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events..."
                className="search-input"
              />
            </div>
            <div className="search-field">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="search-button">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="events-container">
        {filteredEvents.length === 0 ? (
          <div className="no-results">
            <p>No events found matching your criteria.</p>
          </div>
        ) : (
          <div className="events-grid">
            {filteredEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.name} />
                  <div className="event-category">
                    {categories.find(cat => cat.id === event.category)?.name}
                  </div>
                </div>
                <div className="event-content">
                  <h3 className="event-title">{event.name}</h3>
                  <div className="event-details">
                    <p className="event-date">
                      <i className="fas fa-calendar"></i>
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="event-location">
                      <i className="fas fa-map-marker-alt"></i>
                      {event.location}
                    </p>
                    <p className="event-price">
                      <i className="fas fa-ticket-alt"></i>
                      ${event.price}
                    </p>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <Link to={`/event/${event.id}`} className="view-details-button">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventSearch; 