// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
}
themeToggle.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Language Toggle
const languageSelector = document.getElementById('language-selector');
const translations = {
    en: {
        home: "Home",
        about: "About",
        events: "Events",
        mainTitle: "EUS Cultural Center",
        mainSubtitle: "A place where culture, art, and community meet",
        aboutTitle: "About Us",
        aboutText: "EUS Cultural Center is a vibrant community space dedicated to promoting art, culture, and meaningful connections. Founded in 2020, we've been hosting a diverse range of events including art exhibitions, concerts, workshops, and community gatherings.\n\nOur mission is to create an inclusive environment where everyone can experience the richness of culture and art, regardless of background. We believe that cultural experiences enrich our lives and bring communities together.",
        eventsTitle: "Upcoming Events",
        noEventsDate: "No events scheduled for this date.",
        noEventsMonth: "No events scheduled for this month.",
        copyright: "© 2025 EUS Cultural Center. All rights reserved.",
        sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat"
    },
    hu: {
        home: "Főoldal",
        about: "Rólunk",
        events: "Események",
        mainTitle: "EUS Kulturális Központ",
        mainSubtitle: "Ahol a kultúra, a művészet és a közösség találkozik",
        aboutTitle: "Rólunk",
        aboutText: "Az EUS Kulturális Központ egy élénk közösségi tér, amely a művészet, a kultúra és a jelentőségteljes kapcsolatok előmozdításának szenteli magát. A 2020-ban alapított központunk számos különféle eseménynek ad otthont, beleértve a művészeti kiállításokat, koncerteket, workshopokat és közösségi összejöveteleket.\n\nKüldetésünk egy olyan befogadó környezet megteremtése, ahol mindenki megtapasztalhatja a kultúra és a művészet gazdagságát, háttértől függetlenül. Hisszük, hogy a kulturális élmények gazdagítják életünket és összehozzák a közösségeket.",
        eventsTitle: "Közelgő Események",
        noEventsDate: "Nincsenek események erre a napra.",
        noEventsMonth: "Nincsenek események ebben a hónapban.",
        copyright: "© 2025 EUS Kulturális Központ. Minden jog fenntartva.",
        sun: "Vas", mon: "Hét", tue: "Kedd", wed: "Sze", thu: "Csüt", fri: "Pén", sat: "Szo"
    }
};

const savedLanguage = localStorage.getItem('language') || 'en';
setLanguage(savedLanguage);
languageSelector.value = savedLanguage;

languageSelector.addEventListener('change', function () {
    const language = this.value;
    setLanguage(language);
    localStorage.setItem('language', language);
});

function setLanguage(language) {
    document.getElementById('home-link').textContent = translations[language].home;
    document.getElementById('about-link').textContent = translations[language].about;
    document.getElementById('events-link').textContent = translations[language].events;
    document.getElementById('main-title').textContent = translations[language].mainTitle;
    document.getElementById('main-subtitle').textContent = translations[language].mainSubtitle;
    document.getElementById('about-title').textContent = translations[language].aboutTitle;
    document.getElementById('about-text-content').textContent = translations[language].aboutText;
    document.getElementById('events-title').textContent = translations[language].eventsTitle;
    document.getElementById('copyright-text').textContent = translations[language].copyright;
    generateCalendar(currentMonth, currentYear, language);
}
