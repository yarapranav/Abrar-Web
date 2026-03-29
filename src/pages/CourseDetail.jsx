import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { coursesDetailData } from '../data/coursesDetailData';
import { useAuth } from '../context/AuthContext';

const CourseDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [course, setCourse] = useState(null);
    const [activeModule, setActiveModule] = useState(null);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const foundCourse = coursesDetailData[id];
        if (foundCourse) {
            setCourse(foundCourse);
        } else {
            // If course not found, could redirect to 404 or courses page
            navigate('/courses');
        }

        // Check enrollment from local storage
        const email = user?.email;
        if (email) {
            const enrolled = JSON.parse(localStorage.getItem(`enrolled_${email}`) || '[]');
            if (enrolled.includes(parseInt(id))) {
                setIsEnrolled(true);
            }
        }
    }, [id, navigate, user]);

    const handleEnroll = () => {
        if (!user) {
            alert('Please login to enroll in courses.');
            navigate('/login');
            return;
        }

        const email = user.email;
        const enrolled = JSON.parse(localStorage.getItem(`enrolled_${email}`) || '[]');
        
        if (!enrolled.includes(parseInt(id))) {
            const updated = [...enrolled, parseInt(id)];
            localStorage.setItem(`enrolled_${email}`, JSON.stringify(updated));
            setIsEnrolled(true);
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
                navigate('/learning');
            }, 2000);
        } else {
            alert('You are already enrolled in this course.');
            navigate('/learning');
        }
    };

    const toggleModule = (moduleId) => {
        setActiveModule(activeModule === moduleId ? null : moduleId);
    };

    if (!course) return null;

    return (
        <div className="course-detail-page">
            {/* Hero Section */}
            <section className="course-hero" style={{ 
                background: `linear-gradient(rgba(26, 41, 128, 0.9), rgba(38, 208, 206, 0.9)), url('${course.img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                padding: '100px 0',
                textAlign: 'center',
                borderRadius: '0 0 30px 30px',
                marginBottom: '60px'
            }}>
                <div className="container">
                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', display: 'inline-block', marginBottom: '20px' }}>
                        <span style={{ fontWeight: 600 }}>{course.category} • {course.level}</span>
                    </div>
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>{course.title}</h1>
                    <p style={{ fontSize: '20px', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>{course.description}</p>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="far fa-clock"></i> <span>{course.time}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fas fa-video"></i> <span>{course.lessons}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fas fa-user-graduate"></i> <span>{course.students}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <i className="fas fa-star"></i> <span>{course.rating} Rating</span>
                        </div>
                    </div>
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
                    <i className="fas fa-check-circle"></i> Successfully enrolled! Redirecting...
                </div>
            )}

            <div className="container">
                <div className="course-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px', marginBottom: '80px' }}>
                    {/* Main Content */}
                    <div className="course-main">
                        <section className="course-section" style={{ marginBottom: '40px' }}>
                            <h2 style={{ color: '#1a2980', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '28px', borderBottom: '2px solid #26d0ce', paddingBottom: '10px', marginBottom: '20px' }}>
                                <i className="fas fa-info-circle"></i> About This Course
                            </h2>
                            <p style={{ lineHeight: '1.7', marginBottom: '15px' }}>{course.about}</p>
                            <p style={{ lineHeight: '1.7' }}>{course.aboutSecondary}</p>
                        </section>

                        {course.whatYoullLearn && (
                            <section className="course-section" style={{ marginBottom: '40px' }}>
                                <h2 style={{ color: '#1a2980', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '28px', borderBottom: '2px solid #26d0ce', paddingBottom: '10px', marginBottom: '20px' }}>
                                    <i className="fas fa-graduation-cap"></i> What You'll Learn
                                </h2>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                                    {course.whatYoullLearn.map((item, index) => (
                                        <div key={index} style={{ background: '#f0f7ff', padding: '20px', borderRadius: '10px' }}>
                                            <i className={`fas ${item.icon}`} style={{ color: '#26d0ce', fontSize: '24px', marginBottom: '10px' }}></i>
                                            <h3 style={{ color: '#1a2980', marginBottom: '10px', fontSize: '1.2rem' }}>{item.title}</h3>
                                            <p style={{ fontSize: '0.95rem', color: '#4a5568' }}>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {course.timeline && (
                            <section className="course-section" style={{ marginBottom: '40px' }}>
                                <h2 style={{ color: '#1a2980', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '28px', borderBottom: '2px solid #26d0ce', paddingBottom: '10px', marginBottom: '20px' }}>
                                    <i className="fas fa-history"></i> Historical Timeline
                                </h2>
                                <div className="timeline-container" style={{ position: 'relative', padding: '20px 0' }}>
                                    {course.timeline.map((event, index) => (
                                        <div key={index} style={{ display: 'flex', marginBottom: '30px', position: 'relative' }}>
                                            <div style={{ minWidth: '120px', fontWeight: 700, color: '#26d0ce', paddingRight: '20px', textAlign: 'right' }}>
                                                {event.year}
                                            </div>
                                            <div style={{ position: 'relative', paddingLeft: '30px', borderLeft: '3px solid #1a2980' }}>
                                                <div style={{ position: 'absolute', left: '-9px', top: '5px', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: '#1a2980' }}></div>
                                                <h3 style={{ fontSize: '1.1rem', marginBottom: '5px', color: '#2d3748' }}>{event.title}</h3>
                                                <p style={{ color: '#718096', fontSize: '0.95rem' }}>{event.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <section className="course-section" style={{ marginBottom: '40px' }}>
                            <h2 style={{ color: '#1a2980', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '28px', borderBottom: '2px solid #26d0ce', paddingBottom: '10px', marginBottom: '20px' }}>
                                <i className="fas fa-list-alt"></i> Course Curriculum
                            </h2>
                            {course.curriculum.map((module) => (
                                <div key={module.id} style={{ marginBottom: '15px', border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                                    <div 
                                        onClick={() => toggleModule(module.id)}
                                        style={{ 
                                            background: 'white', 
                                            padding: '20px', 
                                            display: 'flex', 
                                            justifyContent: 'space-between', 
                                            alignItems: 'center', 
                                            cursor: 'pointer' 
                                        }}
                                    >
                                        <div>
                                            <h3 style={{ color: '#2d3748', fontSize: '1.1rem', marginBottom: '5px' }}>{module.title}</h3>
                                            <p style={{ color: '#718096', fontSize: '0.85rem' }}>{module.stats}</p>
                                        </div>
                                        <button style={{ background: '#1a2980', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px' }}>
                                            {activeModule === module.id ? 'Hide' : 'View'}
                                        </button>
                                    </div>
                                    <div style={{ 
                                        maxHeight: activeModule === module.id ? '1000px' : '0', 
                                        overflow: 'hidden', 
                                        transition: 'max-height 0.3s ease-out',
                                        background: '#f8fafc'
                                    }}>
                                        {module.lessons.map((lesson, lIdx) => (
                                            <div key={lIdx} style={{ padding: '15px 20px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <h4 style={{ fontSize: '1rem', color: '#2d3748' }}>{lesson.title}</h4>
                                                    <p style={{ fontSize: '0.85rem', color: '#718096' }}>{lesson.desc}</p>
                                                </div>
                                                <span style={{ color: '#718096', fontSize: '0.85rem' }}>{lesson.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>

                        {course.sites && (
                            <section className="course-section">
                                <h2 style={{ color: '#1a2980', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '28px', borderBottom: '2px solid #26d0ce', paddingBottom: '10px', marginBottom: '20px' }}>
                                    <i className="fas fa-map-marker-alt"></i> Key Archaeological Sites
                                </h2>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                                    {course.sites.map((site, index) => (
                                        <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                            <h3 style={{ color: '#1a2980', fontSize: '1.1rem', marginBottom: '10px' }}>{site.name}</h3>
                                            <p style={{ fontSize: '0.9rem', color: '#718096' }}>{site.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="course-sidebar">
                        <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', position: 'sticky', top: '100px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                                <div style={{ fontSize: '36px', fontWeight: 800, color: '#1a2980' }}>{course.price}</div>
                                <div style={{ color: '#718096' }}>Full Lifetime Access</div>
                            </div>
                            
                            <button 
                                onClick={handleEnroll}
                                style={{ 
                                    width: '100%', 
                                    padding: '15px', 
                                    background: isEnrolled ? '#718096' : 'linear-gradient(135deg, #1a2980, #3a4dcc)', 
                                    color: 'white', 
                                    border: 'none', 
                                    borderRadius: '10px', 
                                    fontSize: '1.1rem', 
                                    fontWeight: 700, 
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                            >
                                <i className={`fas ${isEnrolled ? 'fa-check' : 'fa-shopping-cart'}`}></i> {isEnrolled ? 'Already Enrolled' : 'Enroll Now'}
                            </button>

                            <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.85rem', color: '#718096' }}>
                                <i className="fas fa-shield-alt"></i> 30-Day Money-Back Guarantee
                            </p>

                            <hr style={{ margin: '25px 0', border: 'none', borderTop: '1px solid #eee' }} />

                            <div style={{ marginBottom: '25px' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#1a2980' }}><i className="fas fa-chalkboard-teacher"></i> Instructor</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#26d0ce', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                        {course.instructor.initials}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{course.instructor.name}</div>
                                        <div style={{ fontSize: '0.85rem', color: '#718096' }}>{course.instructor.title}</div>
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>{course.instructor.bio}</p>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#1a2980' }}><i className="fas fa-check-circle"></i> This Course Includes</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {course.includes.map((item, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: '#4a5568', padding: '8px 0', borderBottom: idx === course.includes.length - 1 ? 'none' : '1px solid #eee' }}>
                                            <i className={`fas ${item.icon}`} style={{ color: '#26d0ce', width: '20px' }}></i>
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
