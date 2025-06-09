import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Plan Your Perfect Holiday Events</h1>
          <p>Discover and book amazing events happening during your holiday dates. From concerts to theater shows, we've got you covered!</p>
          <div className="hero-buttons">
            <Link to="/events" className="btn btn-primary">Start Planning</Link>
            <Link to="/register" className="btn btn-secondary">Sign Up Now</Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose TicketEasy?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-ticket-alt"></i>
              </div>
              <h3>Easy Payment</h3>
              <p>Secure and seamless payment processing for your event tickets.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3>Smart Planning</h3>
              <p>Find events that perfectly match your holiday schedule.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bell"></i>
              </div>
              <h3>Real-time Updates</h3>
              <p>Get instant notifications about event updates and reminders.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"TicketEasy made planning my holiday events so much easier. The interface is intuitive and the booking process is seamless."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Sarah Johnson" />
                <div>
                  <h4>Sarah Johnson</h4>
                  <p>Event Organizer</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I love how I can find events that match my schedule perfectly. The real-time updates are a game-changer!"</p>
              </div>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Michael Chen" />
                <div>
                  <h4>Michael Chen</h4>
                  <p>Frequent Traveler</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The customer support is amazing. They helped me resolve an issue within minutes. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Emily Davis" />
                <div>
                  <h4>Emily Davis</h4>
                  <p>Music Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Planning?</h2>
            <p>Join thousands of happy users who have already discovered their perfect events.</p>
            <Link to="/register" className="btn btn-primary">Get Started Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 