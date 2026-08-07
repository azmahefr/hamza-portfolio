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
        nav_skills: "Skills",
        nav_cert: "Certificates",
        nav_contact: "Contact",
        hero_name: "Hamza Seffari",
        hero_title: "Software Engineering Student",
        about_title: "About Me",
        about_desc1: "I am Hamza Seffari, a Software Engineering student at Nanjing University of Science and Technology (NJUST), with a strong passion for building innovative software and solving real-world problems through technology. Before starting my bachelor's degree, I completed a Chinese language program at Harbin Institute of Technology, which strengthened my adaptability and prepared me for studying in an international environment.",
        about_desc2: "I enjoy exploring software engineering, artificial intelligence, cybersecurity, backend development, and cloud technologies. I believe that continuous learning, discipline, and hands-on experience are the foundations of becoming a great engineer. I have earned certifications including Harvard's CS50x, freeCodeCamp Scientific Computing with Python, and an EF SET C2 English Certificate, reflecting my commitment to developing both technical and communication skills.",
        about_desc3: "My goal is to become a world-class software engineer who creates impactful products, contributes to open-source projects, and helps build technology that improves people's lives. Every project I develop is an opportunity to learn, grow, and move one step closer to that vision.",
        about_location: "Morocco / China",
        about_edu: "Software Engineering Student",
        skills_title: "My Skills",
        edu_title: "Education",
        edu_major1: "Bachelor of Software Engineering",
        edu_major2: "Chinese Language Program",
        edu_highschool: "High School",
        edu_major3: "Baccalaureate in Physics Sciences (French Option)",
        edu_mention: "Graduated with Good Mention (Mention Bien)",
        cert_title: "Certificates",
        cert1_title: "Harvard CS50x",
        cert1_desc: "Introduction to Computer Science",
        cert2_title: "freeCodeCamp",
        cert2_desc: "Scientific Computing with Python",
        cert3_title: "EF SET",
        cert3_desc: "English Level C2 Proficient",
        cert4_title: "CSCA Examination",
        cert4_desc: "Physics: 65/100 | Mathematics: 80/100",
        contact_title: "Contact Me",
        footer: "© 2026 Hamza Seffari. All rights reserved."
    },
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_cert: "Certificats",
        nav_contact: "Contact",
        hero_name: "Hamza Seffari",
        hero_title: "Étudiant en Génie Logiciel",
        about_title: "À propos de moi",
        about_desc1: "Je suis Hamza Seffari, un étudiant passionné en génie logiciel. Je m'intéresse beaucoup au développement web, à l'architecture logicielle et à la résolution de problèmes.",
        about_desc2: "Je cherche toujours de nouvelles opportunités pour apprendre et grandir. Mon objectif est de devenir un ingénieur logiciel professionnel.",
        about_location: "Maroc / Chine",
        about_edu: "Étudiant en Génie Logiciel",
        skills_title: "Mes Compétences",
        edu_title: "Éducation",
        edu_major1: "Licence en Génie Logiciel",
        edu_major2: "Programme de Langue Chinoise",
        edu_highschool: "Lycée",
        edu_major3: "Baccalauréat en Sciences Physiques (Option Française)",
        edu_mention: "Mention Bien",
        cert_title: "Certificats",
        cert1_title: "Harvard CS50x",
        cert1_desc: "Introduction à l'Informatique",
        cert2_title: "freeCodeCamp",
        cert2_desc: "Calcul Scientifique avec Python",
        cert3_title: "EF SET",
        cert3_desc: "Niveau d'Anglais C2 Proficient",
        cert4_title: "Examen CSCA",
        cert4_desc: "Physique: 65/100 | Mathématiques: 80/100",
        contact_title: "Contactez-moi",
        footer: "© 2026 Hamza Seffari. Tous droits réservés."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_skills: "مهاراتي",
        nav_cert: "الشهادات",
        nav_contact: "تواصل معي",
        hero_name: "حمزة سفاري",
        hero_title: "طالب هندسة البرمجيات",
        about_title: "عنّي",
        about_desc1: "أنا حمزة سفاري، طالب شغوف بهندسة البرمجيات. لدي اهتمام كبير بتطوير الويب، هندسة البرمجيات، وحل المشاكل.",
        about_desc2: "أبحث دائماً عن فرص جديدة للتعلم والنمو. هدفي هو أن أصبح مهندس برمجيات محترفاً.",
        about_location: "المغرب / الصين",
        about_edu: "طالب هندسة البرمجيات",
        skills_title: "مهاراتي",
        edu_title: "التعليم",
        edu_major1: "بكالوريوس هندسة البرمجيات",
        edu_major2: "برنامج اللغة الصينية",
        edu_highschool: "الثانوية",
        edu_major3: "بكالوريا علوم فيزيائية (خيار فرنسي)",
        edu_mention: "معدل جيد (Mention Bien)",
        cert_title: "الشهادات",
        cert1_title: "Harvard CS50x",
        cert1_desc: "مقدمة في علوم الحاسوب",
        cert2_title: "freeCodeCamp",
        cert2_desc: "الحوسبة العلمية باستخدام Python",
        cert3_title: "EF SET",
        cert3_desc: "مستوى اللغة الإنجليزية C2",
        cert4_title: "امتحان CSCA",
        cert4_desc: "فيزياء: 65/100 | رياضيات: 80/100",
        contact_title: "تواصل معي",
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

const savedLang = localStorage.getItem('selectedLang') || 'en';
document.getElementById('language-selector').value = savedLang;
setLanguage(savedLang);