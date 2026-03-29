import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: ''
    });
    const [message, setMessage] = useState({ type: '', text: '' });
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });

        // Validate
        if (formData.firstName.length < 2) {
            setMessage({ type: 'error', text: 'First name must be at least 2 characters' });
            return;
        }
        
        if (formData.lastName.length < 2) {
            setMessage({ type: 'error', text: 'Last name must be at least 2 characters' });
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setMessage({ type: 'error', text: 'Please enter a valid email address' });
            return;
        }
        
        if (formData.password.length < 6) {
            setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
            return;
        }
        
        if (formData.password !== formData.confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match' });
            return;
        }
        
        if (!formData.country) {
            setMessage({ type: 'error', text: 'Please select your country' });
            return;
        }

        try {
            register(formData);
            setMessage({ type: 'success', text: 'Registration successful! Redirecting to login...' });
            setTimeout(() => {
                navigate('/login');
            }, 1500);
        } catch (err) {
            setMessage({ type: 'error', text: err.message });
        }
    };

    return (
        <div style={styles.body}>
            <div style={styles.registerContainer}>
                <div style={styles.registerHeader}>
                    <h1 style={styles.registerHeaderH1}><i className="fas fa-user-plus"></i> Create Account</h1>
                    <p style={styles.registerHeaderP}>Join SA.C to explore South Asian geography and culture</p>
                </div>
                
                <div style={styles.registerForm}>
                    {message.text && (
                        <div style={{...styles.message, ...(message.type === 'success' ? styles.messageSuccess : styles.messageError)}}>
                            {message.text}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit}>
                        <div style={styles.nameRow}>
                            <div style={styles.formGroup}>
                                <label style={styles.label} htmlFor="firstName">First Name</label>
                                <div style={styles.inputWithIcon}>
                                    <i className="fas fa-user" style={styles.icon}></i>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        placeholder="John" 
                                        style={styles.input}
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                            </div>
                            
                            <div style={styles.formGroup}>
                                <label style={styles.label} htmlFor="lastName">Last Name</label>
                                <div style={styles.inputWithIcon}>
                                    <i className="fas fa-user" style={styles.icon}></i>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        placeholder="Doe" 
                                        style={styles.input}
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div style={styles.formGroup}>
                            <label style={styles.label} htmlFor="email">Email Address</label>
                            <div style={styles.inputWithIcon}>
                                <i className="fas fa-envelope" style={styles.icon}></i>
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="john@example.com" 
                                    style={styles.input}
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    placeholder="Create a password" 
                                    style={styles.input}
                                    value={formData.password}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        </div>
                        
                        <div style={styles.formGroup}>
                            <label style={styles.label} htmlFor="confirmPassword">Confirm Password</label>
                            <div style={styles.inputWithIcon}>
                                <i className="fas fa-lock" style={styles.icon}></i>
                                <input 
                                    type="password" 
                                    id="confirmPassword" 
                                    placeholder="Confirm your password" 
                                    style={styles.input}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                        </div>
                        
                        <div style={styles.formGroup}>
                            <label style={styles.label} htmlFor="country">Country</label>
                            <div style={styles.inputWithIcon}>
                                <i className="fas fa-globe" style={styles.icon}></i>
                                <select 
                                    id="country" 
                                    style={styles.select}
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select your country</option>
                                    <option value="India">India</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Nepal">Nepal</option>
                                </select>
                            </div>
                        </div>
                        
                        <button type="submit" style={styles.registerButton}>
                            <i className="fas fa-user-plus"></i> Create Account
                        </button>
                        
                        <div style={styles.loginLink}>
                            Already have an account? <Link to="/login" style={{color: '#1a2980', fontWeight: 600}}>Sign in here</Link>
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
    registerContainer: {
        width: '100%',
        maxWidth: '550px',
        backgroundColor: 'white',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    },
    registerHeader: {
        background: 'linear-gradient(135deg, #1a2980, #3a4dcc)',
        color: 'white',
        padding: '40px',
        textAlign: 'center',
    },
    registerHeaderH1: {
        fontSize: '2.5rem',
        marginBottom: '10px',
    },
    registerHeaderP: {
        opacity: 0.9,
    },
    registerForm: {
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
    select: {
        width: '100%',
        padding: '12px 15px 12px 45px',
        border: '2px solid #e2e8f0',
        borderRadius: '8px',
        fontSize: '1rem',
        backgroundColor: 'white',
    },
    nameRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '15px',
    },
    registerButton: {
        width: '100%',
        padding: '15px',
        background: 'linear-gradient(135deg, #1a2980, #3a4dcc)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '20px',
        transition: 'all 0.3s',
    },
    loginLink: {
        textAlign: 'center',
        marginTop: '25px',
        color: '#718096',
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

export default Register;
