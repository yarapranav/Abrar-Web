import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Master South Asian Geography & Culture</h1>
          <p>Interactive learning platform with expert-led courses, 3D maps, video lessons, and assessments to help you master the geography, history, and culture of South Asia.</p>
          <div className="cta-buttons">
            <Link to="/courses" className="btn-primary">
              <i className="fas fa-play-circle" style={{ marginRight: '10px' }}></i>
              Start Learning Free
            </Link>
            <Link to="/learning" className="btn-secondary">
              <i className="fas fa-map-marked-alt" style={{ marginRight: '10px' }}></i>
              Explore Interactive Map
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Why Learn With SA.C?</h2>
            <p>Our platform combines cutting-edge technology with expert-curated content for the most effective learning experience.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>Interactive 3D Maps</h3>
              <p>Explore South Asia with clickable, detailed maps that show terrain, borders, and key landmarks.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-video"></i>
              </div>
              <h3>Expert Video Lessons</h3>
              <p>Learn from historians, geographers, and cultural experts through engaging video content.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <h3>Smart Assessments</h3>
              <p>Test your knowledge with adaptive quizzes, timed tests, and certification exams.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Progress Tracking</h3>
              <p>Monitor your learning journey with detailed analytics and personalized recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>20.6K+</h3>
              <p>Active Learners</p>
            </div>
            <div className="stat-item">
              <h3>150+</h3>
              <p>Video Lessons</p>
            </div>
            <div className="stat-item">
              <h3>8</h3>
              <p>South Asian Countries Covered</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Courses</h2>
            <p>Start your learning journey with our most popular courses.</p>
          </div>
          <div className="courses-preview">
            <Link to="/course/1" className="course-card" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
              <div className="course-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="course-content">
                <span className="course-category">Geography</span>
                <h3>South Asia: Physical Geography Masterclass</h3>
                <p className="course-description">Learn about mountains, rivers, climate, and natural resources of South Asia.</p>
                <div className="course-meta">
                  <span><i className="far fa-clock"></i> 12 Hours</span>
                  <span><i className="fas fa-signal"></i> Beginner</span>
                </div>
              </div>
            </Link>

            <Link to="/course/2" className="course-card" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
              <div className="course-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="course-content">
                <span className="course-category">History</span>
                <h3>Ancient Civilizations of South Asia</h3>
                <p className="course-description">Explore Indus Valley, Mauryan Empire, Mughal Era, and colonial history.</p>
                <div className="course-meta">
                  <span><i className="far fa-clock"></i> 18 Hours</span>
                  <span><i className="fas fa-signal"></i> Intermediate</span>
                </div>
              </div>
            </Link>

            <Link to="/course/3" className="course-card" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
              <div className="course-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="course-content">
                <span className="course-category">Culture</span>
                <h3>Cultural Diversity & Traditions</h3>
                <p className="course-description">Understand languages, religions, festivals, art, and cuisine of South Asia.</p>
                <div className="course-meta">
                  <span><i className="far fa-clock"></i> 15 Hours</span>
                  <span><i className="fas fa-signal"></i> Beginner</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
