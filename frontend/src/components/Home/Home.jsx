import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const upcomingEvents = [
    {
      id: 1,
      name: 'Summer Music Festival',
      date: '2024-07-15',
      location: 'Central Park, NY',
      status: 'upcoming',
      image: 'https://placehold.co/400x200'
    },
    {
      id: 2,
      name: 'Tech Conference 2024',
      date: '2024-08-20',
      location: 'Convention Center, SF',
      status: 'upcoming',
      image: 'https://placehold.co/400x200'
    },
    {
      id: 3,
      name: 'Food & Wine Expo',
      date: '2024-09-05',
      location: 'Exhibition Hall, CHI',
      status: 'ongoing',
      image: 'https://placehold.co/400x200'
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "TicketEasy made planning our company's annual event a breeze. The platform is intuitive and the support team is fantastic!",
      author: "Sarah Johnson",
      role: "Event Manager",
      company: "TechCorp",
      avatar: "https://placehold.co/100x100"
    },
    {
      id: 2,
      quote: "I've tried many event planning tools, but TicketEasy stands out with its seamless payment integration and real-time updates.",
      author: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthLabs",
      avatar: "https://placehold.co/100x100"
    },
    {
      id: 3,
      quote: "The smart planning features saved us hours of work. Highly recommended for any event organizer!",
      author: "Emma Rodriguez",
      role: "Community Manager",
      company: "StartupHub",
      avatar: "https://placehold.co/100x100"
    }
  ];

  const pricingPlans = [
    {
      id: 1,
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Up to 5 events per month",
        "Basic event management",
        "Email support",
        "Standard templates"
      ]
    },
    {
      id: 2,
      name: "Pro",
      price: "$49",
      period: "per month",
      popular: true,
      features: [
        "Unlimited events",
        "Advanced analytics",
        "Priority support",
        "Custom templates",
        "Payment processing",
        "Team collaboration"
      ]
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "Advanced security",
        "White-label options"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does TicketEasy handle payments?",
      answer: "We use secure payment processing through Stripe, supporting all major credit cards and digital payment methods. All transactions are encrypted and PCI compliant."
    },
    {
      question: "Can I customize the event page?",
      answer: "Yes! Our platform offers various customization options, from basic template modifications to complete custom designs for Enterprise users."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 email support for all users, with priority support for Pro and Enterprise plans. Enterprise users also get a dedicated account manager."
    },
    {
      question: "How do refunds work?",
      answer: "Refund policies can be customized per event. We support both automatic and manual refund processing, with detailed tracking and reporting."
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Plan Your Perfect Event</h1>
          <p>Streamline your event planning with our all-in-one platform. From ticketing to analytics, we've got you covered.</p>
          <Link to="/register" className="hero-cta">Get Started</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <img src="https://placehold.co/100x100" alt="Easy Payment" className="feature-icon" />
            <h3>Easy Payment</h3>
            <p>Secure payment processing with multiple options</p>
          </div>
          <div className="feature-card">
            <img src="https://placehold.co/100x100" alt="Smart Planning" className="feature-icon" />
            <h3>Smart Planning</h3>
            <p>AI-powered tools to optimize your event</p>
          </div>
          <div className="feature-card">
            <img src="https://placehold.co/100x100" alt="24/7 Support" className="feature-icon" />
            <h3>24/7 Support</h3>
            <p>Round-the-clock assistance for all your needs</p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <table className="events-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {upcomingEvents.map(event => (
                <tr key={event.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <img src={event.image} alt={event.name} className="event-image" />
                      {event.name}
                    </div>
                  </td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>
                    <span className={`event-status status-${event.status}`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <div className="pricing-grid">
            {pricingPlans.map(plan => (
              <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <span className="popular-badge">Most Popular</span>}
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <div className="pricing-price">
                    {plan.price}
                    <span className="period">/{plan.period}</span>
                  </div>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link to="/register" className="btn btn-primary">Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Event Planning?</h2>
            <p>Join thousands of event organizers who trust TicketEasy</p>
            <div className="cta-buttons">
              <Link to="/register" className="cta-button primary">Start Free Trial</Link>
              <Link to="/contact" className="cta-button secondary">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span>{expandedFaq === index ? '−' : '+'}</span>
                </div>
                {expandedFaq === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 