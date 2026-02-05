document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const horoscopeSelect = document.getElementById('horoscope-select');
  const auspiciousNumberSpan = document.getElementById('auspicious-number');
  const auspiciousColorSpan = document.getElementById('auspicious-color');
  const colorBox = document.getElementById('color-box');
  const modeToggleBtn = document.getElementById('mode-toggle');
  const body = document.body;
  const quoteOfTheDayElement = document.getElementById('quote-of-the-day');

  const encouragingQuotes = [
    "The best way to predict the future is to create it.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams."
  ];

  const displayRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * encouragingQuotes.length);
    quoteOfTheDayElement.textContent = encouragingQuotes[randomIndex];
  };

  // Display initial quote
  displayRandomQuote();

  const horoscopeData = {
    aries: { number: 9, color: 'Red' },
    taurus: { number: 6, color: 'Green' },
    gemini: { number: 5, color: 'Yellow' },
    cancer: { number: 2, color: 'White' },
    leo: { number: 1, color: 'Gold' },
    virgo: { number: 5, color: 'Gray' },
    libra: { number: 6, color: 'Pink' },
    scorpio: { number: 9, color: 'Black' },
    sagittarius: { number: 3, color: 'Purple' },
    capricorn: { number: 8, color: 'Brown' },
    aquarius: { number: 4, color: 'Blue' },
    pisces: { number: 7, color: 'Sea Green' },
  };

  // --- Day/Night Mode Logic ---
  const setMode = (isDarkMode) => {
    if (isDarkMode) {
      body.classList.add('dark-mode');
      modeToggleBtn.textContent = 'Toggle Day Mode';
    } else {
      body.classList.remove('dark-mode');
      modeToggleBtn.textContent = 'Toggle Night Mode';
    }
  };

  // Load mode preference from localStorage
  const savedMode = localStorage.getItem('darkMode');
  const isDarkMode = savedMode === 'true'; // Convert string to boolean
  setMode(isDarkMode);

  modeToggleBtn.addEventListener('click', () => {
    const currentMode = body.classList.contains('dark-mode');
    setMode(!currentMode);
    localStorage.setItem('darkMode', !currentMode);
  });
  // --- End Day/Night Mode Logic ---


  generateBtn.addEventListener('click', () => {
    const selectedHoroscope = horoscopeSelect.value;
    const data = horoscopeData[selectedHoroscope];

    if (data) {
      auspiciousNumberSpan.textContent = data.number;
      auspiciousColorSpan.textContent = data.color;
      colorBox.style.backgroundColor = data.color.toLowerCase().replace(/\s/g, ''); // Simple conversion for CSS color
    } else {
      auspiciousNumberSpan.textContent = '--';
      auspiciousColorSpan.textContent = '--';
      colorBox.style.backgroundColor = 'var(--color-box-border)'; // Use CSS variable for default
    }
    displayRandomQuote(); // Display a new quote after each generation
  });
});