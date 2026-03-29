import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Learning = () => {
    const [activeModule, setActiveModule] = useState('map');
    const [selectedCountry, setSelectedCountry] = useState('India');
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [videoModal, setVideoModal] = useState({ open: false, video: null });

    const modules = [
        { id: 'map', title: 'Interactive Map', icon: 'fa-map-marked-alt' },
        { id: 'timeline', title: 'Historical Timeline', icon: 'fa-history' },
        { id: 'culture', title: 'Cultural Insights', icon: 'fa-om' },
        { id: 'geography', title: 'Geography Explorer', icon: 'fa-mountain' },
        { id: 'videos', title: 'Video Library', icon: 'fa-video' },
        { id: 'quizzes', title: 'Practice Quizzes', icon: 'fa-question-circle' },
        { id: 'resources', title: 'Study Resources', icon: 'fa-book' },
        { id: 'paths', title: 'Learning Paths', icon: 'fa-route' }
    ];

    const countries = {
        'India': { 
            flag: "🇮🇳", code: 'IND', capital: 'New Delhi', pop: '1.428 Billion (2023)', area: '3,287,263 km²', lang: 'Hindi, English, 21 languages',
            desc: 'The largest country in South Asia, known for its diverse culture and booming economy. World\'s largest democracy, birthplace of four major religions (Hinduism, Buddhism, Jainism, Sikhism).',
            gdp: '$3.73 Trillion', literacy: '77.7%'
        },
        'Pakistan': { 
            flag: "🇵🇰", code: 'PAK', capital: 'Islamabad', pop: '242.9 Million (2023)', area: '881,913 km²', lang: 'Urdu, English',
            desc: 'A country with rich historical sites from the Indus Valley Civilization. Home to the world\'s second-largest Muslim population.',
            gdp: '$376 Billion', literacy: '59.1%'
        },
        'Bangladesh': { 
            flag: "🇧🇩", code: 'BGD', capital: 'Dhaka', pop: '169.4 Million (2023)', area: '148,460 km²', lang: 'Bengali',
            desc: 'Known for its river networks and the Sundarbans mangrove forest. World\'s second-largest garment exporter.',
            gdp: '$460 Billion', literacy: '74.7%'
        },
        'Sri Lanka': {
            flag: "🇱🇰", code: 'LKA', capital: 'Sri Jayawardenepura Kotte', pop: '22.1 Million (2023)', area: '65,610 km²', lang: 'Sinhala, Tamil',
            desc: 'Pearl of the Indian Ocean, known for tea production, ancient cities, and beautiful beaches.',
            gdp: '$84 Billion', literacy: '92.4%'
        },
        'Nepal': {
            flag: "🇳🇵", code: 'NPL', capital: 'Kathmandu', pop: '30.5 Million (2023)', area: '147,516 km²', lang: 'Nepali',
            desc: 'Home to Mount Everest, birthplace of Buddha, rich cultural heritage with numerous temples and festivals.',
            gdp: '$40 Billion', literacy: '67.9%'
        }
    };

    const timelineEvents = [
        { year: '3000 - 1300 BCE', title: 'Indus Valley Civilization', desc: 'One of the world\'s earliest urban civilizations with advanced planning.', tags: ['Urban Planning', 'Trade'] },
        { year: '1500 - 500 BCE', title: 'Vedic Period', desc: 'Composition of the Vedas and emergence of early Hinduism.', tags: ['Religion', 'Social Structure'] },
        { year: '322 - 185 BCE', title: 'Mauryan Empire', desc: 'First major empire, expanded by Ashoka to promote Buddhism.', tags: ['Empire', 'Buddhism'] },
        { year: '1526 - 1857 CE', title: 'Mughal Empire', desc: 'Legendary wealth and architectural marvels like the Taj Mahal.', tags: ['Architecture', 'Trade'] },
        { year: '1947', title: 'Partition & Independence', desc: 'British India partitioned into India and Pakistan.', tags: ['Independence', 'Partition'] }
    ];

    const cultureCards = [
        { category: 'Festivals', title: 'Diwali: Festival of Lights', desc: 'Symbolizes the victory of light over darkness. Celebrated in India, Nepal, Sri Lanka.', img: 'https://images.unsplash.com/photo-1567593810070-7a5c0925344e?w=800&q=80', icon: 'fa-map-marker-alt' },
        { category: 'Architecture', title: 'Taj Mahal: Symbol of Love', desc: 'Mughal architectural masterpiece built by Emperor Shah Jahan.', img: 'https://images.unsplash.com/photo-1585208798170-009bda2d8c28?w=800&q=80', icon: 'fa-landmark' },
        { category: 'Cuisine', title: 'South Asian Cuisine', desc: 'Diverse flavors from spicy curries to sweet desserts like Biryani and Dosa.', img: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=800&q=80', icon: 'fa-utensils' },
        { category: 'Textiles', title: 'Traditional Clothing', desc: 'Explore traditional garments like Sari, Salwar Kameez, Kurta, and Dhoti.', img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80', icon: 'fa-tshirt' },
        { category: 'Religion', title: 'Religious Diversity', desc: 'Birthplace of four major world religions: Hinduism, Buddhism, Jainism, and Sikhism.', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80', icon: 'fa-pray' },
        { category: 'Music & Dance', title: 'Classical Arts', desc: 'From Kathak dance forms to classical ragas, South Asia has rich artistic traditions.', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80', icon: 'fa-music' }
    ];

    const geoFeatures = [
        { id: 'himalayas', title: 'The Himalayas', icon: 'fa-mountain', desc: 'World\'s highest peaks and source of major rivers.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', detail: 'Spans 2,400km across 5 countries. Home to Everest (8,848m).' },
        { id: 'indus', title: 'Indus River', icon: 'fa-water', desc: ' lifeline of Pakistan\'s agriculture.', img: 'https://images.unsplash.com/photo-1610890690540-ec4a395a00f8?w=800&q=80', detail: '3,180km long, cradle of ancient civilizations.' },
        { id: 'ganges', title: 'Ganges Delta', icon: 'fa-water', desc: 'World\'s largest river delta in Bangladesh.', img: 'https://images.unsplash.com/photo-1621873374654-f0ac763c4c7f?w=800&q=80', detail: 'Home to the Sundarbans mangrove forest.' },
        { id: 'thar', title: 'Thar Desert', icon: 'fa-sun', desc: 'Large arid region in northwest India.', img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80', detail: 'Area of 200,000 km², 17th largest desert in the world.' },
        { id: 'deccan', title: 'Deccan Plateau', icon: 'fa-hill-rockslide', desc: 'Large plateau covering southern India.', img: 'https://images.unsplash.com/photo-1589561253898-768f6d0c0c7b?w=800&q=80', detail: 'Area of 1.9 million km², rich in minerals like iron and coal.' },
        { id: 'monsoon', title: 'Monsoon System', icon: 'fa-cloud-rain', desc: 'Seasonal rainfall patterns crucial for farming.', img: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80', detail: 'Brings 70% of annual rainfall in just 4 months.' }
    ];

    const videosList = [
        { id: 1, title: 'Introduction to South Asian Geography', duration: '24:15', author: 'Dr. Anjali Sharma', thumb: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80' },
        { id: 2, title: 'Indus Valley Civilization Explained', duration: '31:42', author: 'Prof. Rajiv Mehta', thumb: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80' },
        { id: 3, title: 'Cultural Festivals of South Asia', duration: '28:10', author: 'Dr. Priya Patel', thumb: 'https://images.unsplash.com/photo-1567593810070-7a5c0925344e?w=800&q=80' }
    ];

    const quizzesList = [
        { id: 'capitals', title: 'Countries & Capitals', cat: 'Geography', diff: 'Easy', desc: 'Test your knowledge of South Asian nations.' },
        { id: 'timeline', title: 'Historical Timeline', cat: 'History', diff: 'Medium', desc: 'Match events with their time periods.' },
        { id: 'culture', title: 'Cultural Knowledge', cat: 'Culture', diff: 'Easy', desc: 'Identify festivals and traditions.' }
    ];

    const resourcesList = [
        { title: 'Reference Maps', items: ['Political Map (PDF)', 'Physical Map (PDF)', 'Climate Zones Map'], icon: 'fa-file-pdf' },
        { title: 'Data & Statistics', items: ['Population Data (2024)', 'Economic Indicators', 'Development Reports'], icon: 'fa-chart-bar' },
        { title: 'Reading Lists', items: ['History Reading List', 'Cultural Studies', 'Political Analysis'], icon: 'fa-book-open' }
    ];

    return (
        <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
            {/* Header */}
            <section className="page-header" style={{
                background: 'linear-gradient(rgba(26, 41, 128, 0.9), rgba(38, 208, 206, 0.9)), url("https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
                backgroundSize: 'cover', color: 'white', padding: '80px 0', textAlign: 'center', borderRadius: '0 0 30px 30px', marginBottom: '60px'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Interactive Learning Hub</h1>
                    <p>Explore South Asia through interactive maps, timelines, and multimedia resources</p>
                </div>
            </section>

            <div className="container" style={{ paddingBottom: '80px' }}>
                <div className="learning-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 300px) 1fr', gap: '40px' }}>
                    {/* Sidebar */}
                    <aside className="sidebar" style={styles.card}>
                        <h2 style={{ color: '#1a2980', marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #26d0ce', fontSize: '24px' }}>
                            <i className="fas fa-layer-group"></i> Modules
                        </h2>
                        <ul style={{ listStyle: 'none' }}>
                            {modules.map(mod => (
                                <li 
                                    key={mod.id} 
                                    onClick={() => setActiveModule(mod.id)}
                                    style={{
                                        ...styles.moduleItem,
                                        backgroundColor: activeModule === mod.id ? '#1a2980' : '#f8fafc',
                                        color: activeModule === mod.id ? 'white' : '#2d3748',
                                        borderLeft: activeModule === mod.id ? '5px solid #26d0ce' : '5px solid #1a2980'
                                    }}
                                >
                                    <i className={`fas ${mod.icon}`} style={{ width: '25px' }}></i> {mod.title}
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Content */}
                    <main className="main-content">
                        {activeModule === 'map' && (
                            <section style={styles.contentSection}>
                                <div style={styles.moduleHeader}>
                                    <h2 style={{ fontSize: '32px', color: '#1a2980' }}><i className="fas fa-map-marked-alt"></i> Interactive Map Explorer</h2>
                                    <p style={{ color: '#718096' }}>Explore demographics and key facts for each nation</p>
                                </div>
                                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                                    <img src="/south-asia-map.png" alt="South Asia Map" style={{ maxWidth: '100%', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }} />
                                </div>
                                <div style={styles.flexCenter}>
                                    {Object.keys(countries).map(name => (
                                        <button key={name} onClick={() => setSelectedCountry(name)} style={{
                                            ...styles.countryBtn,
                                            backgroundColor: selectedCountry === name ? '#1a2980' : 'white',
                                            color: selectedCountry === name ? 'white' : '#1a2980'
                                        }}>
                                            <span>{countries[name].flag}</span> {name}
                                        </button>
                                    ))}
                                </div>
                                {selectedCountry && (
                                    <div style={styles.countryDetailPanel}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                            <h3 style={{ fontSize: '32px', color: '#1a2980' }}>{countries[selectedCountry].flag} {selectedCountry}</h3>
                                            <span style={styles.badge}>{countries[selectedCountry].code}</span>
                                        </div>
                                        <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '25px', color: '#4a5568' }}>{countries[selectedCountry].desc}</p>
                                        <div style={styles.grid2}>
                                            <div style={styles.infoBox}><span style={styles.label}>Capital</span> {countries[selectedCountry].capital}</div>
                                            <div style={styles.infoBox}><span style={styles.label}>Population</span> {countries[selectedCountry].pop}</div>
                                            <div style={styles.infoBox}><span style={styles.label}>Area</span> {countries[selectedCountry].area}</div>
                                            <div style={styles.infoBox}><span style={styles.label}>GDP</span> {countries[selectedCountry].gdp}</div>
                                        </div>
                                    </div>
                                )}
                            </section>
                        )}

                        {activeModule === 'timeline' && (
                            <section style={styles.contentSection}>
                                <div style={styles.moduleHeader}>
                                    <h2 style={{ fontSize: '32px', color: '#1a2980' }}><i className="fas fa-history"></i> Historical Timeline</h2>
                                    <p style={{ color: '#718096' }}>Journey through the key eras of South Asian history</p>
                                </div>
                                <div style={styles.timelineContainer}>
                                    {timelineEvents.map((ev, idx) => (
                                        <div key={idx} style={styles.timelineItem}>
                                            <div style={styles.timelineYear}>{ev.year}</div>
                                            <div style={styles.timelineBox}>
                                                <h3 style={{ color: '#1a2980', marginBottom: '10px' }}>{ev.title}</h3>
                                                <p style={{ color: '#4a5568' }}>{ev.desc}</p>
                                                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                                                    {ev.tags.map(tag => <span key={tag} style={styles.tag}>{tag}</span>)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {activeModule === 'culture' && (
                            <section style={styles.contentSection}>
                                <div style={styles.moduleHeader}>
                                    <h2 style={{ fontSize: '32px', color: '#1a2980' }}><i className="fas fa-om"></i> Cultural Insights</h2>
                                    <p style={{ color: '#718096' }}>Discover the rich traditions and arts of the region</p>
                                </div>
                                <div style={styles.grid2}>
                                    {cultureCards.map((c, i) => (
                                        <div key={i} style={styles.cultureCard}>
                                            <div style={{...styles.cultureImg, backgroundImage: `url('${c.img}')`}}></div>
                                            <div style={{ padding: '25px' }}>
                                                <span style={styles.categoryLabel}>{c.category}</span>
                                                <h3 style={{ margin: '15px 0 10px' }}>{c.title}</h3>
                                                <p style={{ color: '#718096', fontSize: '15px' }}>{c.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {activeModule === 'geography' && (
                            <section style={styles.contentSection}>
                                <div style={styles.moduleHeader}>
                                    <h2 style={{ fontSize: '32px', color: '#1a2980' }}><i className="fas fa-mountain"></i> Geography Explorer</h2>
                                    <p style={{ color: '#718096' }}>Examine the physical features that define the subcontinent</p>
                                </div>
                                <div style={styles.grid2}>
                                    {geoFeatures.map(f => (
                                        <div key={f.id} style={{...styles.featureCard, borderTop: selectedFeature === f.id ? '5px solid #26d0ce' : '1px solid #e2e8f0'}} onClick={() => setSelectedFeature(f.id)}>
                                            <i className={`fas ${f.icon}`} style={{ fontSize: '40px', color: '#26d0ce', marginBottom: '20px' }}></i>
                                            <h3>{f.title}</h3>
                                            <p style={{ color: '#718096', fontSize: '14px' }}>{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                {selectedFeature && (
                                    <div style={styles.featurePanel}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center' }}>
                                            <img src={geoFeatures.find(f => f.id === selectedFeature).img} alt={selectedFeature} style={{ width: '100%', borderRadius: '15px' }} />
                                            <div>
                                                <h3 style={{ fontSize: '28px', color: '#1a2980', marginBottom: '15px' }}>{geoFeatures.find(f => f.id === selectedFeature).title}</h3>
                                                <p style={{ lineHeight: '1.8', color: '#1a2980' }}>{geoFeatures.find(f => f.id === selectedFeature).detail}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </section>
                        )}

                        {activeModule === 'videos' && (
                            <section style={styles.contentSection}>
                                <div style={styles.moduleHeader}>
                                    <h2 style={{ fontSize: '32px', color: '#1a2980' }}><i className="fas fa-video"></i> Video Library</h2>
                                </div>
                                <div style={styles.grid2}>
                                    {videosList.map(v => (
                                        <div key={v.id} style={styles.videoCard} onClick={() => setVideoModal({ open: true, video: v })}>
                                            <div style={{...styles.videoThumb, backgroundImage: `url('${v.thumb}')`}}>
                                                <div style={styles.playBtn}><i className="fas fa-play"></i></div>
                                            </div>
                                            <div style={{ padding: '20px' }}>
                                                <h4>{v.title}</h4>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '13px', color: '#718096' }}>
                                                    <span><i className="far fa-clock"></i> {v.duration}</span>
                                                    <span><i className="fas fa-user"></i> {v.author}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {activeModule === 'quizzes' && (
                            <section style={styles.contentSection}>
                                <div style={styles.moduleHeader}>
                                    <h2 style={{ fontSize: '32px', color: '#1a2980' }}><i className="fas fa-question-circle"></i> Practice Quizzes</h2>
                                </div>
                                <div style={styles.grid2}>
                                    {quizzesList.map(q => (
                                        <div key={q.id} style={styles.quizCard}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                                                <span style={styles.tag}>{q.cat}</span>
                                                <span style={{ fontSize: '13px', color: '#718096' }}>{q.diff}</span>
                                            </div>
                                            <h3 style={{ marginBottom: '10px' }}>{q.title}</h3>
                                            <p style={{ color: '#718096', fontSize: '14px', marginBottom: '20px' }}>{q.desc}</p>
                                            <Link to="/assessment" style={styles.startBtn}>Start Quiz</Link>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {activeModule === 'resources' && (
                            <section style={styles.contentSection}>
                                <div style={styles.moduleHeader}>
                                    <h2 style={{ fontSize: '32px', color: '#1a2980' }}><i className="fas fa-book"></i> Study Resources</h2>
                                </div>
                                <div style={styles.grid3}>
                                    {resourcesList.map((r, i) => (
                                        <div key={i} style={styles.resourceCard}>
                                            <i className={`fas ${r.icon}`} style={{ fontSize: '30px', color: '#1a2980', marginBottom: '15px' }}></i>
                                            <h4 style={{ marginBottom: '15px' }}>{r.title}</h4>
                                            <ul style={{ listStyle: 'none' }}>
                                                {r.items.map(item => (
                                                    <li key={item} style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0', fontSize: '14px' }}>
                                                        <a href="#" style={{ color: '#1a2980', textDecoration: 'none' }}><i className="fas fa-arrow-circle-right"></i> {item}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {activeModule === 'paths' && (
                            <section style={styles.contentSection}>
                                <div style={styles.moduleHeader}>
                                    <h2 style={{ fontSize: '32px', color: '#1a2980' }}><i className="fas fa-route"></i> Career Paths</h2>
                                </div>
                                <div style={styles.grid3}>
                                    <Link to="/beginner-path" style={{...styles.pathItem, background: '#e6fffa'}}>
                                        <h4>Beginner</h4>
                                        <p>Basics of South Asia</p>
                                    </Link>
                                    <Link to="/intermediate-path" style={{...styles.pathItem, background: '#fffaf0'}}>
                                        <h4>Intermediate</h4>
                                        <p>Regional Relations</p>
                                    </Link>
                                    <Link to="/expert-path" style={{...styles.pathItem, background: '#f0f4ff'}}>
                                        <h4>Expert</h4>
                                        <p>Advanced Policy</p>
                                    </Link>
                                </div>
                            </section>
                        )}
                    </main>
                </div>
            </div>

            {/* Video Modal */}
            {videoModal.open && (
                <div style={styles.modal} onClick={() => setVideoModal({ open: false, video: null })}>
                    <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div style={styles.modalHeader}>
                            <h3>{videoModal.video.title}</h3>
                            <button onClick={() => setVideoModal({ open: false, video: null })} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '24px' }}>&times;</button>
                        </div>
                        <video controls autoPlay style={{ width: '100%', display: 'block' }}>
                            <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    card: { backgroundColor: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)', height: 'fit-content' },
    contentSection: { backgroundColor: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)' },
    moduleItem: { padding: '15px 20px', marginBottom: '12px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '15px' },
    moduleHeader: { marginBottom: '40px', paddingBottom: '20px', borderBottom: '2px solid #f0f4f8' },
    flexCenter: { display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '30px' },
    countryBtn: { padding: '12px 20px', border: '2px solid #1a2980', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '10px' },
    countryDetailPanel: { background: '#f0f7ff', borderRadius: '20px', padding: '40px', marginTop: '40px', borderLeft: '8px solid #26d0ce' },
    badge: { background: '#1a2980', color: 'white', padding: '6px 18px', borderRadius: '25px', fontSize: '14px', fontWeight: '800' },
    grid2: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' },
    grid3: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' },
    infoBox: { background: 'white', padding: '15px 20px', borderRadius: '12px', borderLeft: '4px solid #1a2980' },
    label: { display: 'block', fontSize: '12px', color: '#a0aec0', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' },
    timelineContainer: { position: 'relative', padding: '20px 0 20px 40px', borderLeft: '3px solid #26d0ce', marginLeft: '150px' },
    timelineItem: { position: 'relative', marginBottom: '60px' },
    timelineYear: { position: 'absolute', left: '-145px', width: '130px', textAlign: 'right', fontWeight: '800', color: '#1a2980', top: '15px' },
    timelineBox: { background: '#f8fafc', padding: '25px', borderRadius: '15px', borderLeft: '5px solid #1a2980', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
    tag: { background: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '13px', color: '#1a2980', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
    cultureCard: { background: 'white', border: '1px solid #e2e8f0', borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.3s' },
    cultureImg: { height: '220px', backgroundSize: 'cover', backgroundPosition: 'center' },
    categoryLabel: { background: 'rgba(38, 208, 206, 0.1)', color: '#26d0ce', padding: '5px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: '700' },
    featureCard: { background: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s' },
    featurePanel: { background: '#f0f7ff', borderRadius: '20px', padding: '30px', marginTop: '30px', borderLeft: '5px solid #26d0ce' },
    videoCard: { background: '#f8fafc', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' },
    videoThumb: { height: '180px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' },
    playBtn: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#ff6b6b', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    quizCard: { background: 'white', padding: '25px', borderRadius: '15px', borderLeft: '5px solid #26d0ce', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' },
    startBtn: { display: 'block', background: '#1a2980', color: 'white', padding: '12px', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', fontWeight: '700', transition: 'background 0.3s' },
    resourceCard: { background: 'white', padding: '25px', borderRadius: '15px', border: '1px solid #e2e8f0' },
    pathItem: { padding: '25px', borderRadius: '15px', textDecoration: 'none', color: '#1a2980', transition: 'transform 0.3s', textAlign: 'center' },
    modal: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    modalContent: { width: '90%', maxWidth: '900px', backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden' },
    modalHeader: { padding: '20px', background: '#1a2980', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
};

export default Learning;
