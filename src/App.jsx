import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Learning from './pages/Learning';
import Assessment from './pages/Assessment';
import Quiz from './pages/Quiz';
import BeginnerPath from './pages/BeginnerPath';
import IntermediatePath from './pages/IntermediatePath';
import ExpertPath from './pages/ExpertPath';
import CourseDetail from './pages/CourseDetail';

const Navbar = () => {
    const { user, logout } = useAuth();
    const location = useLocation();

    // Hide navbar on login and register pages
    if (location.pathname === '/login' || location.pathname === '/register') {
        return null;
    }

    return (
        <header className="header" id="header">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <i className="fas fa-globe-asia"></i>
                    <span>SA.C | South Asia Connect</span>
                </Link>
                
                <nav className="nav-links">
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/courses" className={location.pathname === '/courses' ? 'active' : ''}>Courses</Link>
                    <Link to="/learning" className={location.pathname === '/learning' ? 'active' : ''}>Interactive Learning</Link>
                    <Link to="/assessment" className={location.pathname === '/assessment' ? 'active' : ''}>Assessment</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                </nav>

                <div className="nav-actions">
                    {user ? (
                        <Link to="/dashboard" className="login-btn">
                            <i className="fas fa-user"></i> {user.firstName}'s Dashboard
                        </Link>
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div className="user-count" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <i className="fas fa-users"></i>
                                <span>20.6k Learners Online</span>
                            </div>
                            <Link to="/login" className="login-btn">
                                <i className="fas fa-sign-in-alt"></i> Login / Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

const Footer = () => {
    const location = useLocation();
    
    // Hide footer on login/register
    if (location.pathname === '/login' || location.pathname === '/register') {
      return null;
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="logo" style={{ marginBottom: '20px', color: 'white' }}>
                            <i className="fas fa-globe-asia"></i>
                            <span>SA.C Connect</span>
                        </div>
                        <p style={{ color: '#a0aec0', lineHeight: '1.6' }}>
                            The premier platform for South Asian geography, history, and cultural education.
                        </p>
                        <div style={{ marginTop: '20px' }}>
                            <a href="#" style={{ color: 'white', marginRight: '15px', fontSize: '20px' }}><i className="fab fa-facebook"></i></a>
                            <a href="#" style={{ color: 'white', marginRight: '15px', fontSize: '20px' }}><i className="fab fa-twitter"></i></a>
                            <a href="#" style={{ color: 'white', marginRight: '15px', fontSize: '20px' }}><i className="fab fa-youtube"></i></a>
                            <a href="#" style={{ color: 'white', fontSize: '20px' }}><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="footer-links" style={{ listStyle: 'none' }}>
                            <li><Link to="/" style={{ color: '#a0aec0', textDecoration: 'none' }}>Home</Link></li>
                            <li><Link to="/courses" style={{ color: '#a0aec0', textDecoration: 'none' }}>Courses</Link></li>
                            <li><Link to="/learning" style={{ color: '#a0aec0', textDecoration: 'none' }}>Learning</Link></li>
                            <li><Link to="/assessment" style={{ color: '#a0aec0', textDecoration: 'none' }}>Assessment</Link></li>
                            <li><Link to="/contact" style={{ color: '#a0aec0', textDecoration: 'none' }}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Resources</h3>
                        <ul className="footer-links" style={{ listStyle: 'none' }}>
                            <li><Link to="/" style={{ color: '#a0aec0', textDecoration: 'none' }}>Privacy Policy</Link></li>
                            <li><Link to="/" style={{ color: '#a0aec0', textDecoration: 'none' }}>Terms of Service</Link></li>
                            <li><Link to="/" style={{ color: '#a0aec0', textDecoration: 'none' }}>Cookie Policy</Link></li>
                            <li><Link to="/" style={{ color: '#a0aec0', textDecoration: 'none' }}>Refund Policy</Link></li>
                            <li><Link to="/" style={{ color: '#a0aec0', textDecoration: 'none' }}>Help Center</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Contact</h3>
                        <ul className="footer-links" style={{ listStyle: 'none' }}>
                            <li><Link to="/contact" style={{ color: '#a0aec0', textDecoration: 'none' }}><i className="fas fa-envelope"></i> Email Support</Link></li>
                            <li><Link to="/contact" style={{ color: '#a0aec0', textDecoration: 'none' }}><i className="fas fa-phone"></i> Contact Sales</Link></li>
                            <li><Link to="/contact" style={{ color: '#a0aec0', textDecoration: 'none' }}><i className="fas fa-map-marker-alt"></i> Location</Link></li>
                            <li><Link to="/contact" style={{ color: '#a0aec0', textDecoration: 'none' }}><i className="fas fa-question-circle"></i> FAQ</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2024 South Asia Connect. All rights reserved. | Designed for educational purposes</p>
                </div>
            </div>
        </footer>
    );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/beginner-path" element={<BeginnerPath />} />
              <Route path="/intermediate-path" element={<IntermediatePath />} />
              <Route path="/expert-path" element={<ExpertPath />} />
              <Route path="/course/:id" element={<CourseDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
