// Common JavaScript functionality for South Asia Connect

document.addEventListener('DOMContentLoaded', function() {

    // ==================== SMOOTH SCROLLING ====================
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

        });

    });

});
    // ==================== MOBILE MENU TOGGLE ====================
    // Create mobile menu toggle if not exists
    const header = document.querySelector('.header');
    if (header && !document.querySelector('.mobile-menu-toggle')) {
        const navContainer = header.querySelector('.nav-container');
        if (navContainer) {
            // Create hamburger button
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'mobile-menu-toggle';
            toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
            toggleBtn.style.cssText = `
                display: none;
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                padding: 10px;
                margin-left: auto;
            `;

            // Insert before nav-links
            const navLinks = navContainer.querySelector('.nav-links');
            if (navLinks) {
                navContainer.insertBefore(toggleBtn, navLinks);

                // Add mobile menu styles
                const mobileStyles = document.createElement('style');
                mobileStyles.textContent = `
                    @media (max-width: 768px) {
                        .mobile-menu-toggle { display: block !important; }
                        .nav-links {
                            position: fixed;
                            top: 100%;
                            left: -100%;
                            width: 100%;
                            height: calc(100vh - 80px);
                            background: linear-gradient(135deg, var(--primary, #1a2980), #3a4dcc);
                            flex-direction: column;
                            justify-content: flex-start;
                            align-items: center;
                            padding-top: 50px;
                            transition: left 0.3s ease;
                            z-index: 1000;
                        }
                        .nav-links.active { left: 0; }
                        .nav-links a {
                            margin: 20px 0;
                            font-size: 18px;
                            padding: 15px 30px;
                            width: 200px;
                            text-align: center;
                        }
                        .nav-actions {
                            position: absolute;
                            bottom: 50px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                    }
                `;
                document.head.appendChild(mobileStyles);

                // Toggle menu
                toggleBtn.addEventListener('click', function() {
                    navLinks.classList.toggle('active');
                    this.innerHTML = navLinks.classList.contains('active') ?
                        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
                });

                // Close menu when clicking a link
                navLinks.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        navLinks.classList.remove('active');
                        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    });
                });
            }
        }
    }

    // ==================== DARK MODE TOGGLE ====================
    // Create dark mode toggle button
    if (!document.querySelector('.dark-mode-toggle')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'dark-mode-toggle';
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        toggleBtn.title = 'Toggle Dark Mode';
        toggleBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary, #1a2980);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            transition: all 0.3s ease;
        `;

        document.body.appendChild(toggleBtn);

        // Dark mode styles
        const darkModeStyles = document.createElement('style');
        darkModeStyles.textContent = `
            body.dark-mode {
                background-color: #1a1a1a;
                color: #e0e0e0;
            }
            body.dark-mode .header {
                background: linear-gradient(135deg, #2d3748, #4a5568);
            }
            body.dark-mode .section {
                background-color: #2d3748;
            }
            body.dark-mode .course-card,
            body.dark-mode .assessment-card,
            body.dark-mode .faq-item,
            body.dark-mode .culture-card {
                background-color: #4a5568;
                color: #e0e0e0;
                border-color: #718096;
            }
            body.dark-mode .btn-primary,
            body.dark-mode .login-btn {
                background-color: #63b3ed;
                color: #1a202c;
            }
            body.dark-mode .btn-secondary {
                background-color: transparent;
                color: #63b3ed;
                border-color: #63b3ed;
            }
            body.dark-mode .hero {
                background: linear-gradient(rgba(45, 55, 72, 0.9), rgba(74, 85, 104, 0.8));
            }
        `;
        document.head.appendChild(darkModeStyles);

        // Load saved theme
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }

        // Toggle dark mode
        toggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
            this.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }

    // ==================== ENHANCED FORM VALIDATION ====================
    // Enhanced contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            let isValid = true;
            let errors = [];

            // Name validation
            if (!name) {
                errors.push('Name is required');
                isValid = false;
            } else if (name.length < 2) {
                errors.push('Name must be at least 2 characters');
                isValid = false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                errors.push('Email is required');
                isValid = false;
            } else if (!emailRegex.test(email)) {
                errors.push('Please enter a valid email address');
                isValid = false;
            }

            // Subject validation
            if (!subject) {
                errors.push('Subject is required');
                isValid = false;
            }

            // Message validation
            if (!message) {
                errors.push('Message is required');
                isValid = false;
            } else if (message.length < 10) {
                errors.push('Message must be at least 10 characters');
                isValid = false;
            }

            if (!isValid) {
                showNotification('Please fix the following errors:\n' + errors.join('\n'), 'error');
                return;
            }

            // Show success message
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');

            // Reset form
            contactForm.reset();
        });
    }

    // ==================== NOTIFICATION SYSTEM ====================
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 9999;
            max-width: 300px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // Add notification animations
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(notificationStyles);

    // ==================== SEARCH FUNCTIONALITY ====================
    // Add search to courses page
    if (window.location.pathname.includes('courses.html')) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <input type="text" id="courseSearch" placeholder="Search courses..." style="
                width: 100%;
                max-width: 400px;
                padding: 12px 20px;
                border: 2px solid #e2e8f0;
                border-radius: 25px;
                font-size: 16px;
                margin: 20px auto;
                display: block;
                outline: none;
                transition: border-color 0.3s;
            ">
        `;

        const categories = document.querySelector('.categories');
        if (categories) {
            categories.parentNode.insertBefore(searchContainer, categories);

            const searchInput = document.getElementById('courseSearch');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const courseCards = document.querySelectorAll('.course-card');

                courseCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const description = card.querySelector('p').textContent.toLowerCase();
                    const category = card.dataset.category ? card.dataset.category.toLowerCase() : '';

                    if (title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }
    }

    // ==================== LOADING ANIMATIONS ====================
    // Add fade-in animation to sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // ==================== ACCESSIBILITY IMPROVEMENTS ====================
    // Add keyboard navigation for mobile menu
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    // Add ARIA labels where needed
    document.querySelectorAll('.course-card').forEach(card => {
        if (!card.getAttribute('aria-label')) {
            const title = card.querySelector('h3').textContent;
            card.setAttribute('aria-label', `Course: ${title}`);
        }
    });

    // Make buttons keyboard accessible
    document.querySelectorAll('button, [role="button"]').forEach(btn => {
        if (!btn.getAttribute('tabindex')) {
            btn.setAttribute('tabindex', '0');
        }
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Add skip links for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute; top: -40px; left: 6px; background: var(--primary, #1a2980);
        color: white; padding: 8px; text-decoration: none; z-index: 1000;
        border-radius: 4px; font-weight: bold;
    `;
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content landmark
    const mainContent = document.querySelector('main') || document.querySelector('.container');
    if (mainContent && !mainContent.getAttribute('role')) {
        mainContent.setAttribute('role', 'main');
        mainContent.id = 'main-content';
    }

    // Improve form accessibility
    document.querySelectorAll('input, textarea, select').forEach(field => {
        const label = document.querySelector(`label[for="${field.id}"]`);
        if (label && !field.getAttribute('aria-labelledby')) {
            field.setAttribute('aria-labelledby', label.id || field.id + '-label');
            if (!label.id) label.id = field.id + '-label';
        }

        // Add error message containers
        if (!field.nextElementSibling?.classList.contains('error-message')) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.setAttribute('aria-live', 'polite');
            errorDiv.style.cssText = 'color: #e53e3e; font-size: 14px; margin-top: 5px; display: none;';
            field.parentNode.insertBefore(errorDiv, field.nextSibling);
        }
    });

    // ==================== VIDEO PLAYER FUNCTIONALITY ====================
    // Create video modal and player
    if (!document.getElementById('videoModal')) {
        const videoModal = document.createElement('div');
        videoModal.id = 'videoModal';
        videoModal.className = 'modal';
        videoModal.setAttribute('role', 'dialog');
        videoModal.setAttribute('aria-labelledby', 'videoModalTitle');
        videoModal.setAttribute('aria-hidden', 'true');
        videoModal.innerHTML = `
            <div class="modal-content video-modal-content">
                <div class="modal-header">
                    <h3 id="videoModalTitle">Video Player</h3>
                    <button class="modal-close" aria-label="Close video player">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="video-container">
                        <video id="mainVideoPlayer" controls preload="metadata" style="
                            width: 100%; height: auto; border-radius: 8px;
                        ">
                            <p>Your browser does not support HTML5 video. Here is a <a href="#" id="videoFallbackLink">link to the video</a> instead.</p>
                        </video>
                        <div class="video-controls-custom" style="margin-top: 15px; display: flex; gap: 10px; justify-content: center;">
                            <button id="videoPlayPause" class="video-btn" aria-label="Play/Pause">
                                <i class="fas fa-play"></i>
                            </button>
                            <button id="videoMute" class="video-btn" aria-label="Mute/Unmute">
                                <i class="fas fa-volume-up"></i>
                            </button>
                            <button id="videoFullscreen" class="video-btn" aria-label="Fullscreen">
                                <i class="fas fa-expand"></i>
                            </button>
                        </div>
                    </div>
                    <div class="video-info" style="margin-top: 20px;">
                        <h4 id="videoTitle" style="color: var(--primary); margin-bottom: 10px;"></h4>
                        <p id="videoDescription"></p>
                        <div class="video-meta" id="videoMeta" style="margin-top: 15px; color: var(--gray); font-size: 14px;"></div>
                    </div>
                </div>
            </div>
        `;
        videoModal.style.cssText = `
            display: none; position: fixed; z-index: 10000; left: 0; top: 0;
            width: 100%; height: 100%; background-color: rgba(0,0,0,0.9);
            animation: fadeIn 0.3s;
        `;
        document.body.appendChild(videoModal);

        // Video modal styles
        const videoStyles = document.createElement('style');
        videoStyles.textContent = `
            .video-modal-content {
                background-color: white; margin: 5% auto; padding: 0;
                border-radius: 8px; width: 90%; max-width: 800px; max-height: 90vh;
                overflow-y: auto; position: relative;
            }
            .modal-header {
                display: flex; justify-content: space-between; align-items: center;
                padding: 20px; border-bottom: 1px solid #e2e8f0;
            }
            .modal-close {
                background: none; border: none; font-size: 24px; cursor: pointer;
                color: var(--gray); padding: 5px;
            }
            .modal-body { padding: 20px; }
            .video-btn {
                background: var(--primary); color: white; border: none;
                padding: 10px 15px; border-radius: 5px; cursor: pointer;
                transition: background 0.3s;
            }
            .video-btn:hover { background: #15246d; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        `;
        document.head.appendChild(videoStyles);

        // Video functionality
        const videoPlayer = document.getElementById('mainVideoPlayer');
        const videoModalEl = document.getElementById('videoModal');
        const videoTitle = document.getElementById('videoTitle');
        const videoDescription = document.getElementById('videoDescription');
        const videoMeta = document.getElementById('videoMeta');

        // Sample video data (in real implementation, this would come from a database)
        const videoData = {
            1: {
                title: "Introduction to South Asian Geography",
                description: "Learn about the physical features, climate zones, and natural resources of South Asia.",
                duration: "24:15",
                instructor: "Dr. Anjali Sharma",
                src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" // Placeholder
            },
            2: {
                title: "Indus Valley Civilization Explained",
                description: "Explore one of the world's oldest urban civilizations with detailed archaeological findings.",
                duration: "31:42",
                instructor: "Prof. Rajiv Mehta",
                src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4" // Placeholder
            },
            3: {
                title: "Cultural Festivals of South Asia",
                description: "From Diwali to Eid, explore the vibrant festivals across the region.",
                duration: "28:10",
                instructor: "Dr. Priya Patel",
                src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" // Placeholder
            },
            4: {
                title: "Monsoon Systems Explained",
                description: "Understanding the monsoon patterns that shape South Asian climate and agriculture.",
                duration: "22:35",
                instructor: "Dr. Sanjay Kumar",
                src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4" // Placeholder
            }
        };

        // Video play buttons - only add listeners if video cards exist
        const videoCards = document.querySelectorAll('.video-card');
        if (videoCards.length > 0) {
            videoCards.forEach(card => {
                const playBtn = card.querySelector('.play-btn');
                if (playBtn) {
                    playBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const videoId = card.getAttribute('data-video');
                        const video = videoData[videoId];

                        if (video) {
                            videoTitle.textContent = video.title;
                            videoDescription.textContent = video.description;
                            videoMeta.innerHTML = `
                                <span><i class="far fa-clock"></i> ${video.duration}</span>
                                <span><i class="fas fa-user"></i> ${video.instructor}</span>
                            `;

                            // Set video source
                            videoPlayer.src = video.src;
                            videoPlayer.load();

                            // Show modal
                            videoModalEl.style.display = 'block';
                            videoModalEl.setAttribute('aria-hidden', 'false');
                            document.body.style.overflow = 'hidden';

                            // Focus management
                            videoPlayer.focus();
                        }
                    });

                    // Keyboard accessibility
                    playBtn.addEventListener('keydown', function(e) {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            this.click();
                        }
                    });
                }
            });
        }

        // Modal close functionality
        document.querySelector('.modal-close').addEventListener('click', closeVideoModal);
        videoModalEl.addEventListener('click', function(e) {
            if (e.target === videoModalEl) closeVideoModal();
        });

        function closeVideoModal() {
            videoModalEl.style.display = 'none';
            videoModalEl.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
            videoPlayer.pause();
        }

        // Custom video controls
        document.getElementById('videoPlayPause').addEventListener('click', function() {
            if (videoPlayer.paused) {
                videoPlayer.play();
                this.innerHTML = '<i class="fas fa-pause"></i>';
                this.setAttribute('aria-label', 'Pause');
            } else {
                videoPlayer.pause();
                this.innerHTML = '<i class="fas fa-play"></i>';
                this.setAttribute('aria-label', 'Play');
            }
        });

        document.getElementById('videoMute').addEventListener('click', function() {
            videoPlayer.muted = !videoPlayer.muted;
            this.innerHTML = videoPlayer.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
            this.setAttribute('aria-label', videoPlayer.muted ? 'Unmute' : 'Mute');
        });

        document.getElementById('videoFullscreen').addEventListener('click', function() {
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (videoModalEl.style.display === 'block') {
                switch(e.key) {
                    case ' ':
                    case 'k':
                        e.preventDefault();
                        document.getElementById('videoPlayPause').click();
                        break;
                    case 'm':
                        e.preventDefault();
                        document.getElementById('videoMute').click();
                        break;
                    case 'f':
                        e.preventDefault();
                        document.getElementById('videoFullscreen').click();
                        break;
                    case 'Escape':
                        closeVideoModal();
                        break;
                }
            }
        });
    }

    // ==================== QUIZ FUNCTIONALITY ====================
    // Enhanced quiz system
    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let quizScore = 0;
    let userAnswers = [];

    const quizData = {
        capitals: {
            title: "Countries & Capitals Quiz",
            questions: [
                {
                    question: "What is the capital of India?",
                    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
                    correct: 1,
                    explanation: "New Delhi is the capital of India, though Mumbai is the financial capital."
                },
                {
                    question: "What is the capital of Pakistan?",
                    options: ["Karachi", "Lahore", "Islamabad", "Rawalpindi"],
                    correct: 2,
                    explanation: "Islamabad is the capital city of Pakistan, built in the 1960s."
                },
                {
                    question: "What is the capital of Bangladesh?",
                    options: ["Chittagong", "Dhaka", "Khulna", "Rajshahi"],
                    correct: 1,
                    explanation: "Dhaka is the capital and largest city of Bangladesh."
                },
                {
                    question: "What is the capital of Sri Lanka?",
                    options: ["Colombo", "Kandy", "Galle", "Sri Jayawardenepura Kotte"],
                    correct: 3,
                    explanation: "Sri Jayawardenepura Kotte is the official capital, though Colombo is the executive capital."
                }
            ]
        },
        timeline: {
            title: "Historical Timeline Quiz",
            questions: [
                {
                    question: "In which year did India gain independence from British rule?",
                    options: ["1945", "1947", "1950", "1952"],
                    correct: 1,
                    explanation: "India gained independence on August 15, 1947."
                },
                {
                    question: "When was the Indus Valley Civilization at its peak?",
                    options: ["5000 BCE", "2500 BCE", "1000 BCE", "500 BCE"],
                    correct: 1,
                    explanation: "The Indus Valley Civilization flourished around 2500 BCE."
                }
            ]
        },
        culture: {
            title: "Cultural Knowledge Quiz",
            questions: [
                {
                    question: "Which festival is known as the 'Festival of Lights'?",
                    options: ["Holi", "Diwali", "Eid", "Christmas"],
                    correct: 1,
                    explanation: "Diwali, also known as Deepavali, is the Hindu festival of lights."
                },
                {
                    question: "What is the national sport of Pakistan?",
                    options: ["Cricket", "Hockey", "Football", "Kabaddi"],
                    correct: 1,
                    explanation: "Cricket is the most popular sport in Pakistan and is considered the national sport."
                }
            ]
        },
        features: {
            title: "Physical Features Quiz",
            questions: [
                {
                    question: "Which is the highest mountain in South Asia?",
                    options: ["K2", "Kangchenjunga", "Mount Everest", "Nanga Parbat"],
                    correct: 2,
                    explanation: "Mount Everest, located in Nepal, is the highest mountain in South Asia at 8,848 meters."
                },
                {
                    question: "Which river is known as the 'Ganges of the South'?",
                    options: ["Godavari", "Krishna", "Cauvery", "Narmada"],
                    correct: 2,
                    explanation: "The Cauvery River is often called the 'Ganges of the South' due to its importance in South Indian culture."
                }
            ]
        }
    };

    // Quiz start buttons - only add listeners if buttons exist
    const quizButtons = document.querySelectorAll('.btn-start[data-quiz]');
    if (quizButtons.length > 0) {
        quizButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const quizId = this.getAttribute('data-quiz');
                startQuiz(quizId);
            });
        });
    }

    function startQuiz(quizId) {
        currentQuiz = quizData[quizId];
        currentQuestionIndex = 0;
        quizScore = 0;
        userAnswers = [];

        if (!currentQuiz) {
            showNotification('Quiz not found!', 'error');
            return;
        }

        // Check if quiz interface exists, create it if not
        let quizInterface = document.getElementById('quizInterface');
        if (!quizInterface) {
            quizInterface = document.createElement('div');
            quizInterface.id = 'quizInterface';
            quizInterface.innerHTML = `
                <div class="quiz-container" style="
                    max-width: 800px; margin: 40px auto; padding: 30px;
                    background: white; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                ">
                    <h2 id="quizTitle" style="text-align: center; color: var(--primary); margin-bottom: 30px;"></h2>
                    <div id="quizQuestion" style="font-size: 20px; margin-bottom: 25px; text-align: center;"></div>
                    <div id="quizOptions" style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 30px;"></div>
                    <div class="quiz-navigation" style="display: flex; justify-content: space-between; align-items: center;">
                        <button id="prevQuestion" class="btn-secondary" style="padding: 10px 20px;">Previous</button>
                        <div class="quiz-progress" style="font-size: 16px;">
                            Question <span id="currentQuestionNum">1</span> of <span id="totalQuestions">0</span>
                        </div>
                        <button id="nextQuestion" class="btn-primary" style="padding: 10px 20px;">Next</button>
                    </div>
                </div>
            `;
            document.body.appendChild(quizInterface);
        }

        // Show quiz interface
        quizInterface.style.display = 'block';
        quizInterface.scrollIntoView({ behavior: 'smooth' });

        // Initialize first question
        showQuestion();

        // Update quiz title
        const quizTitle = document.getElementById('quizTitle');
        if (quizTitle) quizTitle.textContent = currentQuiz.title;
    }

    function showQuestion() {
        const question = currentQuiz.questions[currentQuestionIndex];
        const quizQuestion = document.getElementById('quizQuestion');
        const quizOptions = document.getElementById('quizOptions');

        if (quizQuestion && quizOptions) {
            quizQuestion.textContent = question.question;

            quizOptions.innerHTML = '';
            question.options.forEach((option, index) => {
                const optionBtn = document.createElement('button');
                optionBtn.className = 'quiz-option';
                optionBtn.textContent = option;
                optionBtn.setAttribute('data-index', index);
                optionBtn.setAttribute('aria-label', `Option ${index + 1}: ${option}`);
                optionBtn.addEventListener('click', () => selectAnswer(index));
                quizOptions.appendChild(optionBtn);
            });
        }

        // Update progress
        const currentQuestionNum = document.getElementById('currentQuestionNum');
        const totalQuestions = document.getElementById('totalQuestions');
        if (currentQuestionNum) currentQuestionNum.textContent = currentQuestionIndex + 1;
        if (totalQuestions) totalQuestions.textContent = currentQuiz.questions.length;

        // Update navigation buttons
        updateQuizNavigation();
    }

    function selectAnswer(selectedIndex) {
        const question = currentQuiz.questions[currentQuestionIndex];
        userAnswers[currentQuestionIndex] = selectedIndex;

        // Highlight correct/incorrect answers
        const optionBtns = document.querySelectorAll('.quiz-option');
        optionBtns.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) {
                btn.classList.add('correct');
                btn.setAttribute('aria-label', btn.getAttribute('aria-label') + ' (Correct answer)');
            } else if (index === selectedIndex) {
                btn.classList.add('incorrect');
                btn.setAttribute('aria-label', btn.getAttribute('aria-label') + ' (Your answer - Incorrect)');
            }
        });

        if (selectedIndex === question.correct) {
            quizScore++;
        }

        // Show explanation
        setTimeout(() => {
            showExplanation(question.explanation);
        }, 1000);
    }

    function showExplanation(explanation) {
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'quiz-explanation';
        explanationDiv.innerHTML = `
            <h4>Explanation:</h4>
            <p>${explanation}</p>
            <button id="nextQuestionBtn" class="btn-primary" style="margin-top: 15px;">Next Question</button>
        `;
        explanationDiv.style.cssText = `
            margin-top: 20px; padding: 15px; background: #f0f7ff;
            border-radius: 8px; border-left: 4px solid var(--primary);
        `;

        const quizOptions = document.getElementById('quizOptions');
        if (quizOptions) {
            quizOptions.appendChild(explanationDiv);

            const nextBtn = document.getElementById('nextQuestionBtn');
            if (nextBtn) {
                nextBtn.addEventListener('click', nextQuestion);
            }
        }
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.questions.length) {
            showQuestion();
        } else {
            showQuizResults();
        }
    }

    function updateQuizNavigation() {
        const prevBtn = document.getElementById('prevQuestion');
        const nextBtn = document.getElementById('nextQuestion');

        if (prevBtn) {
            prevBtn.disabled = currentQuestionIndex === 0;
            prevBtn.onclick = previousQuestion;
        }

        if (nextBtn) {
            nextBtn.disabled = !userAnswers[currentQuestionIndex];
            nextBtn.onclick = nextQuestion;
        }
    }

    function previousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
        }
    }

    function showQuizResults() {
        const percentage = Math.round((quizScore / currentQuiz.questions.length) * 100);
        let resultMessage = '';
        let resultClass = '';

        if (percentage >= 90) {
            resultMessage = 'Excellent! You\'re a South Asia expert!';
            resultClass = 'success';
        } else if (percentage >= 70) {
            resultMessage = 'Good job! You have solid knowledge.';
            resultClass = 'warning';
        } else {
            resultMessage = 'Keep learning! Practice makes perfect.';
            resultClass = 'error';
        }

        const resultsDiv = document.createElement('div');
        resultsDiv.className = 'quiz-results';
        resultsDiv.innerHTML = `
            <h3>Quiz Complete!</h3>
            <div class="score-display" style="font-size: 48px; font-weight: bold; color: var(--primary); margin: 20px 0;">
                ${quizScore}/${currentQuiz.questions.length}
            </div>
            <div class="percentage" style="font-size: 24px; margin-bottom: 20px;">
                ${percentage}% Correct
            </div>
            <p class="result-message" style="font-size: 18px; margin-bottom: 30px;">
                ${resultMessage}
            </p>
            <div style="display: flex; gap: 15px; justify-content: center;">
                <button onclick="location.reload()" class="btn-primary">Take Another Quiz</button>
                <button onclick="document.getElementById('quizInterface').style.display='none'" class="btn-secondary">Close</button>
            </div>
        `;

        const quizInterface = document.getElementById('quizInterface');
        if (quizInterface) {
            quizInterface.innerHTML = '';
            quizInterface.appendChild(resultsDiv);
        }

        // Save quiz result (only if userProgress is available)
        if (typeof userProgress !== 'undefined' && typeof saveUserProgress === 'function') {
            // Track quiz completion in progress system
            const quizKey = 'quiz_' + currentQuiz.title.toLowerCase().replace(/\s+/g, '_');
            if (!userProgress.quizScores) userProgress.quizScores = {};
            userProgress.quizScores[quizKey] = percentage;
            saveUserProgress();
        }

        showNotification(`Quiz completed! Score: ${percentage}%`, resultClass);
    }

    // Add quiz styles
    const quizStyles = document.createElement('style');
    quizStyles.textContent = `
        .quiz-option {
            display: block; width: 100%; padding: 15px; margin: 5px 0;
            background: white; border: 2px solid #e2e8f0; border-radius: 8px;
            cursor: pointer; transition: all 0.3s; text-align: left;
        }
        .quiz-option:hover { border-color: var(--primary); }
        .quiz-option.correct { background: #d4edda; border-color: #28a745; }
        .quiz-option.incorrect { background: #f8d7da; border-color: #dc3545; }
        .quiz-explanation { animation: slideIn 0.3s; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    `;
    document.head.appendChild(quizStyles);