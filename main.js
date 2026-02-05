document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const horoscopeSelect = document.getElementById('horoscope-select');
  const auspiciousNumberSpan = document.getElementById('auspicious-number');
  const auspiciousColorSpan = document.getElementById('auspicious-color');
  const colorBox = document.getElementById('color-box');

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
      colorBox.style.backgroundColor = '#ccc';
    }
  });
});
