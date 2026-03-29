import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState({ type: '', text: '' });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });

        try {
            login(email, password);
            setMessage({ type: 'success', text: 'Login successful! Redirecting...' });
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (err) {
            setMessage({ type: 'error', text: err.message });
        }
    };

    return (
        <div style={styles.body}>
            <div style={styles.loginContainer}>
                <div style={styles.loginHeader}>
                    <h1><i className="fas fa-globe-asia"></i> SA.C</h1>
                    <p style={styles.loginHeaderP}>Welcome back! Login to continue learning</p>
                </div>
                
                <div style={styles.loginForm}>
                    {message.text && (
                        <div style={{...styles.message, ...(message.type === 'success' ? styles.messageSuccess : styles.messageError)}}>
                            {message.text}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit}>
                        <div style={styles.formGroup}>
                            <label style={styles.label} htmlFor="email">Email Address</label>
                            <div style={styles.inputWithIcon}>
                                <i className="fas fa-envelope" style={styles.icon}></i>
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="Enter your email" 
                                    style={styles.input}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>
                        
                        <div style={styles.formGroup}>
                            <label style={styles.label} htmlFor="password">Password</label>
                            <div style={styles.inputWithIcon}>
                                <i className="fas fa-lock" style={styles.icon}></i>
                                <input 
                                    type="password" 
                                    id="password" 
                                    placeholder="Enter your password" 
                                    style={styles.input}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>
                        
                        <div style={styles.formOptions}>
                            <div style={styles.rememberMe}>
                                <input type="checkbox" id="remember" style={styles.checkbox} />
                                <label htmlFor="remember" style={{...styles.label, marginBottom: 0}}>Remember me</label>
                            </div>
                            <a href="#" style={styles.forgotPassword}>Forgot Password?</a>
                        </div>
                        
                        <button type="submit" style={styles.loginButton}>
                            <i className="fas fa-sign-in-alt"></i> Login
                        </button>
                        
                        <div style={styles.divider}>
                            <span style={styles.dividerSpan}>Or continue with</span>
                        </div>
                        
                        <div style={styles.socialLogin}>
                            <button type="button" style={{...styles.socialButton, ...styles.google}}>
                                <i className="fab fa-google"></i> Sign in with Google
                            </button>
                            <button type="button" style={{...styles.socialButton, ...styles.facebook}}>
                                <i className="fab fa-facebook-f"></i> Sign in with Facebook
                            </button>
                        </div>
                        
                        <div style={styles.registerLink}>
                            Don't have an account? <Link to="/register" style={{color: '#1a2980', fontWeight: 600}}>Register here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const styles = {
    body: {
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1523480717984-24cba35ae1eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: "'Poppins', sans-serif",
    },
    loginContainer: {
        width: '100%',
        maxWidth: '450px',
        backgroundColor: 'white',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    },
    loginHeader: {
        background: 'linear-gradient(135deg, #1a2980, #3a4dcc)',
        color: 'white',
        padding: '40px',
        textAlign: 'center',
    },
    loginHeaderP: {
        opacity: 0.9,
        fontSize: '1rem',
        marginTop: '10px'
    },
    loginForm: {
        padding: '40px',
    },
    formGroup: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: '600',
        color: '#2d3748',
    },
    inputWithIcon: {
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        left: '15px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#718096',
    },
    input: {
        width: '100%',
        padding: '12px 15px 12px 45px',
        border: '2px solid #e2e8f0',
        borderRadius: '8px',
        fontSize: '1rem',
    },
    formOptions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '25px',
    },
    rememberMe: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    checkbox: {
        width: 'auto',
    },
    forgotPassword: {
        color: '#1a2980',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '500',
    },
    loginButton: {
        width: '100%',
        padding: '15px',
        background: 'linear-gradient(135deg, #1a2980, #3a4dcc)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: '600',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        transition: 'all 0.3s',
    },
    divider: {
        textAlign: 'center',
        margin: '25px 0',
        position: 'relative',
    },
    dividerSpan: {
        backgroundColor: 'white',
        padding: '0 15px',
        color: '#718096',
        fontSize: '0.9rem',
        position: 'relative',
        zIndex: 1,
    },
    socialLogin: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginBottom: '25px',
    },
    socialButton: {
        width: '100%',
        padding: '12px',
        border: '2px solid #e2e8f0',
        borderRadius: '8px',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s',
    },
    google: {
        color: '#DB4437',
    },
    facebook: {
        color: '#4267B2',
    },
    registerLink: {
        textAlign: 'center',
        color: '#718096',
        fontSize: '0.95rem',
    },
    message: {
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '20px',
        textAlign: 'center',
    },
    messageSuccess: {
        backgroundColor: 'rgba(38, 208, 206, 0.1)',
        borderLeft: '4px solid #26d0ce',
        color: '#26d0ce',
    },
    messageError: {
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        borderLeft: '4px solid #ff6b6b',
        color: '#ff6b6b',
    }
};

export default Login;
