// Language translations
const translations = {
    en: {
        // Navigation
        "name": "Asma CHOUAIBI",
        "title": "Software Engineer",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.skills": "Skills",
        "nav.languages": "Languages",
        "nav.projects": "Projects",
        "nav.campus": "Involvement",
        "nav.courses": "Certifications",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.greeting": "Hi, I'm <span class='highlight'>Asma CHOUAIBI</span>",
        "hero.subtitle": "Software Engineer (FullStack Web Developer / Cloud & DevOps / AI Enthusiast)",
        "hero.cta": "Contact Me",
        
        // About Section
        "about.title": "About Me",
        "about.para1": "I am a passionate and recently graduated software engineer, with varied professional experience gained through several internships. My background combines both solid academic training and practical development experience in different environments.",
        "about.para2": "I communicate easily in French and English, allowing me to work effectively in international contexts. With great intellectual curiosity, I enjoy continuous learning and adapting to new technologies. My teamwork experience, reinforced by my associative commitment, has taught me the importance of collaboration and listening to lead projects to success.",
        "about.para3": "I am now looking to join a dynamic team where I can contribute to innovative projects while continuing to develop my skills in a stimulating and supportive environment.",
        "about.email": "Email:",
        "about.location": "Location:",
        "about.location.value": "Tunis, Tunisia",
        "about.availability": "Availability:",
        "about.availability.value": "Open to opportunities",
        
        // Experience Section
        "experience.title": "Professional Experience",
        "experience.internship": "Internship",
        "experience.achievements": "Key Achievements",
        
        // Job 1
        "experience.job1.title": "Java Web Developer (Spring) | Low-Code",
        "experience.job1.company": "Wevioo, Tunis, Tunisia",
        "experience.job1.achievement1": "Analysis of business needs, design and development of a business project management application based on the Joget DX 8 Low-Code platform, with customization of application logic and development of specific components in Java.",
        "experience.job1.achievement2": "Transformation of the web application into an Android mobile application via Apache Cordova, with automation of APK generation using a CI/CD pipeline with GitHub Actions.",
        "experience.job1.achievement3": "Development of specific user interfaces in HTML, CSS and JavaScript.",
        "experience.job1.achievement4": "Development of a custom plugin in Java (Spring) for sending push notifications to phones via Firebase.",
        "experience.job1.achievement5": "Development of Java scripts (BeanShell) executing SQL queries for data extraction and transformation into JSON.",
        "experience.job1.achievement6": "Analysis of collected data and visualization of key indicators (KPI) using Chart.js for monitoring and decision support.",
        "experience.job1.achievement7": "Work in Agile SCRUM environment, with close collaboration with business teams (user stories, sprints, meetings).",
        "experience.job1.achievement8": "Participation in functional testing, bug fixing, application maintenance and adjustments based on user feedback.",
        
        // Job 2
        "experience.job2.title": "FullStack Web Developer Java (Spring Boot)/Angular",
        "experience.job2.company": "Sage Tunisia, Tunis, Tunisia",
        "experience.job2.achievement1": "Analysis of business needs, design and development of a full-stack web application for managing employee absences and leaves.",
        "experience.job2.achievement2": "Development of REST APIs in Java (Spring Boot) and integration of the Angular front-end.",
        "experience.job2.achievement3": "User management and security with Spring Security.",
        "experience.job2.achievement4": "Data access and persistence via Spring Data JPA on a MySQL database.",
        "experience.job2.achievement5": "Participation in functional testing and anomaly correction.",
        
        
        // Job 3
        "experience.job3.title": "System and Network Administrator",
        "experience.job3.company": "Marquardt Tunisia, Tunis, Tunisia",
        "experience.job3.achievement1": "Configuration and deployment of Cisco 2960 switches for the company's network infrastructure.",
        "experience.job3.achievement2": "Implementation of network monitoring with Nagios for switch monitoring.",
        "experience.job3.achievement3": "Development of automation scripts (AutoIt) for workstation configuration and deployment.",
        
        // Job 4
        "experience.job4.title": "Data Analyst | Business Intelligence",
        "experience.job4.company": "Gérance Informatique, Tunis, Tunisia",
        "experience.job4.achievement1": "Development of a Splunk application dedicated to collecting, centralizing and analyzing system performance data (Windows and Linux).",
        "experience.job4.achievement2": "Implementation of PowerShell and Bash scripts for collecting system performance logs.",
        "experience.job4.achievement3": "Setting up a Data Lake for storing and organizing system logs.",
        "experience.job4.achievement4": "Analysis of collected data and creation of interactive dashboards, automated reports and real-time alerts on Splunk.",
        "experience.job4.achievement5": "Project management according to the Agile Scrum BI method.",
        
        // Education Section
        "education.title": "Education",
        "education.view-diploma": "View Diploma",
        "education.diploma3.alt": "Engineering Diploma",
        "education.diploma2.alt": "Bachelor's Degree in Management Computer Science",
        "education.diploma1.alt": "Baccalaureate in Experimental Sciences",
        
        // Degree 1
        "education.degree1.title": "National Engineering Diploma in Computer Science",
        "education.degree1.school": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "education.degree1.details": "Specialty: Web Development, Cloud & DevOps | Honors: Very Good | GPA: 16.03",
        
        // Degree 2
        "education.degree2.title": "National Bachelor's Degree in Management Computer Science",
        "education.degree2.school": "Institut Supérieur de Gestion de Tunis (ISGT)",
        "education.degree2.details": "Specialization: Business Intelligence (BI) | Honors: Good | GPA: 15.34",
        
        // Degree 3
        "education.degree3.title": "Baccalaureate in Experimental Sciences",
        "education.degree3.school": "Lycée Bardo",
        "education.degree3.details": "Honors: Good | GPA: 14.55",
        
        // Skills Section
        "skills.title": "Skills",
        "skills.langages": "Programming Languages",
        "skills.frontend": "Frontend Development Frameworks",
        "skills.backend": "Backend Development Frameworks",
        "skills.BD": "Databases",
        "skills.devops": "Cloud, DevOps & CI/CD",
        "skills.administration": "System and Network Administration",
        "skills.agile": "Agile Methods",
        "skills.analyse": "Data Analysis",
        "skills.tests": "Testing & Quality Assurance",
        
        // Languages Section
        "languages.title": "Languages",
        "languages.arabic": "Arabic",
        "languages.french": "French",
        "languages.english": "English",
        "languages.level.native": "Native language",
        "languages.level.b2": "Level B2",
        
        // Projects Section
        "projects.title": "Academic Projects",
        "projects.description": "Project Description",
        "projects.achievements": "Technical Achievements",
        "projects.view.code": "View Code",
        "projects.view.github": "View Source Code",
        
        // Project 1
        "projects.project1.title": "CI/CD DevOps Pipeline with Jenkins",
        "projects.project1.subtitle": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "projects.project1.description": "Implementation of a complete CI/CD pipeline for a Spring Boot application, automating integration, testing, security, containerization and deployment with real-time monitoring.",
        "projects.project1.achievement1": "Jenkins: Complete orchestration of the CI/CD pipeline.",
        "projects.project1.achievement2": "Git: Version management and continuous integration.",
        "projects.project1.achievement3": "JUnit: Automated unit tests with code coverage report.",
        "projects.project1.achievement4": "SonarQube: Static code analysis and continuous quality metrics.",
        "projects.project1.achievement5": "Docker: Containerization of the Spring Boot application.",
        "projects.project1.achievement6": "Docker Compose: Docker container orchestration.",
        "projects.project1.achievement7": "Nexus: Centralized management of artifacts and Docker images.",
        "projects.project1.achievement8": "Prometheus: Collection and monitoring of application metrics.",
        "projects.project1.achievement9": "Grafana: Visualization of performance and health dashboards.",
        "projects.project1.achievement10": "Trivy: Docker image security scanning.",
        
        // Project 2
        "projects.project2.title": "Cloud Integration and FullStack Web Development Project (Java/Angular)",
        "projects.project2.subtitle": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "projects.project2.description": "Creation of a private cloud infrastructure with OpenStack, development of a full-stack web application for collaboration and mutual aid between ESPRIT students, deployment of the application on Kubernetes (OpenStack) and on Azure Kubernetes Service (AKS).",
        "projects.project2.achievement1": "Private cloud infrastructure with OpenStack services (Horizon, Magnum, Heat, Neutron...).",
        "projects.project2.achievement2": "REST API development on backend with Spring Boot.",
        "projects.project2.achievement3": "REST API testing with Postman.",
        "projects.project2.achievement4": "User interface development with Angular and integration with backend.",
        "projects.project2.achievement5": "Version management and collaboration with Git.",
        "projects.project2.achievement6": "Application containerization with Docker and Docker Compose.",
        "projects.project2.achievement7": "Multi-container application deployment on Kubernetes cluster (OpenStack) and on Azure Kubernetes Service (AKS).",
        
        // Project 3
        "projects.project3.title": "Web and Desktop Development Project",
        "projects.project3.subtitle": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "projects.project3.description": "Development of a web and desktop application for organizing and managing car races.",
        "projects.project3.achievement1": "Development of the Symfony 5 web application with MVC architecture.",
        "projects.project3.achievement2": "Development of the desktop application with JavaFX with modern interface.",
        "projects.project3.achievement3": "Synchronization between web and desktop application.",
        
        // Campus Involvement Section
        "campus.title": "Campus Involvement",
        "campus.aiesec.title": "AIESEC Tunis - Bardo Local Committee",
        "campus.aiesec.duration": "Active Member | 2021 - 2023",
        "campus.aiesec.year2.title": "2022-2023: Talent Acquisition Department",
        "campus.aiesec.year2.role": "Talent Acquisition Manager",
        "campus.aiesec.year2.task1": "Complete management of the recruitment process.",
        "campus.aiesec.year2.task2": "Integration and follow-up of members.",
        "campus.aiesec.year2.task3": "Implementation of mentoring programs for talent development.",
        "campus.aiesec.year1.title": "2021-2022: Business Development & Sponsoring Department",
        "campus.aiesec.year1.role": "Member - Partnership Officer",
        "campus.aiesec.year1.task1": "Market research to identify potential partner companies.",
        "campus.aiesec.year1.task2": "Telephone contact with companies.",
        "campus.aiesec.year1.task3": "Organization of partnership meetings and presentation of AIESEC benefits.",
        
        // Courses & Certifications
        "courses.title": "Courses & Certifications",
        "courses.cert1.title": "Microsoft Azure Fundamentals Courses (AZ-900)",
        "courses.cert1.issuer": "Coursera | 2024",
        "courses.cert2.title": "Honoris Sustainability, Work Ethics & Gender Equity",
        "courses.cert2.issuer": "Honoris Online Academy | 2024",
        "courses.view": "View Certificate",
        
        // Contact Section
        "contact.title": "Contact Me",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.location": "Location",
        "contact.location.value": "Tunis, Tunisia",
        "contact.availability": "Availability",
        "contact.availability.value": "Open to Full-Stack, Cloud/DevOps and AI opportunities",
        "contact.note": "Feel free to contact me via email or LinkedIn to discuss collaborations or opportunities."
    },
    fr: {
        // Navigation (French text from HTML - included for completeness)
        "name": "Asma CHOUAIBI",
        "title": "Ingénieure Informatique",
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.experience": "Expérience",
        "nav.education": "Éducation",
        "nav.skills": "Compétences",
        "nav.languages": "Langues",
        "nav.projects": "Projets",
        "nav.campus": "Implication",
        "nav.courses": "Certifications",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.greeting": "Bonjour, je suis <span class='highlight'>Asma CHOUAIBI</span>",
        "hero.subtitle": "Ingénieure Informatique (Développeuse FullStack Web / Cloud et Devops / Passionnée d'IA)",
        "hero.cta": "Contactez-moi",
        
        // About Section
        "about.title": "À propos de moi",
        "about.para1": "Je suis une jeune ingénieure informatique passionnée et récemment diplômée, avec une expérience professionnelle variée acquise à travers plusieurs stages en entreprise. Mon parcours combine à la fois une solide formation académique et une pratique concrète du développement dans différents environnements.",
        "about.para2": "Je communique facilement en français et en anglais, ce qui me permet de travailler efficacement dans des contextes internationaux. Dotée d'une grande curiosité intellectuelle, j'aime apprendre en continu et m'adapter aux nouvelles technologies. Mon expérience en travail d'équipe, renforcée par mon engagement associatif, m'a enseigné l'importance de la collaboration et de l'écoute pour mener des projets à succès.",
        "about.para3": "Je recherche aujourd'hui à rejoindre une équipe dynamique où je pourrais contribuer à des projets innovants tout en continuant à développer mes compétences dans un environnement stimulant et bienveillant.",
        "about.email": "Email:",
        "about.location": "Localisation:",
        "about.location.value": "Tunis, Tunisie",
        "about.availability": "Disponibilité:",
        "about.availability.value": "Ouverte aux opportunités",
        
        // Experience Section
        "experience.title": "Expérience Professionnelle",
        "experience.internship": "Stage",
        "experience.achievements": "Principales Réalisations",
        
        // Job 1
        "experience.job1.title": "Développeuse Web Java(Spring) | Low-Code",
        "experience.job1.company": "Wevioo, Tunis, Tunisie",
        "experience.job1.achievement1": "Analyse des besoins métiers, conception et développement d'une application métier de gestion de projets basée sur la plateforme Low-Code Joget DX 8, avec personnalisation de la logique applicative et développement de composants spécifiques en Java.",
        "experience.job1.achievement2": "Transformation de l'application web en application mobile Android via Apache Cordova, avec automatisation de la génération des APK à l'aide d'un pipeline CI/CD GitHub Actions.",
        "experience.job1.achievement3": "Développement d'interfaces utilisateur spécifiques en HTML, CSS et JavaScript.",
        "experience.job1.achievement4": "Développement d'un plugin personnalisé en Java (Spring) pour l'envoi de notifications push su téléphone via Firebase.",
        "experience.job1.achievement5": "Développement de scripts Java (BeanShell) exécutant des requêtes SQL pour l'extraction et la transformation des données en JSON.",
        "experience.job1.achievement6": "Analyse des données collectées et visualisation d'indicateurs clés (KPI) à l'aide de Chart.js pour le suivi et l'aide à la décision.",
        "experience.job1.achievement7": "Travail en environnement Agile SCRUM, avec collaboration étroite avec les équipes métier (user stories, sprints, réunions).",
        "experience.job1.achievement8": "Participation aux tests fonctionnels, à la correction des anomalies, à la maintenance applicative et aux ajustements selon les retours utilisateurs.",
        
        // Job 2
        "experience.job2.title": "Développeuse Web FullStack Java(Spring Boot)/Angular",
        "experience.job2.company": "Sage Tunisia, Tunis, Tunisie",
        "experience.job2.achievement1": "Analyse des besoin métiers, conception et développement d'une application web full-stack de gestion des absences et des congés des employés.",
        "experience.job2.achievement2": "Développement d'API REST en Java (Spring Boot) et intégration du front-end Angular.",
        "experience.job2.achievement3": "Gestion des utilisateurs et de la sécurité avec Spring Security.",
        "experience.job2.achievement4": "Accès et persistance des données via Spring Data JPA sur une base MySQL.",
        
        // Job 3
        "experience.job3.title": "Administrateur système et réseau",
        "experience.job3.company": "Marquardt Tunisia, Tunis, Tunisie",
        "experience.job3.achievement1": "Configuration et déploiement de Switchs Cisco 2960 pour l'infrastructure réseau de l'entreprise.",
        "experience.job3.achievement2": "Mise en place d'une supervision réseau avec Nagios pour le monitoring des Switchs.",
        "experience.job3.achievement3": "Développement de scripts d'automatisation (AutoIt) pour la configuration et le déploiement des postes de travail.",
        
        // Job 4
        "experience.job4.title": "Analyste de données | Business intelligence",
        "experience.job4.company": "Gérance Informatique, Tunis, Tunisie",
        "experience.job4.achievement1": "Développement d'une application Splunk dédiée à la collecte, centralisation et analyse des données de performance système (Windows et Linux).",
        "experience.job4.achievement2": "Implémentation de scripts PowerShell et Bash pour la collecte des logs de performance des systèmes.",
        "experience.job4.achievement3": "Mise en place d'un Data Lake pour le stockage et l'organisation des logs système.",
        "experience.job4.achievement4": "Analyse des données collectées et création de dashboards interactifs, rapports automatisés et alertes en temps réel sur Splunk",
        "experience.job4.achievement5": "Gestion du projet selon la méthode Agile Scrum BI",
        
        // Education Section
        "education.title": "Éducation",
        "education.view-diploma": "Voir le diplôme",
        "education.diploma3.alt": "Diplôme d'Ingénieur",
        "education.diploma2.alt": "Licence en Informatique de Gestion",
        "education.diploma1.alt": "Baccalauréat Sciences Expérimentales",
        
        // Degree 1
        "education.degree1.title": "Diplôme National d'Ingénieur en Informatique",
        "education.degree1.school": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "education.degree1.details": "Spécialité: Développement Web, Cloud & DevOps | Mention: Très Bien | Moyenne : 16.03",
        
        // Degree 2
        "education.degree2.title": "Licence National en Informatique de Gestion",
        "education.degree2.school": "Institut Supérieur de Gestion de Tunis (ISGT)",
        "education.degree2.details": "Spécialisation: Informatique Décisionnelle (BI) | Mention: Bien | Moyenne : 15.34",
        
        // Degree 3
        "education.degree3.title": "Baccalauréat Sciences Expérimentales",
        "education.degree3.school": "Lycée Bardo",
        "education.degree3.details": "Mention: Bien | Moyenne 14.55",
        
        // Skills Section
        "skills.title": "Compétences",
        "skills.langages": "Langages de programmation",
        "skills.frontend": "Framework de développement Web Frontend",
        "skills.backend": "Framework de développement Web Backend",
        "skills.BD": "Bases de données",
        "skills.devops": "Cloud, DevOps & CI/CD",
        "skills.administration": "Administration système et réseau",
        "skills.agile": "Méthodes Agile",
        "skills.analyse": "Analyse des données",
        "skills.tests": "Tests & Assurance Qualité",
        
        // Languages Section
        "languages.title": "Langues",
        "languages.arabic": "Arabe",
        "languages.french": "Français",
        "languages.english": "Anglais",
        "languages.level.native": "Langue maternelle",
        "languages.level.b2": "Niveau B2",
        
        // Projects Section
        "projects.title": "Projets Académiques",
        "projects.description": "Description du projet",
        "projects.achievements": "Réalisations Techniques",
        "projects.view.code": "Voir le code",
        "projects.view.github": "Voir le code source",
        
        // Project 1
        "projects.project1.title": "Pipeline CI/CD DevOps avec Jenkins",
        "projects.project1.subtitle": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "projects.project1.description": "Implémentation d'un pipeline CI/CD complet pour une application Spring Boot, automatisant l'intégration, les tests, la sécurité, la conteneurisation et le déploiement avec monitoring en temps réel.",
        "projects.project1.achievement1": "Jenkins : Orchestration complète du pipeline CI/CD.",
        "projects.project1.achievement2": "Git : Gestion de versions et intégration continue.",
        "projects.project1.achievement3": "JUnit : Tests unitaires automatisés avec rapport de couverture de code.",
        "projects.project1.achievement4": "SonarQube : Analyse statique de code et métriques de qualité en continu.",
        "projects.project1.achievement5": "Docker : Conteneurisation de l'application Spring Boot.",
        "projects.project1.achievement6": "Docker Compose : Orchestration du contenaire Docker.",
        "projects.project1.achievement7": "Nexus : Gestion centralisée des artefacts et image Docker.",
        "projects.project1.achievement8": "Prometheus : Collecte et monitoring des métriques applicatives.",
        "projects.project1.achievement9": "Grafana : Visualisation des dashboards de performance et santé.",
        "projects.project1.achievement10": "Trivy : Scan de sécurité de l'image Docker.",
        
        // Project 2
        "projects.project2.title": "Projet d'intégration Cloud et développement Web FullStack(Java/Angular)",
        "projects.project2.subtitle": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "projects.project2.description": "Création d'une infrastructure cloud privée avec d'OpenStack, développement d'une application web full-stack pour la collaboration et l'entraide entre les étudiants d'ESPRIT, déploiement de l'application sur Kubernetes (OpenStack) et sur Azure Kubernetes Service(AKS).",
        "projects.project2.achievement1": "Infrastructure Cloud privée avec les services d'Openstack (Horizon, Magnum, Heat, Neutron...).",
        "projects.project2.achievement2": "Développement d'API REST coté backend avec Spring Boot.",
        "projects.project2.achievement3": "Test des API REST avec Postaman.",
        "projects.project2.achievement4": "Développemnt des interfaces utilisateurs avec Angular et integration avec le backend.",
        "projects.project2.achievement5": "Gestion des versions et collaboration avec Git.",
        "projects.project2.achievement6": "Conteneurisation de l'application avec Docker et Docker compose.",
        "projects.project2.achievement7": "Déploiement de l'application multi-conteneurs sur le cluster Kubernetes (Openstack) et sur Azure Kubernetes Service (AKS).",
        
        // Project 3
        "projects.project3.title": "Projet de développemnt Web et Desktop",
        "projects.project3.subtitle": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "projects.project3.description": "Développemnt d'un application web et desktop pour l'organisation et la getion descourses de voitures.",
        "projects.project3.achievement1": "Développemnt de l'application web Symfony 5 avec architecture MVC",
        "projects.project3.achievement2": "Développemnt de l'application desktop avec JavaFX avec interface moderne",
        "projects.project3.achievement3": "Synchronisation entre l'application web et desktop",
        
        // Campus Involvement Section
        "campus.title": "Vie associative",
        "campus.aiesec.title": "AIESEC Tunis - Comité Local Bardo",
        "campus.aiesec.duration": "Membre Actif | 2021 - 2023",
        "campus.aiesec.year2.title": "2022-2023 : Département Talent Acquisition",
        "campus.aiesec.year2.role": "Talent Acquisition Manager",
        "campus.aiesec.year2.task1": "Gestion complète du processus de recrutement Gestion du recrutement.",
        "campus.aiesec.year2.task2": "Intégration et du suivi des membres",
        "campus.aiesec.year2.task3": "Mise en place de programmes de mentorat pour le développement des talents",
        "campus.aiesec.year1.title": "2021-2022 : Département Business Development & Sponsoring",
        "campus.aiesec.year1.role": "Membre - Chargée de Partenariats",
        "campus.aiesec.year1.task1": "Réalisation d'études de marché pour identifier les entreprises partenaires potentielles",
        "campus.aiesec.year1.task2": "Prise de contact téléphonique avec les entreprises",
        "campus.aiesec.year1.task3": "Organisation de réunions de partenariat et présentation des avantages AIESEC",
        
        // Courses & Certifications
        "courses.title": "Cours & Certifications",
        "courses.cert1.title": "Microsoft Azure Fundamentals Courses(AZ-900)",
        "courses.cert1.issuer": "Coursera | 2024",
        "courses.cert2.title": "Honoris Sustainability, Work Ethics & Gender Equity",
        "courses.cert2.issuer": "Honoris Online Academy | 2024",
        "courses.view": "Voir le certificat",
        
        // Contact Section
        "contact.title": "Contactez-moi",
        "contact.email": "Email",
        "contact.phone": "Téléphone",
        "contact.location": "Localisation",
        "contact.location.value": "Tunis, Tunisie",
        "contact.availability": "Disponibilité",
        "contact.availability.value": "Ouverte aux opportunités en développement Full-Stack, Cloud/DevOps et IA",
        "contact.note": "N'hésitez pas à me contacter par email ou LinkedIn pour discuter de collaborations ou opportunités."
    }
};

