import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Assessment = () => {
    const [activeTab, setActiveTab] = useState('quizzes');
    const [quizModal, setQuizModal] = useState({ open: false, quiz: null });
    const [currentStep, setCurrentStep] = useState(0); // 0: Start, 1: Question, 2: Result
    const [score, setScore] = useState(0);

    const quizzes = [
        { id: 'geo', title: 'South Asia: Physical Features', category: 'Geography', difficulty: 'Beginner', qCount: 10, time: '10 min' },
        { id: 'hist', title: 'Ancient Civilizations', category: 'History', difficulty: 'Intermediate', qCount: 10, time: '15 min' },
        { id: 'cult', title: 'Cultural Diversity', category: 'Culture', difficulty: 'Beginner', qCount: 10, time: '10 min' },
        { id: 'pol', title: 'Modern Politics', category: 'Politics', difficulty: 'Intermediate', qCount: 10, time: '15 min' },
        { id: 'env', title: 'Environment & Climate', category: 'Environment', difficulty: 'Advanced', qCount: 10, time: '20 min' }
    ];

    const results = [
        { id: 1, name: 'Physical Geography Quiz', date: 'Mar 15, 2024', score: 92, status: 'Passed' },
        { id: 2, name: 'Ancient History Test', date: 'Mar 10, 2024', score: 88, status: 'Passed' },
        { id: 3, name: 'Cultural Diversity Quiz', date: 'Mar 5, 2024', score: 76, status: 'Passed' }
    ];

    const handleStartQuiz = (quiz) => {
        setQuizModal({ open: true, quiz });
        setCurrentStep(1);
        setScore(0);
    };

    const handleAnswer = (correct) => {
        if (correct) setScore(score + 1);
        setCurrentStep(2); // In real app, go to next question
    };

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
            <section className="page-header" style={{
                background: 'linear-gradient(rgba(26, 41, 128, 0.9), rgba(38, 208, 206, 0.9)), url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
                backgroundSize: 'cover', color: 'white', padding: '80px 0', textAlign: 'center', borderRadius: '0 0 30px 30px', marginBottom: '60px'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Assessment Center</h1>
                    <p>Test your knowledge, track progress, and earn certifications in South Asian studies</p>
                </div>
            </section>

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px', marginBottom: '80px' }}>
                    {/* Sidebar */}
                    <aside className="sidebar" style={styles.card}>
                        <h2 style={{ color: '#1a2980', marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #26d0ce', fontSize: '24px' }}>Your Progress</h2>
                        <div style={styles.progressCard}>
                            <div style={styles.progressCircle}>
                                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a2980' }}>80%</div>
                            </div>
                            <p style={{ fontWeight: 600, color: '#2d3748', margin: '15px 0' }}>Overall Mastery</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
                            <div style={styles.statItem}><div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a2980' }}>24</div> Quizzes</div>
                            <div style={styles.statItem}><div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a2980' }}>87%</div> Avg.</div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="main-content">
                        <div style={styles.tabs}>
                            {['quizzes', 'results', 'certifications', 'practice'].map(tab => (
                                <button 
                                    key={tab} 
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        ...styles.tabBtn,
                                        backgroundColor: activeTab === tab ? '#1a2980' : 'white',
                                        color: activeTab === tab ? 'white' : '#2d3748',
                                        borderBottom: activeTab === tab ? '3px solid #26d0ce' : 'none'
                                    }}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        {activeTab === 'quizzes' && (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '25px' }}>
                                {quizzes.map(quiz => (
                                    <div key={quiz.id} style={styles.quizCard}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                            <span style={styles.categoryTag}>{quiz.category}</span>
                                            <span style={{ fontSize: '14px', color: '#718096' }}><i className="fas fa-signal"></i> {quiz.difficulty}</span>
                                        </div>
                                        <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#2d3748' }}>{quiz.title}</h3>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#718096', fontSize: '14px', marginBottom: '25px' }}>
                                            <span><i className="far fa-clock"></i> {quiz.time}</span>
                                            <span><i className="fas fa-question-circle"></i> {quiz.qCount} Qs</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <Link to={`/quiz?category=${quiz.category}`} style={styles.btnStart}>Start Quiz</Link>
                                            <button style={styles.btnPreview}>Preview</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'results' && (
                            <div style={styles.resultsTable}>
                                <div style={styles.tableHeader}>
                                    <div>Assessment</div>
                                    <div>Date</div>
                                    <div>Score</div>
                                    <div>Status</div>
                                </div>
                                {results.map(res => (
                                    <div key={res.id} style={styles.tableRow}>
                                        <div><strong>{res.name}</strong></div>
                                        <div>{res.date}</div>
                                        <div><span style={{...styles.scoreBadge, backgroundColor: res.score >= 80 ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)', color: res.score >= 80 ? '#10b981' : '#f59e0b'}}>{res.score}%</span></div>
                                        <div style={{ color: '#10b981' }}>✔ {res.status}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Quiz Modal */}
            {quizModal.open && (
                <div style={styles.modal} onClick={() => setQuizModal({ open: false, quiz: null })}>
                    <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div style={styles.modalHeader}>
                            <h3>{quizModal.quiz.title}</h3>
                            <button onClick={() => setQuizModal({ open: false, quiz: null })} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '24px' }}>&times;</button>
                        </div>
                        <div style={{ padding: '40px', textAlign: 'center' }}>
                            {currentStep === 1 ? (
                                <div>
                                    <h4 style={{ fontSize: '24px', marginBottom: '30px' }}>{quizModal.quiz.questions[0].q}</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        {quizModal.quiz.questions[0].options.map((opt, i) => (
                                            <button 
                                                key={i} 
                                                onClick={() => handleAnswer(i === quizModal.quiz.questions[0].correct)}
                                                style={styles.optionBtn}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h4 style={{ fontSize: '32px', color: '#10b981', marginBottom: '20px' }}>Quiz Completed!</h4>
                                    <p style={{ fontSize: '20px', marginBottom: '30px' }}>You scored {score}/{quizModal.quiz.questions.length}</p>
                                    <button onClick={() => setQuizModal({ open: false, quiz: null })} style={styles.btnStart}>Finish</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    card: {
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    },
    progressCard: {
        backgroundColor: '#f0f7ff',
        borderRadius: '15px',
        padding: '20px',
        textAlign: 'center'
    },
    progressCircle: {
        width: '120px',
        height: '120px',
        margin: '0 auto',
        borderRadius: '50%',
        border: '12px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: '#26d0ce'
    },
    statItem: {
        textAlign: 'center',
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        fontSize: '14px',
        color: '#718096'
    },
    tabs: {
        display: 'flex',
        gap: '10px',
        marginBottom: '30px',
        borderBottom: '2px solid #e2e8f0'
    },
    tabBtn: {
        padding: '12px 25px',
        border: 'none',
        borderRadius: '8px 8px 0 0',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s'
    },
    quizCard: {
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        borderTop: '5px solid #26d0ce'
    },
    categoryTag: {
        backgroundColor: 'rgba(38, 208, 206, 0.1)',
        color: '#26d0ce',
        padding: '5px 15px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: '600'
    },
    btnStart: {
        backgroundColor: '#1a2980',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        border: 'none',
        fontWeight: '600',
        flex: 1,
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none'
    },
    btnPreview: {
        backgroundColor: 'transparent',
        color: '#1a2980',
        padding: '12px 20px',
        borderRadius: '8px',
        fontWeight: '600',
        border: '2px solid #1a2980',
        flex: 1,
        cursor: 'pointer'
    },
    resultsTable: {
        backgroundColor: 'white',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
    },
    tableHeader: {
        backgroundColor: '#1a2980',
        color: 'white',
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        fontWeight: 600
    },
    tableRow: {
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        borderBottom: '1px solid #e2e8f0',
        alignItems: 'center'
    },
    scoreBadge: {
        padding: '5px 15px',
        borderRadius: '20px',
        fontWeight: 600
    },
    modal: {
        position: 'fixed',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.9)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        width: '90%',
        maxWidth: '600px',
        backgroundColor: 'white',
        borderRadius: '15px',
        overflow: 'hidden'
    },
    modalHeader: {
        padding: '20px',
        background: '#1a2980',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    optionBtn: {
        padding: '15px',
        backgroundColor: '#f8fafc',
        border: '2px solid #e2e8f0',
        borderRadius: '10px',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        textAlign: 'center'
    }
};

export default Assessment;
