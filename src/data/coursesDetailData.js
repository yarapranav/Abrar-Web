export const coursesDetailData = {
  1: {
    id: 1,
    category: 'Geography',
    level: 'Beginner',
    title: 'South Asia: Physical Geography Masterclass',
    description: 'Comprehensive coverage of mountains, rivers, climate zones, natural resources, and environmental challenges across South Asia.',
    time: '12 Hours',
    lessons: '24 Lessons',
    students: '2,500+ Students',
    rating: '4.8',
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    about: 'This comprehensive course provides an in-depth exploration of the physical geography of South Asia. You\'ll gain a thorough understanding of the region\'s diverse landscapes, from the towering Himalayas to the fertile river deltas, and learn about the environmental challenges facing this dynamic part of the world.',
    aboutSecondary: 'The course combines theoretical knowledge with practical applications, using interactive maps, case studies, and real-world examples to help you understand the complex interplay between physical geography and human societies in South Asia.',
    whatYoullLearn: [
      {
        icon: 'fa-mountain',
        title: 'Mountain Systems',
        desc: 'Understand the formation, ecology, and significance of the Himalayan and other mountain ranges.'
      },
      {
        icon: 'fa-water',
        title: 'River Systems',
        desc: 'Study major river systems including Ganges, Brahmaputra, Indus, and their importance for agriculture and settlements.'
      },
      {
        icon: 'fa-cloud-sun',
        title: 'Climate Patterns',
        desc: 'Analyze monsoon systems, climate zones, and weather patterns across different regions.'
      }
    ],
    curriculum: [
      {
        id: 1,
        title: 'Module 1: Introduction to South Asian Geography',
        stats: '4 Lessons • 2 Hours',
        lessons: [
          { title: 'Lesson 1: Geographical Overview', desc: 'Introduction to South Asia\'s geographical extent and significance', time: '30 min' },
          { title: 'Lesson 2: Geological Formation', desc: 'Plate tectonics and geological history of the Indian subcontinent', time: '45 min' },
          { title: 'Lesson 3: Regional Divisions', desc: 'Major physical divisions and their characteristics', time: '25 min' },
          { title: 'Lesson 4: Interactive Map Exercise', desc: 'Hands-on exploration of South Asia\'s physical features', time: '20 min' }
        ]
      },
      {
        id: 2,
        title: 'Module 2: Mountain Ranges & Plateaus',
        stats: '6 Lessons • 3 Hours',
        lessons: [
          { title: 'Lesson 5: The Himalayas', desc: 'Formation, divisions, and ecological significance', time: '40 min' },
          { title: 'Lesson 6: Karakoram & Hindu Kush', desc: 'Western mountain ranges and their features', time: '35 min' },
          { title: 'Lesson 7: Deccan Plateau', desc: 'Geology, topography, and mineral resources', time: '30 min' }
        ]
      }
    ],
    instructor: {
      initials: 'AS',
      name: 'Dr. Anjali Sharma',
      title: 'PhD in Geography, University of Delhi',
      bio: 'Dr. Sharma has 15+ years of experience teaching geography and has published numerous research papers on South Asian environmental studies.'
    },
    includes: [
      { icon: 'fa-video', text: '24 hours on-demand video' },
      { icon: 'fa-file-pdf', text: '15 downloadable resources' },
      { icon: 'fa-mobile-alt', text: 'Access on mobile and TV' },
      { icon: 'fa-certificate', text: 'Certificate of completion' },
      { icon: 'fa-infinity', text: 'Full lifetime access' }
    ],
    prerequisites: [
      'Basic understanding of geography concepts',
      'Interest in South Asian studies',
      'No prior expertise required'
    ],
    price: 'Free'
  },
  2: {
    id: 2,
    category: 'History',
    level: 'Intermediate',
    title: 'Ancient Civilizations: Indus Valley to Mughals',
    description: 'Explore the rise and fall of ancient civilizations, from the Harappan culture to the magnificent Mughal Empire.',
    time: '18 Hours',
    lessons: '32 Lessons',
    students: '1,800+ Students',
    rating: '4.9',
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    about: 'Journey through 5,000 years of South Asian history in this comprehensive course. From the mysterious Indus Valley Civilization to the grandeur of the Mughal Empire, you\'ll explore the political, social, and cultural developments that shaped the Indian subcontinent.',
    aboutSecondary: 'This course combines archaeological evidence, historical texts, and visual materials to provide a rich understanding of ancient South Asian civilizations. You\'ll learn about urban planning, trade networks, religious developments, and artistic achievements.',
    timeline: [
      { year: '3300-1300 BCE', title: 'Indus Valley Civilization', desc: 'Advanced urban civilization with sophisticated city planning, drainage systems, and trade networks.' },
      { year: '1500-500 BCE', title: 'Vedic Period', desc: 'Composition of Vedas, emergence of early Hinduism, and development of caste system.' },
      { year: '322-185 BCE', title: 'Mauryan Empire', desc: 'First major empire in South Asia, expansion of Buddhism under Ashoka.' },
      { year: '1526-1857 CE', title: 'Mughal Empire', desc: 'Islamic empire known for architectural marvels, administrative reforms, and cultural synthesis.' }
    ],
    curriculum: [
      {
        id: 1,
        title: 'Module 1: Indus Valley Civilization',
        stats: '6 Lessons • 3 Hours',
        lessons: [
          { title: 'Lesson 1: Discovery & Excavation', desc: 'How archaeologists uncovered the Indus Valley sites', time: '40 min' },
          { title: 'Lesson 2: Urban Planning', desc: 'City layouts, drainage systems, and architecture', time: '45 min' },
          { title: 'Lesson 3: Trade & Economy', desc: 'Domestic and international trade networks', time: '35 min' }
        ]
      }
    ],
    sites: [
      { name: 'Mohenjo-daro', desc: 'Pakistan - Largest Indus Valley city with advanced urban planning' },
      { name: 'Harappa', desc: 'Pakistan - First discovered Indus Valley site' },
      { name: 'Taxila', desc: 'Pakistan - Ancient university and Buddhist center' },
      { name: 'Nalanda', desc: 'India - Ancient Buddhist monastic university' }
    ],
    instructor: {
      initials: 'RM',
      name: 'Prof. Rajiv Mehta',
      title: 'PhD in Ancient History, JNU',
      bio: 'Former professor at Jawaharlal Nehru University, author of 8 books on South Asian history, with 20+ years of archaeological fieldwork experience.'
    },
    includes: [
      { icon: 'fa-video', text: '32 hours on-demand video' },
      { icon: 'fa-file-pdf', text: '25 downloadable resources' },
      { icon: 'fa-map', text: 'Interactive historical maps' },
      { icon: 'fa-certificate', text: 'Certificate of completion' },
      { icon: 'fa-infinity', text: 'Full lifetime access' }
    ],
    recommendedFor: [
      'History students',
      'Travel enthusiasts',
      'Archaeology buffs',
      'Teachers & educators'
    ],
    price: '$49.99'
  },
  3: {
    id: 3,
    category: 'Culture',
    level: 'Beginner',
    title: 'Cultural Diversity & Traditions',
    description: 'Understand languages, religions, festivals, art, architecture, cuisine, and social customs across South Asian countries.',
    time: '15 Hours',
    lessons: '28 Lessons',
    students: '3,200+ Students',
    rating: '4.7',
    img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    about: 'Explore the vibrant tapestry of South Asian cultures, traditions, and artistic expressions. This course delves into the unique identities and shared heritages of the region\'s diverse populations.',
    aboutSecondary: 'From classical dance forms to regional cuisines, you\'ll gain a deep appreciation for the cultural richness that defines South Asia today.',
    whatYoullLearn: [
      { icon: 'fa-om', title: 'Religious Harmony', desc: 'Explore the coexistence of major religions and their cultural influence.' },
      { icon: 'fa-palette', title: 'Arts & Crafts', desc: 'Study traditional art forms, textiles, and architectural styles.' },
      { icon: 'fa-utensils', title: 'Culinary Heritage', desc: 'Discover the diverse flavors and cooking traditions across the region.' }
    ],
    curriculum: [
        {
          id: 1,
          title: 'Module 1: Foundations of Culture',
          stats: '5 Lessons • 2.5 Hours',
          lessons: [
            { title: 'Lesson 1: Linguistic Diversity', desc: 'Major language families and their regional distribution', time: '35 min' },
            { title: 'Lesson 2: Religious Landscapes', desc: 'History and practice of major religions in South Asia', time: '40 min' }
          ]
        }
    ],
    instructor: {
      initials: 'PP',
      name: 'Dr. Priya Patel',
      title: 'Professor of Cultural Studies',
      bio: 'Dr. Patel is a renowned expert in South Asian sociology and has spent decades documenting folk traditions across the subcontinent.'
    },
    includes: [
      { icon: 'fa-video', text: '28 hours on-demand video' },
      { icon: 'fa-music', text: 'Traditional music library' },
      { icon: 'fa-image', text: 'High-res cultural gallery' },
      { icon: 'fa-certificate', text: 'Certificate of completion' },
      { icon: 'fa-infinity', text: 'Full lifetime access' }
    ],
    prerequisites: [
      'An open mind and curiosity',
      'Interest in sociological developments',
      'N/A'
    ],
    price: 'Free'
  },
  4: {
    id: 4,
    category: 'Politics',
    level: 'Advanced',
    title: 'Modern South Asian Politics & Diplomacy',
    description: 'Analyze political systems, international relations, conflicts, and cooperation among South Asian nations.',
    time: '20 Hours',
    lessons: '36 Lessons',
    students: '1,200+ Students',
    rating: '4.8',
    img: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    about: 'Gain a sophisticated understanding of the modern political landscape in South Asia. This advanced course examines the evolution of nation-states, regional security dynamics, and international relations.',
    aboutSecondary: 'We analyze the roles of domestic politics, regional organizations like SAARC, and global powers in shaping the region\'s trajectory.',
    whatYoullLearn: [
      { icon: 'fa-landmark', title: 'Political Systems', desc: 'Comparative study of democratic and other governance models in the region.' },
      { icon: 'fa-handshake', title: 'Regional Cooperation', desc: 'Analysis of trade agreements, diplomacy, and collaborative projects.' },
      { icon: 'fa-shield-alt', title: 'Security Dynamics', desc: 'Understanding borders, conflicts, and peacekeeping efforts.' }
    ],
    curriculum: [
      {
        id: 1,
        title: 'Module 1: Post-Colonial Transition',
        stats: '6 Lessons • 3 Hours',
        lessons: [
          { title: 'Lesson 1: Partition & its Legacy', desc: 'Historical context of modern state formation', time: '45 min' },
          { title: 'Lesson 2: Identity Politics', desc: 'Role of ethnicity and religion in government', time: '40 min' }
        ]
      }
    ],
    instructor: {
      initials: 'SK',
      name: 'Dr. Sanjay Kumar',
      title: 'Political Analyst & Researcher',
      bio: 'Dr. Kumar has served as a policy advisor for regional development and is a frequent contributor to international political journals.'
    },
    includes: [
      { icon: 'fa-video', text: '36 hours on-demand video' },
      { icon: 'fa-file-contract', text: 'Policy analysis templates' },
      { icon: 'fa-comments', text: 'Bi-weekly live Q&A sessions' },
      { icon: 'fa-certificate', text: 'Certificate of completion' },
      { icon: 'fa-infinity', text: 'Full lifetime access' }
    ],
    prerequisites: [
      'Basic knowledge of 20th century history',
      'Understanding of political science basics',
      'Ability to engage in critical analysis'
    ],
    price: '$59.99'
  },
  5: {
    id: 5,
    category: 'Economics',
    level: 'Intermediate',
    title: 'Economic Development & Challenges',
    description: 'Study economic growth, poverty alleviation, trade relations, and sustainable development in South Asia.',
    time: '16 Hours',
    lessons: '30 Lessons',
    students: '1,500+ Students',
    rating: '4.6',
    img: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    about: 'This course provides a data-driven look at the economies of South Asian nations, examining their paths toward modernization, industrialization, and digital transformation.',
    aboutSecondary: 'We explore the challenges of inequality, youth unemployment, and the imperative for sustainable growth in the face of environmental changes.',
    whatYoullLearn: [
      { icon: 'fa-chart-line', title: 'Growth Models', desc: 'Analyzing different economic strategies across the Subcontinent.' },
      { icon: 'fa-users-cog', title: 'Social Development', desc: 'The link between education, healthcare, and economic prosperity.' },
      { icon: 'fa-globe', title: 'Trade & Globalization', desc: 'South Asia\'s role in the global supply chain and regional trade.' }
    ],
    curriculum: [
      {
        id: 1,
        title: 'Module 1: Economic History',
        stats: '5 Lessons • 2.5 Hours',
        lessons: [
          { title: 'Lesson 1: Pre-Liberalization Era', desc: 'State-led growth models and their outcomes', time: '40 min' },
          { title: 'Lesson 2: The 1991 Reforms', desc: 'Economic liberalization in India and its regional impact', time: '45 min' }
        ]
      }
    ],
    instructor: {
      initials: 'ML',
      name: 'Ms. Meera Lakshmi',
      title: 'Economic Policy Specialist',
      bio: 'Meera Lakshmi has extensive experience working with international financial institutions and has authored reports on regional economic integration.'
    },
    includes: [
      { icon: 'fa-video', text: '30 hours on-demand video' },
      { icon: 'fa-table', text: 'Economic data datasets' },
      { icon: 'fa-project-diagram', text: 'Case study workbooks' },
      { icon: 'fa-certificate', text: 'Certificate of completion' },
      { icon: 'fa-infinity', text: 'Full lifetime access' }
    ],
    prerequisites: [
      'Introductory Economics recommended',
      'Interest in international development',
      'N/A'
    ],
    price: '$44.99'
  },
  6: {
    id: 6,
    category: 'Geography',
    level: 'Beginner',
    title: 'Climate & Environmental Studies',
    description: 'Understand monsoons, climate change impacts, biodiversity, and conservation efforts across the region.',
    time: '14 Hours',
    lessons: '26 Lessons',
    students: '2,100+ Students',
    rating: '4.9',
    img: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    about: 'Focus on the critical environmental issues facing South Asia. This course covers the science behind monsoons, the threat of rising sea levels, and the importance of biodiversity conservation.',
    aboutSecondary: 'We look at successful community-led conservation projects and the role of regional cooperation in environmental protection.',
    whatYoullLearn: [
      { icon: 'fa-leaf', title: 'Biodiversity', desc: 'Study the unique flora and fauna of the region and conservation efforts.' },
      { icon: 'fa-cloud-showers-heavy', title: 'Monsoon Science', desc: 'Detailed look at the atmospheric processes driving South Asian weather.' },
      { icon: 'fa-temperature-high', title: 'Climate Adaptation', desc: 'Strategies for building resilience against climate change impacts.' }
    ],
    curriculum: [
      {
        id: 1,
        title: 'Module 1: The South Asian Monsoon',
        stats: '4 Lessons • 2 Hours',
        lessons: [
          { title: 'Lesson 1: Fundamentals of Monsoons', desc: 'Thermal contrast and pressure systems', time: '35 min' },
          { title: 'Lesson 2: Impact on Agriculture', desc: 'The connection between rainfall and food security', time: '40 min' }
        ]
      }
    ],
    instructor: {
      initials: 'VK',
      name: 'Dr. Vikram Kulkarni',
      title: 'Environmental Scientist',
      bio: 'Dr. Kulkarni specializes in climate modeling and has led several international research projects on Himalayan glacier melting.'
    },
    includes: [
      { icon: 'fa-video', text: '26 hours on-demand video' },
      { icon: 'fa-satellite-dish', text: 'Satellite imagery guides' },
      { icon: 'fa-seedling', text: 'Community project resources' },
      { icon: 'fa-certificate', text: 'Certificate of completion' },
      { icon: 'fa-infinity', text: 'Full lifetime access' }
    ],
    prerequisites: [
      'Basic science knowledge',
      'Interest in environmental issues',
      'N/A'
    ],
    price: 'Free'
  }
};