// Language switching function
// Language switching function - VERSION CORRIGÉE
function switchLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if the element is a nav link (contains an icon)
            if (element.closest('.nav-links')) {
                // For nav links, only update the text content of the span
                const span = element.querySelector('span');
                if (span) {
                    span.textContent = translations[lang][key];
                }
            } else {
                // For other elements, update normally
                const translation = translations[lang][key];
                if (translation.includes('<span') || translation.includes('<i>') || translation.includes('<br>')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        }
    });
    
    // Update form placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update image alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            element.alt = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update page title
    const name = document.querySelector('[data-i18n="name"]')?.textContent || 'Asma CHOUAIBI';
    const title = document.querySelector('[data-i18n="title"]')?.textContent || 'Ingénieure Informatique';
    document.title = `${name} | ${title}`;
    
    // Save preference to localStorage
    localStorage.setItem('preferred-language', lang);
}

// ===== YOUR EXISTING FUNCTIONALITY =====

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// Update active link on scroll
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if(scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Form submission handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Get success message based on current language
            const currentLang = document.documentElement.lang || 'fr';
            const successMessages = {
                en: 'Thank you for your message! I\'ll get back to you soon.',
                fr: 'Merci pour votre message! Je vous répondrai bientôt.'
            };
            
            // Show appropriate success message
            alert(successMessages[currentLang] || successMessages.en);
            this.reset();
        });
    }
}

