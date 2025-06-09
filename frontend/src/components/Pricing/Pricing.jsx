import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Up to 100 tickets per event',
        'Basic event analytics',
        'Email support',
        'Custom event page',
        'QR code tickets'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        'Up to 500 tickets per event',
        'Advanced analytics',
        'Priority email support',
        'Custom branding',
        'Social media integration',
        'Multiple ticket types',
        'Early access to new features'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        'Unlimited tickets',
        'Custom analytics dashboard',
        '24/7 phone support',
        'White-label solution',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      recommended: false
    }
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the perfect plan for your event needs</p>
        
        <div className="billing-toggle">
          <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={billingCycle === 'yearly'}
              onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            />
            <span className="slider"></span>
          </label>
          <span className={billingCycle === 'yearly' ? 'active' : ''}>
            Yearly <span className="save-badge">Save 20%</span>
          </span>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
          >
            {plan.recommended && (
              <div className="recommended-badge">Most Popular</div>
            )}
            
            <div className="plan-header">
              <h2>{plan.name}</h2>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">
                  {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
            </div>

            <ul className="features-list">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="select-plan-btn">
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Can I change plans later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a free trial?</h3>
            <p>Yes, we offer a 14-day free trial on all plans. No credit card required.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer refunds?</h3>
            <p>We offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 