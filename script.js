// Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling & Close menu on mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if(window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
});

// Translation System
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_cert: "Certificates",
        nav_contact: "Contact",
        hero_name: "Hamza Seffari",
        hero_title: "Software Engineering Student & Cybersecurity Enthusiast",
        about_title: "About Me",
        about_desc1: "I am Hamza Seffari, a software engineering student at Nanjing University of Science and Technology (NJUST) with a growing focus on building innovative, secure, and scalable software. My interest goes beyond coursework as I actively explore modern development practices, security principles, and practical engineering solutions.",
        about_desc2: "My goal is to grow into a professional software engineer who creates reliable products, contributes to open-source projects, and develops solutions that strengthen both user experience and digital security. I am especially drawn to cybersecurity, backend systems, web development, and cloud-based technologies.",
        about_desc3: "I believe consistent learning, hands-on building, and disciplined execution are the key to long-term growth. Every new project, certification, and achievement is an opportunity to improve and move closer to becoming a trusted engineer in the technology industry.",
        about_location: "Morocco / China",
        about_edu: "Software Engineering Student",
        career_title: "Career Objective",
        career_text: "I aim to build a career at the intersection of software engineering and cybersecurity, creating secure systems, contributing to meaningful software projects, and continuously learning in fast-evolving technical environments.",
        projects_title: "Projects",
        skills_title: "Technical Skills",
        edu_title: "Education",
        cert_title: "Certifications",
        contact_title: "Contact",
        footer: "© 2026 Hamza Seffari. All rights reserved."
    },
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_projects: "Projets",
        nav_skills: "Compétences",
        nav_cert: "Certificats",
        nav_contact: "Contact",
        hero_name: "Hamza Seffari",
        hero_title: "Étudiant en Génie Logiciel et passionné de cybersécurité",
        about_title: "À propos de moi",
        about_desc1: "Je suis Hamza Seffari, étudiant en génie logiciel à l'Université des Sciences et Technologies de Nanjing (NJUST), avec un intérêt croissant pour la création de logiciels innovants, sécurisés et évolutifs. Mon intérêt dépasse les cours, car j'explore activement les pratiques modernes de développement, les principes de sécurité et les solutions techniques concrètes.",
        about_desc2: "Mon objectif est de devenir un ingénieur logiciel professionnel qui crée des produits fiables, contribue à des projets open source et développe des solutions renforçant à la fois l'expérience utilisateur et la sécurité numérique. Je suis particulièrement attiré par la cybersécurité, les systèmes backend, le développement web et les technologies cloud.",
        about_desc3: "Je crois que l'apprentissage constant, la création pratique et l'exécution disciplinée sont la clé d'une croissance durable. Chaque nouveau projet, certificat et réussite est une opportunité d'améliorer mes compétences et de progresser vers une carrière solide dans l'industrie technologique.",
        about_location: "Maroc / Chine",
        about_edu: "Étudiant en Génie Logiciel",
        career_title: "Objectif de carrière",
        career_text: "Je souhaite construire une carrière à l'intersection du génie logiciel et de la cybersécurité, en créant des systèmes sécurisés, en contribuant à des projets logiciels significatifs et en apprenant continuellement dans des environnements techniques en évolution rapide.",
        projects_title: "Projets",
        skills_title: "Compétences techniques",
        edu_title: "Éducation",
        cert_title: "Certifications",
        contact_title: "Contact",
        footer: "© 2026 Hamza Seffari. Tous droits réservés."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_projects: "المشاريع",
        nav_skills: "المهارات",
        nav_cert: "الشهادات",
        nav_contact: "تواصل معي",
        hero_name: "حمزة سفاري",
        hero_title: "طالب هندسة البرمجيات ومهتم بالأمن السيبراني",
        about_title: "عنّي",
        about_desc1: "أنا حمزة سفاري، طالب في هندسة البرمجيات في جامعة نانجينغ للعلوم والتكنولوجيا (NJUST)، ولدي اهتمام متنامٍ ببناء برمجيات مبتكرة وآمنة وقابلة للتوسع. يتجاوز اهتمامي الدراسة الأكاديمية، لأنني أستكشف ممارسات التطوير الحديثة ومبادئ الأمن والحلول الهندسية العملية.",
        about_desc2: "هدفي أن أصبح مهندس برمجيات محترفًا يبتكر منتجات موثوقة، ويساهم في المشاريع المفتوحة المصدر، ويطور حلولًا تعزز تجربة المستخدم والأمن الرقمي. أنا مهتم特别ً بالأمن السيبراني والأنظمة الخلفية وتطوير الويب والتقنيات السحابية.",
        about_desc3: "أؤمن أن التعلم المستمر والبناء العملي والتنفيذ المنضبط هما مفتاح النمو طويل المدى. كل مشروع جديد أو شهادة أو إنجاز يمثل فرصة للتحسن والتقدم نحو أن أصبح مهندسًا موثوقًا في صناعة التكنولوجيا.",
        about_location: "المغرب / الصين",
        about_edu: "طالب هندسة البرمجيات",
        career_title: "الهدف المهني",
        career_text: "أهدف إلى بناء مسار مهني عند تقاطع هندسة البرمجيات والأمن السيبراني، من خلال إنشاء أنظمة آمنة والمساهمة في مشاريع برمجية ذات معنى والتعلم المستمر في بيئات تقنية متطورة.",
        projects_title: "المشاريع",
        skills_title: "المهارات التقنية",
        edu_title: "التعليم",
        cert_title: "الشهادات",
        contact_title: "التواصل",
        footer: "© 2026 حمزة سفاري. جميع الحقوق محفوظة."
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    localStorage.setItem('selectedLang', lang);
}

document.getElementById('language-selector').addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

const savedLang = localStorage.getItem('selectedLang') || 'en';
document.getElementById('language-selector').value = savedLang;
setLanguage(savedLang);