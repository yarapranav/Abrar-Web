import React, { useState } from 'react';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I sign up for courses?",
      answer: "You can sign up for any course by visiting the Courses page, selecting your desired course, and clicking 'Enroll Now.' Most introductory courses are free, while advanced courses and certifications may require payment."
    },
    {
      id: 2,
      question: "Is there a mobile app available?",
      answer: "Yes! Our mobile app is available for both iOS and Android devices. You can download it from the Apple App Store or Google Play Store. The app provides full access to courses, interactive maps, and assessments."
    },
    {
      id: 3,
      question: "How do I get certified?",
      answer: "To earn a certification, you must complete all required courses, pass all associated quizzes with a minimum score (usually 80%), and successfully complete the final certification exam. Certificates are issued digitally and can be downloaded from your dashboard."
    },
    {
      id: 4,
      question: "Can I use this platform for academic research?",
      answer: "Absolutely! Our platform is designed for both casual learners and academic researchers. We provide access to curated research papers, detailed datasets, and expert-reviewed content suitable for academic citations."
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for institutional purchases. All transactions are secured with SSL encryption."
    },
    {
      id: 6,
      question: "Do you offer group discounts for educational institutions?",
      answer: "Yes, we offer significant discounts for schools, universities, and other educational institutions. Please contact our partnerships team at partner@southasiaconnect.com for custom pricing and institutional licensing options."
    }
  ];

  const team = [
    {
      name: "Dr. Porkodi S",
      role: "Head of Geography",
      desc: "PhD in Geography from University of Delhi, 15+ years of teaching experience",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Prof. Abrar",
      role: "Historical Research Lead",
      desc: "Former professor at JNU, author of 8 books on South Asian history",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr. Shifa",
      role: "Cultural Studies Director",
      desc: "Anthropology PhD, extensive field research across South Asia",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr. Sana",
      role: "Technical Director",
      desc: "MS in Computer Science, leads our interactive learning platform development",
      img: "https://images.unsplash.com/photo-1594744125914-a3f4e1f868ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help with any questions about our platform, courses, or South Asian studies</p>
        </div>
      </section>

      <div className="container">
        {/* Contact Form & Info */}
        <div className="contact-layout">
          {/* Contact Form */}
          <div className="contact-form">
            <h2><i className="fas fa-envelope"></i> Send us a Message</h2>
            <form id="contactForm">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input type="text" id="name" className="form-input" required />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input type="email" id="email" className="form-input" required />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject *</label>
                <select id="subject" className="form-select" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing & Payments</option>
                  <option value="courses">Course Information</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="partnership">Partnership Opportunities</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Message *</label>
                <textarea id="message" className="form-textarea" required></textarea>
              </div>
              
              <button type="submit" className="btn-submit">
                <i className="fas fa-paper-plane" style={{ marginRight: '10px' }}></i> Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h2><i className="fas fa-address-card"></i> Contact Information</h2>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3>Our Office</h3>
                <p>123 Education Street<br />Knowledge City, KC 10001<br />United States</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-content">
                <h3>Phone Numbers</h3>
                <p>General Inquiries: +1 (555) 123-4567<br />Technical Support: +1 (555) 123-4568<br />Fax: +1 (555) 123-4569</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="info-content">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST<br />Saturday: 10:00 AM - 4:00 PM EST<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map(faq => (
              <div key={faq.id} className={`faq-item ${activeFaq === faq.id ? 'active' : ''}`}>
                <div 
                  className="faq-question" 
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                >
                  {faq.question}
                  <span className="faq-toggle">{activeFaq === faq.id ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p>Experts in South Asian studies dedicated to your learning experience</p>
          </div>
          
          <div className="team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-avatar">
                  <img src={member.img} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
