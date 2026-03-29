import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();
    const [progress, setProgress] = useState(null);

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }

        if (user) {
            // Load user progress from localStorage or initialize with defaults from legacy
            const savedProgress = JSON.parse(localStorage.getItem('progress_' + user.email)) || {
                modulesCompleted: 3,
                quizAverage: 85,
                hoursThisWeek: 5.5,
                certificates: 1,
                currentStreak: 7,
                longestStreak: 14,
                totalHours: 12.5,
                achievements: [
                    { name: 'First Steps', description: 'Completed first module', icon: 'fa-star', unlocked: true },
                    { name: 'Quick Learner', description: '7-day streak', icon: 'fa-bolt', unlocked: true },
                    { name: 'Geography Buff', description: 'Perfect map quiz', icon: 'fa-map', unlocked: false },
                    { name: 'History Master', description: 'Complete all history modules', icon: 'fa-landmark', unlocked: false }
                ],
                recentActivity: [
                    { icon: 'fa-play', title: 'Started "Physical Geography"', time: '2 hours ago', category: 'Geography' },
                    { icon: 'fa-trophy', title: 'Completed Geography Quiz', time: 'Yesterday', category: 'Quiz' },
                    { icon: 'fa-video', title: 'Watched "Indus Valley"', time: '2 days ago', category: 'History' },
                    { icon: 'fa-award', title: 'Earned "First Steps"', time: '3 days ago', category: 'Achievement' }
                ],
                courseProgress: [
                    { name: 'Physical Geography', progress: 75, category: 'Geography', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { name: 'Ancient Civilizations', progress: 40, category: 'History', image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
                    { name: 'Cultural Traditions', progress: 20, category: 'Culture', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
                ]
            };
            setProgress(savedProgress);
        }
    }, [user, loading, navigate]);

    if (loading || !user || !progress) {
        return <div style={{ padding: '100px', textAlign: 'center' }}>Loading...</div>;
    }

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', paddingBottom: '40px' }}>
            {/* Dashboard Hero/Welcome Section */}
            <div className="container" style={{ paddingTop: '40px' }}>
                <div className="welcome-section" style={styles.welcomeSection}>
                    <div className="welcome-text">
                        <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Welcome back, {user.firstName}! 👋</h1>
                        <p style={{ opacity: 0.9, fontSize: '16px' }}>Continue your journey exploring the rich heritage of South Asia</p>
                    </div>
                    <div className="welcome-stats" style={{ display: 'flex', gap: '30px' }}>
                        <div className="welcome-stat" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '28px', fontWeight: 700, color: '#26d0ce' }}>{progress.currentStreak}</div>
                            <div style={{ fontSize: '14px', opacity: 0.8 }}>Day Streak</div>
                        </div>
                        <div className="welcome-stat" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '28px', fontWeight: 700, color: '#26d0ce' }}>{progress.totalHours}</div>
                            <div style={{ fontSize: '14px', opacity: 0.8 }}>Hours Spent</div>
                        </div>
                        <div className="welcome-stat" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '28px', fontWeight: 700, color: '#26d0ce' }}>{progress.achievements.filter(a => a.unlocked).length}</div>
                            <div style={{ fontSize: '14px', opacity: 0.8 }}>Achievements</div>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="logout-btn" style={styles.logoutBtn}>
                        <i className="fas fa-sign-out-alt"></i> Logout
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid" style={styles.statsGrid}>
                    <div className="stat-card" style={styles.statCard}>
                        <div className="stat-icon" style={styles.statIcon}><i className="fas fa-book-open"></i></div>
                        <div className="stat-info">
                            <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '5px' }}>{progress.modulesCompleted}</h3>
                            <p style={{ color: '#718096', fontSize: '14px' }}>Modules Completed</p>
                        </div>
                    </div>
                    <div className="stat-card" style={styles.statCard}>
                        <div className="stat-icon" style={styles.statIcon}><i className="fas fa-trophy"></i></div>
                        <div className="stat-info">
                            <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '5px' }}>{progress.quizAverage}%</h3>
                            <p style={{ color: '#718096', fontSize: '14px' }}>Average Quiz Score</p>
                        </div>
                    </div>
                    <div className="stat-card" style={styles.statCard}>
                        <div className="stat-icon" style={styles.statIcon}><i className="fas fa-clock"></i></div>
                        <div className="stat-info">
                            <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '5px' }}>{progress.hoursThisWeek}</h3>
                            <p style={{ color: '#718096', fontSize: '14px' }}>Hours This Week</p>
                        </div>
                    </div>
                    <div className="stat-card" style={styles.statCard}>
                        <div className="stat-icon" style={styles.statIcon}><i className="fas fa-award"></i></div>
                        <div className="stat-info">
                            <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '5px' }}>{progress.certificates}</h3>
                            <p style={{ color: '#718096', fontSize: '14px' }}>Certificates Earned</p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="main-grid" style={styles.mainGrid}>
                    {/* Recent Activity */}
                    <div className="recent-activity" style={styles.card}>
                        <div style={styles.sectionTitle}>
                            <h2 style={{ fontSize: '22px', color: '#1a2980', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fas fa-history"></i> Recent Activity
                            </h2>
                            <a href="#" style={{ color: '#26d0ce', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>View All</a>
                        </div>
                        <div className="activity-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {progress.recentActivity.map((activity, index) => (
                                <div key={index} style={styles.activityItem}>
                                    <div style={styles.activityIcon}>
                                        <i className={`fas ${activity.icon}`}></i>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '16px', color: '#2d3748', marginBottom: '5px' }}>{activity.title}</h4>
                                        <p style={{ color: '#718096', fontSize: '13px' }}>{activity.category}</p>
                                    </div>
                                    <div style={{ color: '#718096', fontSize: '12px' }}>{activity.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="achievements-section" style={styles.card}>
                        <div style={styles.sectionTitle}>
                            <h2 style={{ fontSize: '22px', color: '#1a2980', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fas fa-medal"></i> Achievements
                            </h2>
                            <a href="#" style={{ color: '#26d0ce', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>View All</a>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                            {progress.achievements.map((achievement, index) => (
                                <div key={index} style={{
                                    ...styles.achievementCard,
                                    opacity: achievement.unlocked ? 1 : 0.5
                                }}>
                                    <div style={{
                                        ...styles.achievementIcon,
                                        background: achievement.unlocked ? 'linear-gradient(135deg, #1a2980, #3a4dcc)' : '#cbd5e0'
                                    }}>
                                        <i className={`fas ${achievement.icon}`}></i>
                                    </div>
                                    <h4 style={{ fontSize: '14px', marginBottom: '5px', color: '#2d3748' }}>{achievement.name}</h4>
                                    <p style={{ color: '#718096', fontSize: '11px' }}>{achievement.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Progress Section */}
                <div style={styles.card}>
                    <div style={styles.sectionTitle}>
                        <h2 style={{ fontSize: '22px', color: '#1a2980', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <i className="fas fa-chart-line"></i> Your Learning Progress
                        </h2>
                        <a href="/learning" style={{ color: '#26d0ce', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Continue Learning <i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {progress.courseProgress.map((course, index) => (
                            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h4 style={{ fontSize: '16px', color: '#2d3748' }}>{course.name}</h4>
                                    <span style={{ color: '#1a2980', fontWeight: 600, fontSize: '14px' }}>{course.progress}%</span>
                                </div>
                                <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ width: `${course.progress}%`, height: '100%', background: 'linear-gradient(90deg, #1a2980, #26d0ce)', borderRadius: '4px' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    welcomeSection: {
        background: 'linear-gradient(135deg, #1a2980, #3a4dcc)',
        color: 'white',
        padding: '40px',
        borderRadius: '20px',
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        boxShadow: '0 10px 30px rgba(26, 41, 128, 0.2)',
        position: 'relative'
    },
    logoutBtn: {
        backgroundColor: 'white',
        color: '#1a2980',
        padding: '10px 25px',
        borderRadius: '50px',
        fontWeight: 700,
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s'
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '25px',
        marginBottom: '30px',
    },
    statCard: {
        background: 'white',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    statIcon: {
        width: '60px',
        height: '60px',
        background: 'linear-gradient(135deg, #1a2980, #3a4dcc)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '28px',
    },
    mainGrid: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '25px',
        marginBottom: '30px',
    },
    card: {
        background: 'white',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
        marginBottom: '30px'
    },
    sectionTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '25px',
    },
    activityItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        paddingBottom: '15px',
        borderBottom: '1px solid #e2e8f0',
    },
    activityIcon: {
        width: '45px',
        height: '45px',
        background: 'rgba(38, 208, 206, 0.1)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#26d0ce',
        fontSize: '20px',
    },
    achievementCard: {
        textAlign: 'center',
        padding: '20px 15px',
        background: '#f8fafc',
        borderRadius: '10px',
    },
    achievementIcon: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        margin: '0 auto 12px',
    }
};

export default Dashboard;