// Add animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements to animate
    document.querySelectorAll('.timeline-item, .education-card, .involvement-card, .cert-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations
function initHeroAnimation() {
    const hero = document.querySelector('.hero');
    if(hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            hero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 300);
    }
}

// ===== MAIN INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functions
    initSmoothScrolling();
    initActiveNavOnScroll();
    initContactForm();
    initScrollAnimations();
    initHeroAnimation();
    initDiplomaLightbox();
    initJenkinsfileLightbox();
    initPDFDownloads(); 
    // Initialize language system
    // Check for saved language preference or default to French
    const savedLang = localStorage.getItem('preferred-language') || 'fr';
    
    // Set up language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Apply initial language
    switchLanguage(savedLang);
});

// Lightbox functionality for diploma photos
function initDiplomaLightbox() {
    const lightbox = document.getElementById('diploma-lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    
    // Open lightbox when clicking on diploma thumbnails
    document.querySelectorAll('.photo-thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const fullsizeImage = this.getAttribute('data-fullsize');
            const altText = this.querySelector('img').getAttribute('alt');
            
            lightboxImage.src = fullsizeImage;
            lightboxImage.alt = altText;
            lightboxCaption.textContent = altText;
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            lightboxImage.src = '';
        }, 300);
    }
    
    // Close on X button click
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // Close on mobile swipe down
    let touchStartY = 0;
    lightbox.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    });
    
    lightbox.addEventListener('touchend', function(e) {
        const touchEndY = e.changedTouches[0].clientY;
        if (touchEndY - touchStartY > 100) { // Swiped down
            closeLightbox();
        }
    });
}

