import React from 'react';
import { Link } from 'react-router-dom';

const BeginnerPath = () => {
    return (
        <div className="beginner-path-page">
            <section className="page-header" style={{
                background: "linear-gradient(rgba(26, 41, 128, 0.9), rgba(38, 208, 206, 0.9)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
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
                        backgroundColor: '#26d0ce',
                        color: 'white',
                        padding: '8px 20px',
                        borderRadius: '20px',
                        fontWeight: '600',
                        marginBottom: '20px'
                    }}>Beginner Level</div>
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Beginner Learning Path</h1>
                    <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto', opacity: '0.9' }}>
                        Start from scratch with fundamentals of geography, basic history, and cultural introduction. Perfect for those new to South Asian studies.
                    </p>
                </div>
            </section>

            <div className="container" style={{ marginBottom: '80px' }}>
                <div className="steps-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {/* Step 1 */}
                    <div className="step-card" style={{
                        backgroundColor: 'white',
                        borderRadius: '15px',
                        padding: '30px',
                        marginBottom: '30px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                        borderLeft: '5px solid #26d0ce',
                        display: 'flex',
                        gap: '25px',
                        alignItems: 'flex-start'
                    }}>
                        <div className="step-number" style={{
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
                        }}>1</div>
                        <div className="step-content">
                            <h3 style={{ color: '#1a2980', marginBottom: '10px', fontSize: '24px' }}>Foundation Phase: Geography Basics</h3>
                            <p>Start with the physical geography of South Asia. Understand mountains, rivers, climate patterns, and natural resources that shape the region.</p>
                            
                            <div className="courses-list" style={{ marginTop: '15px' }}>
                                <Link to="/courses" className="course-item" style={courseItemStyle}>
                                    <i className="fas fa-check-circle" style={{ color: '#26d0ce', fontSize: '20px' }}></i>
                                    <div>
                                        <div style={{ fontWeight: '600' }}>South Asia: Physical Geography Masterclass</div>
                                        <div style={{ color: '#718096', fontSize: '14px' }}>12 hours • 24 lessons</div>
                                    </div>
                                </Link>
                                
                                <Link to="/courses" className="course-item" style={courseItemStyle}>
                                    <i className="fas fa-check-circle" style={{ color: '#26d0ce', fontSize: '20px' }}></i>
                                    <div>
                                        <div style={{ fontWeight: '600' }}>Climate & Environmental Studies</div>
                                        <div style={{ color: '#718096', fontSize: '14px' }}>14 hours • 26 lessons</div>
                                    </div>
                                </Link>
                            </div>
                            
                            <div style={durationBadgeStyle}>Estimated: 4-6 weeks</div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="step-card" style={{ ...stepCardStyle, borderLeft: '5px solid #26d0ce' }}>
                        <div className="step-number" style={stepNumberStyle}>2</div>
                        <div className="step-content">
                            <h3 style={stepTitleStyle}>Cultural Introduction</h3>
                            <p>Explore the diverse cultures, languages, religions, and traditions that make South Asia unique.</p>
                            
                            <div className="courses-list" style={{ marginTop: '15px' }}>
                                <Link to="/courses" className="course-item" style={courseItemStyle}>
                                    <i className="fas fa-check-circle" style={{ color: '#26d0ce', fontSize: '20px' }}></i>
                                    <div>
                                        <div style={{ fontWeight: '600' }}>Cultural Diversity & Traditions</div>
                                        <div style={{ color: '#718096', fontSize: '14px' }}>15 hours • 28 lessons</div>
                                    </div>
                                </Link>
                            </div>
                            
                            <div style={durationBadgeStyle}>Estimated: 3-4 weeks</div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="step-card" style={{ ...stepCardStyle, borderLeft: '5px solid #26d0ce' }}>
                        <div className="step-number" style={stepNumberStyle}>3</div>
                        <div className="step-content">
                            <h3 style={stepTitleStyle}>Historical Foundations</h3>
                            <p>Learn about ancient civilizations and historical developments that shaped modern South Asia.</p>
                            
                            <div className="courses-list" style={{ marginTop: '15px' }}>
                                <Link to="/courses" className="course-item" style={courseItemStyle}>
                                    <i className="fas fa-check-circle" style={{ color: '#26d0ce', fontSize: '20px' }}></i>
                                    <div>
                                        <div style={{ fontWeight: '600' }}>Ancient Civilizations: Indus Valley to Mughals</div>
                                        <div style={{ color: '#718096', fontSize: '14px' }}>18 hours • 32 lessons</div>
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
                    <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Ready to Start Your Learning Journey?</h2>
                    <p>Complete this path and earn the "South Asia Foundations" certificate</p>
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
    backgroundColor: 'rgba(38, 208, 206, 0.1)',
    color: '#26d0ce',
    padding: '5px 15px',
    borderRadius: '15px',
    fontSize: '14px',
    fontWeight: '600',
    display: 'inline-block',
    marginTop: '10px'
};

export default BeginnerPath;
