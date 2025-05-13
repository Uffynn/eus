// Translations for both languages
const translations = {
  en: {
    welcome: "Welcome to EUS Kulturcentrum!",
    description: "This is a cultural center where you can find various events and activities.",
    calendarTitle: "Event Calendar"
  },
  hu: {
    welcome: "Üdvözlünk az EUS Kulturcentrumban!",
    description: "Ez egy kulturális központ, ahol különféle eseményeket és tevékenységeket találhatsz.",
    calendarTitle: "Eseménynaptár"
  }
};

// Set default language to English
let currentLanguage = "en";

// Function to update content based on the selected language
function setLanguage(lang) {
  currentLanguage = lang;

  document.getElementById("welcome").innerText = translations[lang].welcome;
  document.getElementById("description").innerText = translations[lang].description;
  document.getElementById("calendar-title").innerText = translations[lang].calendarTitle;
}

// Function to toggle between day and night mode
function toggleTheme() {
  document.body.classList.toggle("night-mode");
}

// Initialize the default language content
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLanguage);
});