// Fonction pour le lightbox du Jenkinsfile
function initJenkinsfileLightbox() {
    const jenkinsfileLightbox = document.getElementById('jenkinsfile-lightbox');
    const jenkinsfileCode = document.querySelector('.jenkinsfile-code');
    const copyBtn = document.querySelector('.copy-jenkinsfile-btn');
    const closeBtn = jenkinsfileLightbox.querySelector('.lightbox-close');
    
    // Ouvrir le lightbox
    document.querySelectorAll('.view-jenkinsfile-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            jenkinsfileLightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Fermer le lightbox
    function closeLightbox() {
        jenkinsfileLightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    
    // Fermer en cliquant en dehors
    jenkinsfileLightbox.addEventListener('click', function(e) {
        if (e.target === jenkinsfileLightbox) {
            closeLightbox();
        }
    });
    
    // Copier le code
    copyBtn.addEventListener('click', function() {
        const codeToCopy = jenkinsfileCode.textContent;
        
        navigator.clipboard.writeText(codeToCopy)
            .then(() => {
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copié!';
                this.classList.add('copied');
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.classList.remove('copied');
                }, 2000);
            })
            .catch(err => {
                console.error('Erreur de copie:', err);
            });
    });
    
    // Fermer avec Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && jenkinsfileLightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Fonction pour gérer les téléchargements PDF
function initPDFDownloads() {
    const pdfFiles = {
        'az900-module1.pdf': 'assets/PDF/Coursera 2KP2WEFELPLV.pdf',
        'az900-module2.pdf': 'assets/PDF/Coursera_course2.pdf',
        'az900-module3.pdf': 'assets/PDF/Course3.pdf',
        'az900-module4.pdf': 'assets/PDF/Course4.pdf'
    };
    
    // Ajouter l'événement click sur chaque bouton
    document.querySelectorAll('.download-pdf-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const pdfName = this.getAttribute('data-pdf');
            const pdfPath = pdfFiles[pdfName];
            
            if (pdfPath) {
              
                const downloadLink = document.createElement('a');
                downloadLink.href = pdfPath;
                downloadLink.download = pdfName;
                downloadLink.target = '_blank'; 
                
               
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                
                
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Téléchargé!';
                this.style.background = '#10b981';
                this.style.borderColor = '#10b981';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = '';
                    this.style.borderColor = '';
                }, 2000);
            } else {
                alert('Fichier non disponible');
            }
        });
    });
}






