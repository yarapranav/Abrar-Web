import React from 'react';
import { Link } from 'react-router-dom';

const ExpertPath = () => {
    return (
        <div className="expert-path-page">
            <section className="page-header" style={{
                background: "linear-gradient(rgba(10, 20, 100, 0.9), rgba(20, 150, 150, 0.9)), url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
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
                        backgroundColor: '#1a2980',
                        color: 'white',
                        padding: '8px 20px',
                        borderRadius: '20px',
                        fontWeight: '600',
                        marginBottom: '20px'
                    }}>Expert Level</div>
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Expert Learning Path</h1>
                    <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto', opacity: '0.9' }}>
                        Advanced research methodologies, policy analysis, and specialized regional studies. For professionals, researchers, and serious scholars.
                    </p>
                </div>
            </section>

            <div className="container" style={{ marginBottom: '80px' }}>
                <div style={prerequisitesStyle}>
                    <h3 style={{ color: '#1a2980', marginBottom: '15px' }}><i className="fas fa-graduation-cap"></i> Prerequisites & Requirements</h3>
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li style={reqItemStyle}><i className="fas fa-check-circle" style={{ color: '#26d0ce' }}></i> Completion of <Link to="/beginner-path" style={{ color: '#1a2980', fontWeight: '600' }}>Beginner Path</Link></li>
                        <li style={reqItemStyle}><i className="fas fa-check-circle" style={{ color: '#26d0ce' }}></i> Completion of <Link to="/intermediate-path" style={{ color: '#1a2980', fontWeight: '600' }}>Intermediate Path</Link></li>
                        <li style={reqItemStyle}><i className="fas fa-check-circle" style={{ color: '#26d0ce' }}></i> Strong foundation in South Asian studies</li>
                        <li style={reqItemStyle}><i className="fas fa-check-circle" style={{ color: '#26d0ce' }}></i> Research or professional experience preferred</li>
                    </ul>
                </div>

                <div className="steps-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {/* Step 1 */}
                    <div className="step-card" style={{ ...stepCardStyle, borderLeft: '5px solid #1a2980' }}>
                        <div className="step-number" style={stepNumberStyle}>1</div>
                        <div className="step-content">
                            <h3 style={stepTitleStyle}>Advanced Research Methodologies</h3>
                            <p>Master qualitative and quantitative research techniques specific to South Asian studies.</p>
                            
                            <div style={projectCardStyle}>
                                <h4 style={{ color: '#1a2980', marginBottom: '10px' }}>Research Project: Comparative Policy Analysis</h4>
                                <p style={{ color: '#718096', fontSize: '14px' }}>Analyze and compare three policy areas across two South Asian countries</p>
                                <div style={durationBadgeStyle}>6-8 weeks</div>
                            </div>
                            
                            <div style={durationBadgeStyle}>Estimated: 8-10 weeks</div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="step-card" style={{ ...stepCardStyle, borderLeft: '5px solid #1a2980' }}>
                        <div className="step-number" style={stepNumberStyle}>2</div>
                        <div className="step-content">
                            <h3 style={stepTitleStyle}>Specialized Regional Studies</h3>
                            <p>Choose a specialization and conduct in-depth analysis of specific sub-regions or themes.</p>
                            
                            <div style={projectCardStyle}>
                                <h4 style={{ color: '#1a2980', marginBottom: '10px' }}>Specialization Options:</h4>
                                <ul style={{ color: '#718096', fontSize: '14px', marginTop: '10px' }}>
                                    <li>Himalayan Ecology & Politics</li>
                                    <li>Maritime Security in the Indian Ocean</li>
                                    <li>Urbanization & Megacity Governance</li>
                                    <li>Transboundary Water Management</li>
                                </ul>
                            </div>
                            
                            <div style={durationBadgeStyle}>Estimated: 10-12 weeks</div>
                        </div>
                    </div>
                </div>

                <div className="cta-section" style={{
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #1a2980, #3a4dcc)',
                    color: 'white',
                    padding: '60px 40px',
                    borderRadius: '20px',
                    margin: '60px 0'
                }}>
                    <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Ready to Become a South Asia Expert?</h2>
                    <p>Complete this path and earn the prestigious "South Asia Specialist" certification</p>
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
                    }}>Start Expert Path</Link>
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

const durationBadgeStyle = {
    backgroundColor: 'rgba(26, 41, 128, 0.1)',
    color: '#1a2980',
    padding: '5px 15px',
    borderRadius: '15px',
    fontSize: '14px',
    fontWeight: '600',
    display: 'inline-block',
    marginTop: '10px'
};

const prerequisitesStyle = {
    backgroundColor: '#f8fafc',
    borderRadius: '15px',
    padding: '25px',
    marginBottom: '40px',
    border: '2px solid #e2e8f0'
};

const reqItemStyle = {
    padding: '8px 0',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
};

const projectCardStyle = {
    backgroundColor: '#f0f7ff',
    borderRadius: '10px',
    padding: '20px',
    margin: '15px 0',
    borderLeft: '4px solid #1a2980'
};

export default ExpertPath;
