import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const coursesData = [
  { 
    id: 1,
    category: 'Geography', 
    title: 'South Asia: Physical Geography Masterclass', 
    description: 'Comprehensive coverage of mountains, rivers, climate zones, natural resources, and environmental challenges across South Asia.',
    time: '12 Hours', 
    lessons: '24 Lessons',
    rating: '4.8',
    level: 'Beginner',
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  { 
    id: 2,
    category: 'History', 
    title: 'Ancient Civilizations: Indus Valley to Mughals', 
    description: 'Explore the rise and fall of ancient civilizations, from the Harappan culture to the magnificent Mughal Empire.',
    time: '18 Hours', 
    lessons: '32 Lessons',
    rating: '4.9',
    level: 'Intermediate',
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 3,
    category: 'Culture', 
    title: 'Cultural Diversity & Traditions', 
    description: 'Understand languages, religions, festivals, art, architecture, cuisine, and social customs across South Asian countries.',
    time: '15 Hours', 
    lessons: '28 Lessons',
    rating: '4.7',
    level: 'Beginner',
    img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  { 
    id: 4,
    category: 'Politics', 
    title: 'Modern South Asian Politics & Diplomacy', 
    description: 'Analyze political systems, international relations, conflicts, and cooperation among South Asian nations.',
    time: '20 Hours', 
    lessons: '36 Lessons',
    rating: '4.8',
    level: 'Advanced',
    img: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 5,
    category: 'Economics', 
    title: 'Economic Development & Challenges', 
    description: 'Study economic growth, poverty alleviation, trade relations, and sustainable development in South Asia.',
    time: '16 Hours', 
    lessons: '30 Lessons',
    rating: '4.6',
    level: 'Intermediate',
    img: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  { 
    id: 6,
    category: 'Geography', 
    title: 'Climate & Environmental Studies', 
    description: 'Understand monsoons, climate change impacts, biodiversity, and conservation efforts across the region.',
    time: '14 Hours', 
    lessons: '26 Lessons',
    rating: '4.9',
    level: 'Beginner',
    img: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const categories = ['All Courses', 'Geography', 'History', 'Culture', 'Politics', 'Economics'];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All Courses');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const handleEnroll = (course) => {
    if (!enrolledCourses.includes(course.id)) {
      setEnrolledCourses([...enrolledCourses, course.id]);
      setShowNotification(`Successfully enrolled in ${course.title}!`);
      setTimeout(() => setShowNotification(null), 3000);
    } else {
      setShowNotification(`You are already enrolled in ${course.title}.`);
      setTimeout(() => setShowNotification(null), 2000);
    }
  };

  const filteredCourses = coursesData.filter(course => {
    return activeCategory === 'All Courses' || course.category === activeCategory;
  });

  return (
    <div className="courses-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Explore Our Courses</h1>
          <p>Expert-curated learning paths covering geography, history, culture, and politics of South Asia. Start your journey today.</p>
        </div>
      </section>

      {/* Notification */}
      {showNotification && (
        <div style={{
          position: 'fixed',
          top: '100px',
          right: '50px',
          backgroundColor: '#26d0ce',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          zIndex: 10002,
          animation: 'fadeIn 0.3s'
        }}>
          <i className="fas fa-check-circle"></i> {showNotification}
        </div>
      )}

      {/* Course Categories */}
      <div className="container">
        <div className="categories">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-img" style={{ backgroundImage: `url('${course.img}')` }}>
                <span className="course-level">{course.level}</span>
              </div>
              <div className="course-content">
                <span className="course-category">{course.category}</span>
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-meta">
                  <div className="course-stats">
                    <span><i className="far fa-clock"></i> {course.time}</span>
                    <span><i className="fas fa-video"></i> {course.lessons}</span>
                    <span><i className="fas fa-user-graduate"></i> {course.rating} ★</span>
                  </div>
                </div>
                <div className="course-actions">
                  <button 
                    className="enroll-btn"
                    onClick={() => handleEnroll(course)}
                    style={{
                      background: enrolledCourses.includes(course.id) ? '#718096' : '#1a2980'
                    }}
                  >
                    {enrolledCourses.includes(course.id) ? 'Enrolled ✔' : 'Enroll Now'}
                  </button>
                  <Link to={`/course/${course.id}`} className="view-details-btn" style={{ textDecoration: 'none', textAlign: 'center' }}>View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Paths */}
      <section className="learning-paths">
        <div className="container">
          <div className="section-title">
            <h2>Structured Learning Paths</h2>
            <p>Follow our expert-designed paths for systematic learning</p>
          </div>
          <div className="paths-grid">
            <div className="path-card">
              <div className="path-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3>Beginner Path</h3>
              <p>Start from scratch with fundamentals of geography, basic history, and cultural introduction.</p>
              <Link to="/learning" className="path-btn">View Path →</Link>
            </div>
            <div className="path-card">
              <div className="path-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Intermediate Path</h3>
              <p>Deep dive into political systems, economic analysis, and regional relationships.</p>
              <Link to="/learning" className="path-btn">View Path →</Link>
            </div>
            <div className="path-card">
              <div className="path-icon">
                <i className="fas fa-crown"></i>
              </div>
              <h3>Expert Path</h3>
              <p>Advanced research methodologies, policy analysis, and specialized regional studies.</p>
              <Link to="/learning" className="path-btn">View Path →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
