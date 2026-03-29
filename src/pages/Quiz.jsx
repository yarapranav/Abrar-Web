import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const quizData = {
    Geography: [
        { q: "What causes the South Asian monsoon?", options: ["Ocean currents", "Temperature difference between land and sea", "Earth tilt", "Volcanoes"], answer: "Temperature difference between land and sea" },
        { q: "Which river is longest in South Asia?", options: ["Yamuna", "Brahmaputra", "Ganga", "Indus"], answer: "Ganga" },
        { q: "The Himalayas act as:", options: ["Trade route", "Climate barrier", "Desert", "Ocean"], answer: "Climate barrier" },
        { q: "Which plateau is in India?", options: ["Deccan Plateau", "Tibetan Plateau", "Iranian Plateau", "Siberian Plateau"], answer: "Deccan Plateau" },
        { q: "Which desert lies in South Asia?", options: ["Sahara", "Thar Desert", "Gobi", "Kalahari"], answer: "Thar Desert" },
        { q: "Monsoon rains are important for:", options: ["Industry", "Agriculture", "Tourism", "Mining"], answer: "Agriculture" },
        { q: "Which country has most glaciers?", options: ["India", "Nepal", "Pakistan", "Sri Lanka"], answer: "Pakistan" },
        { q: "Coastal areas are prone to:", options: ["Earthquakes", "Floods and cyclones", "Snowstorms", "Volcanoes"], answer: "Floods and cyclones" },
        { q: "Which ocean borders South Asia?", options: ["Atlantic", "Indian Ocean", "Pacific", "Arctic"], answer: "Indian Ocean" },
        { q: "Brahmaputra flows through:", options: ["India only", "China India Bangladesh", "Nepal only", "Pakistan"], answer: "China India Bangladesh" }
    ],
    Culture: [
        { q: "Diwali is festival of:", options: ["Water", "Lights", "Harvest", "Music"], answer: "Lights" },
        { q: "Holi is known for:", options: ["Fire", "Colors", "Dance", "Lights"], answer: "Colors" },
        { q: "Which language is widely spoken?", options: ["Spanish", "Hindi", "French", "German"], answer: "Hindi" },
        { q: "Traditional dress in India:", options: ["Kimono", "Saree", "Suit", "Jacket"], answer: "Saree" },
        { q: "Bollywood belongs to:", options: ["USA", "India", "UK", "China"], answer: "India" },
        { q: "South Asia is known for:", options: ["One culture", "Cultural diversity", "No traditions", "Same language"], answer: "Cultural diversity" },
        { q: "Which religion originated here?", options: ["Christianity", "Hinduism", "Islam", "Judaism"], answer: "Hinduism" },
        { q: "Classical dance form:", options: ["Ballet", "Bharatanatyam", "Hip-hop", "Salsa"], answer: "Bharatanatyam" },
        { q: "Which country celebrates Vesak?", options: ["India", "Sri Lanka", "Pakistan", "Nepal"], answer: "Sri Lanka" },
        { q: "Food in South Asia is:", options: ["Bland", "Spicy and diverse", "Sweet only", "Plain"], answer: "Spicy and diverse" }
    ],
    Politics: [
        { q: "SAARC stands for:", options: ["South Asian Regional Cooperation", "Asian Union", "Resource Council", "Political Body"], answer: "South Asian Regional Cooperation" },
        { q: "India is a:", options: ["Monarchy", "Democracy", "Dictatorship", "Empire"], answer: "Democracy" },
        { q: "Parliament makes:", options: ["Laws", "Weather", "Maps", "Food"], answer: "Laws" },
        { q: "Pakistan is a:", options: ["Democracy", "Republic", "Empire", "Monarchy"], answer: "Republic" },
        { q: "Election means:", options: ["War", "Voting", "Trade", "Law"], answer: "Voting" },
        { q: "Constitution is:", options: ["Book of laws", "Story", "Map", "Chart"], answer: "Book of laws" },
        { q: "Prime Minister leads:", options: ["Army", "Government", "School", "Bank"], answer: "Government" },
        { q: "Diplomacy means:", options: ["War", "Peaceful relations", "Trade", "Study"], answer: "Peaceful relations" },
        { q: "Capital of India:", options: ["Mumbai", "Delhi", "Chennai", "Kolkata"], answer: "Delhi" },
        { q: "UN works for:", options: ["War", "Peace", "Trade", "Tourism"], answer: "Peace" }
    ],
    Environment: [
        { q: "Climate change causes:", options: ["Stability", "Extreme weather", "No change", "Cold only"], answer: "Extreme weather" },
        { q: "Global warming means:", options: ["Cooling", "Temperature rise", "Rainfall", "Wind"], answer: "Temperature rise" },
        { q: "Western Ghats are:", options: ["Desert", "Biodiversity hotspot", "Ocean", "Plateau"], answer: "Biodiversity hotspot" },
        { q: "Deforestation leads to:", options: ["Growth", "Habitat loss", "Rain", "Cooling"], answer: "Habitat loss" },
        { q: "Renewable energy:", options: ["Coal", "Solar", "Oil", "Gas"], answer: "Solar" },
        { q: "Pollution affects:", options: ["Air only", "Environment", "Soil only", "Water only"], answer: "Environment" },
        { q: "Glaciers are:", options: ["Melting", "Growing", "Static", "Burning"], answer: "Melting" },
        { q: "Recycling helps:", options: ["Waste increase", "Waste reduction", "Pollution", "Heat"], answer: "Waste reduction" },
        { q: "Carbon dioxide causes:", options: ["Cooling", "Warming", "Rain", "Snow"], answer: "Warming" },
        { q: "Sustainable development means:", options: ["Overuse", "Balanced use", "No use", "Waste"], answer: "Balanced use" }
    ],
    History: [
        { q: "Indus Valley known for:", options: ["Tech", "Urban planning", "Space", "Cars"], answer: "Urban planning" },
        { q: "Harappa is in:", options: ["India", "Pakistan", "Nepal", "Sri Lanka"], answer: "Pakistan" },
        { q: "Vedas belong to:", options: ["Modern period", "Ancient period", "Medieval", "British"], answer: "Ancient period" },
        { q: "Mauryan Empire ruler:", options: ["Akbar", "Ashoka", "Babur", "Gandhi"], answer: "Ashoka" },
        { q: "Mughal Empire founded by:", options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"], answer: "Babur" },
        { q: "Taj Mahal built by:", options: ["Akbar", "Shah Jahan", "Babur", "Ashoka"], answer: "Shah Jahan" },
        { q: "Nalanda was:", options: ["Fort", "University", "Temple", "Palace"], answer: "University" },
        { q: "Gupta period known as:", options: ["Dark age", "Golden age", "Modern", "War"], answer: "Golden age" },
        { q: "Buddhism spread by:", options: ["Ashoka", "Akbar", "Babur", "Gandhi"], answer: "Ashoka" },
        { q: "Indus cities had:", options: ["No planning", "Grid planning", "Random", "Circular"], answer: "Grid planning" }
    ]
};

const Quiz = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const initialCategory = queryParams.get('category');

    const [category, setCategory] = useState(initialCategory || null);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (initialCategory) {
            setCategory(initialCategory);
            setAnswers({});
            setShowResult(false);
        }
    }, [initialCategory]);

    const handleStartQuiz = (cat) => {
        setCategory(cat);
        setAnswers({});
        setShowResult(false);
        navigate(`/quiz?category=${cat}`);
    };

    const handleOptionChange = (qIndex, value) => {
        setAnswers({
            ...answers,
            [qIndex]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let currentScore = 0;
        const currentQuestions = quizData[category];
        
        currentQuestions.forEach((q, i) => {
            if (answers[i] === q.answer) {
                currentScore++;
            }
        });
        
        setScore(currentScore);
        setShowResult(true);
        window.scrollTo(0, 0);
    };

    if (!category) {
        return (
            <div style={styles.container}>
                <div style={styles.card}>
                    <h1 style={styles.title}>Select Quiz Category</h1>
                    <div style={styles.categoriesGrid}>
                        {Object.keys(quizData).map(cat => (
                            <button 
                                key={cat} 
                                onClick={() => handleStartQuiz(cat)}
                                style={styles.categoryBtn}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestions = quizData[category];

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>{category} Quiz</h1>
                
                {showResult ? (
                    <div style={styles.resultContainer}>
                        <h2 style={{ color: '#1a2980', marginBottom: '20px' }}>Quiz Completed!</h2>
                        <div style={styles.scoreCircle}>
                            <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{score} / {currentQuestions.length}</div>
                        </div>
                        <p style={{ margin: '20px 0', fontSize: '18px' }}>
                            {score === currentQuestions.length ? "Perfect Score! You're an expert!" : 
                             score >= (currentQuestions.length * 0.7) ? "Great job! You have a solid understanding." : 
                             "Good effort! Keep learning and try again."}
                        </p>
                        <button 
                            onClick={() => { setCategory(null); navigate('/quiz'); }}
                            style={styles.submitBtn}
                        >
                            Try Another Category
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {currentQuestions.map((q, i) => (
                            <div key={i} style={styles.questionBlock}>
                                <p style={styles.questionText}>{i + 1}. {q.q}</p>
                                <div style={styles.optionsGrid}>
                                    {q.options.map((opt, optIdx) => (
                                        <label key={optIdx} style={{
                                            ...styles.optionLabel,
                                            backgroundColor: answers[i] === opt ? '#e2e8f0' : '#f8f9fa',
                                            border: answers[i] === opt ? '2px solid #1a2980' : '2px solid #f8f9fa'
                                        }}>
                                            <input 
                                                type="radio" 
                                                name={`q${i}`} 
                                                value={opt} 
                                                checked={answers[i] === opt}
                                                onChange={() => handleOptionChange(i, opt)}
                                                style={{ marginRight: '10px' }}
                                                required
                                            />
                                            {opt}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button type="submit" style={styles.submitBtn}>Submit Quiz</button>
                    </form>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '900px',
        margin: '60px auto',
        padding: '0 20px',
    },
    card: {
        background: 'white',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    },
    title: {
        textAlign: 'center',
        color: '#1a2980',
        marginBottom: '40px',
        fontSize: '32px',
    },
    categoriesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
    },
    categoryBtn: {
        padding: '20px',
        border: 'none',
        background: 'linear-gradient(135deg, #1a2980, #3a4dcc)',
        color: 'white',
        borderRadius: '12px',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: '600',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 4px 15px rgba(26, 41, 128, 0.2)',
    },
    questionBlock: {
        marginBottom: '35px',
        paddingBottom: '25px',
        borderBottom: '1px solid #edf2f7',
    },
    questionText: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#2d3748',
        marginBottom: '20px',
    },
    optionsGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '15px',
    },
    optionLabel: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'all 0.2s',
    },
    submitBtn: {
        width: '100%',
        padding: '18px',
        background: '#26d0ce',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        fontSize: '18px',
        fontWeight: '700',
        cursor: 'pointer',
        marginTop: '20px',
        boxShadow: '0 6px 20px rgba(38, 208, 206, 0.3)',
    },
    resultContainer: {
        textAlign: 'center',
        padding: '20px',
    },
    scoreCircle: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: '#f0f7ff',
        border: '8px solid #1a2980',
        color: '#1a2980',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 30px',
    }
};

export default Quiz;
