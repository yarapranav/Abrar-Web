import React from 'react';
import { Link } from 'react-router-dom';

const IntermediatePath = () => {
    return (
        <div className="intermediate-path-page">
            <section className="page-header" style={{
                background: "linear-gradient(rgba(26, 41, 128, 0.9), rgba(38, 208, 206, 0.9)), url('https://images.unsplash.com/photo-1556761175-4b9d5c6f8e8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
                backgroundSize: 'cover',
                color: 'white',
                padding: '100px 0',
                textAlign: 'center',
                borderRadius: '0 0 30px 30px',
                marginBottom: '60px'
            }}>
                <div className="container">
                    <div className="path-badge" style={{
                        display: 'inline-block',
                        backgroundColor: '#ff6b6b',
                        color: 'white',
                        padding: '8px 20px',
                        borderRadius: '20px',
                        fontWeight: '600',
                        marginBottom: '20px'
                    }}>Intermediate Level</div>
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Intermediate Learning Path</h1>
                    <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto', opacity: '0.9' }}>
                        Deep dive into political systems, economic analysis, and regional relationships. Build on your foundational knowledge with advanced concepts.
                    </p>
                </div>
            </section>

            <div className="container" style={{ marginBottom: '80px' }}>
                <div style={prerequisitesStyle}>
                    <h3><i className="fas fa-clipboard-check"></i> Prerequisites</h3>
                    <p>Before starting this path, we recommend completing the <Link to="/beginner-path" style={{ color: '#1a2980', fontWeight: '600' }}>Beginner Path</Link> or having equivalent knowledge of South Asian geography, basic history, and cultural fundamentals.</p>
                </div>

                <div className="steps-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {/* Step 1 */}
                    <div className="step-card" style={{ ...stepCardStyle, borderLeft: '5px solid #ff6b6b' }}>
                        <div className="step-number" style={stepNumberStyle}>1</div>
                        <div className="step-content">
                            <h3 style={stepTitleStyle}>Political Systems & Governance</h3>
                            <p>Analyze political structures, democratic institutions, and governance models across South Asian nations.</p>
                            
                            <div className="courses-list" style={{ marginTop: '15px' }}>
                                <Link to="/courses" className="course-item" style={courseItemStyle}>
                                    <i className="fas fa-check-circle" style={{ color: '#ff6b6b', fontSize: '20px' }}></i>
                                    <div>
                                        <div style={{ fontWeight: '600' }}>Modern South Asian Politics & Diplomacy</div>
                                        <div style={{ color: '#718096', fontSize: '14px' }}>20 hours • 36 lessons</div>
                                    </div>
                                </Link>
                            </div>
                            
                            <div style={durationBadgeStyle}>Estimated: 5-7 weeks</div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="step-card" style={{ ...stepCardStyle, borderLeft: '5px solid #ff6b6b' }}>
                        <div className="step-number" style={stepNumberStyle}>2</div>
                        <div className="step-content">
                            <h3 style={stepTitleStyle}>Economic Analysis</h3>
                            <p>Study economic development patterns, trade relations, and policy challenges in the region.</p>
                            
                            <div className="courses-list" style={{ marginTop: '15px' }}>
                                <Link to="/courses" className="course-item" style={courseItemStyle}>
                                    <i className="fas fa-check-circle" style={{ color: '#ff6b6b', fontSize: '20px' }}></i>
                                    <div>
                                        <div style={{ fontWeight: '600' }}>Economic Development & Challenges</div>
                                        <div style={{ color: '#718096', fontSize: '14px' }}>16 hours • 30 lessons</div>
                                    </div>
                                </Link>
                            </div>
                            
                            <div style={durationBadgeStyle}>Estimated: 4-6 weeks</div>
                        </div>
                    </div>
                </div>

                <div className="cta-section" style={{
                    textAlign: 'center',
                    backgroundColor: '#1a2980',
                    color: 'white',
                    padding: '60px 40px',
                    borderRadius: '20px',
                    margin: '60px 0'
                }}>
                    <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Ready to Advance Your Knowledge?</h2>
                    <p>Complete this path and earn the "South Asia Analyst" certificate</p>
                    <Link to="/learning" className="start-path-btn" style={{
                        backgroundColor: 'white',
                        color: '#1a2980',
                        padding: '15px 40px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: '700',
                        fontSize: '18px',
                        display: 'inline-block',
                        marginTop: '20px',
                        transition: 'all 0.3s'
                    }}>Start Learning Path</Link>
                </div>
            </div>
        </div>
    );
};

const stepCardStyle = {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '30px',
    marginBottom: '30px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    gap: '25px',
    alignItems: 'flex-start'
};

const stepNumberStyle = {
    backgroundColor: '#1a2980',
    color: 'white',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    flexShrink: 0
};

const stepTitleStyle = {
    color: '#1a2980',
    marginBottom: '10px',
    fontSize: '24px'
};

const courseItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '12px',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    marginBottom: '10px',
    textDecoration: 'none',
    color: '#2d3748',
    transition: 'all 0.3s'
};

const durationBadgeStyle = {
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    color: '#ff6b6b',
    padding: '5px 15px',
    borderRadius: '15px',
    fontSize: '14px',
    fontWeight: '600',
    display: 'inline-block',
    marginTop: '10px'
};

const prerequisitesStyle = {
    backgroundColor: '#f0f7ff',
    borderRadius: '15px',
    padding: '25px',
    marginBottom: '40px'
};

export default IntermediatePath;
