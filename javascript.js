document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
  // 3

  let dayCount = 1;

function addNewDay() {
  dayCount++;
  const itineraryContainer = document.getElementById('itinerary-container');
  const newDayHtml = `
    <div class="row itinerary-day">
      <div class="col s12">
        <h5>Day ${dayCount}</h5>
        <div class="input-field">
          <input type="text" class="day-activities validate">
          <label>Activities</label>
        </div>
        <div class="input-field">
          <input type="text" class="day-attractions validate">
          <label>Attractions</label>
        </div>
        <div class="input-field">
          <input type="text" class="day-accommodations validate">
          <label>Accommodations</label>
        </div>
      </div>
    </div>`;
  itineraryContainer.insertAdjacentHTML('beforeend', newDayHtml);
}

function saveAsText() {
  const itineraryDays = document.querySelectorAll('.itinerary-day');
  let textContent = '';
  itineraryDays.forEach((day, index) => {
    const dayNumber = index + 1;
    const activities = day.querySelector('.day-activities').value;
    const attractions = day.querySelector('.day-attractions').value;
    const accommodations = day.querySelector('.day-accommodations').value;
    textContent += `Day ${dayNumber}:
Activities: ${activities}
Attractions: ${attractions}
Accommodations: ${accommodations}
`;
  });

  const blob = new Blob([textContent], { type: 'text/plain' });
  const downloadLink = document.createElement('a');
  downloadLink.download = 'itinerary.txt';
  downloadLink.href = window.URL.createObjectURL(blob);
  downloadLink.click();
}

function saveAsPDF() {
  // Implementation for saving as PDF
}

  // 4
  // Inside script.js
  // 

document.addEventListener('DOMContentLoaded', function () {
// Simulating receiving travel alerts
const alertNotifications = document.getElementById('alertNotifications');

// Simulate receiving an alert after 3 seconds
setTimeout(function () {
  alertNotifications.innerHTML = '<p class="text-red-500">Flight delayed: Your flight from New York to London has been delayed by 1 hour.</p>';
}, 3000);
});
// 5
// Inside script.js 

document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('currencyConverterForm');
const conversionResult = document.getElementById('conversionResult');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  // Here you would call your currency conversion API
  // For simplicity, let's just display the conversion result
  const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
  if (isNaN(convertedAmount)) {
    conversionResult.innerText = 'Invalid input. Please try again.';
  } else {
    conversionResult.innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  }
});

function convertCurrency(amount, fromCurrency, toCurrency) {
  // Simulate currency conversion (replace with actual API call)
  const conversionRates = {
    'USD': { 'EUR': 0.82, 'GBP': 0.72 },
    'EUR': { 'USD': 1.22, 'GBP': 0.88 },
    'GBP': { 'USD': 1.39, 'EUR': 1.14 },
    'IND': { 'USD': 81.04, 'IND': 1.00}
    
  };

  if (fromCurrency in conversionRates && toCurrency in conversionRates[fromCurrency]) {
    return amount * conversionRates[fromCurrency][toCurrency];
  } else {
    return NaN;
  }
}
});
// 6
// Inside script.js

document.addEventListener('DOMContentLoaded', function () {
const sharePlanBtn = document.getElementById('sharePlanBtn');
const shareExperienceBtn = document.getElementById('shareExperienceBtn');
const sharePhotoBtn = document.getElementById('sharePhotoBtn');

sharePlanBtn.addEventListener('click', function () {
  shareOnSocialMedia('Share my travel plan!');
});

shareExperienceBtn.addEventListener('click', function () {
  shareOnSocialMedia('Check out my amazing travel experience!');
});

sharePhotoBtn.addEventListener('click', function () {
  shareOnSocialMedia('Just captured this beautiful moment during my travels!');
});

function shareOnSocialMedia(message) {
  // Simulate sharing on social media (replace with actual social media API)
  console.log('Sharing on social media:', message);
  // In a real-world scenario, you would implement functionality to share on social media platforms
}
});
// 7
// Inside script.js

document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('weatherForecastForm');
const weatherForecastResult = document.getElementById('weatherForecastResult');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;

  // Here you would call your weather forecast API
  // For simplicity, let's just display a mock result
  const weatherForecast = getWeatherForecast(destination, date);
  weatherForecastResult.innerText = weatherForecast;
});

function getWeatherForecast(destination, date) {
  // Simulate weather forecast retrieval (replace with actual API call)
  return `Weather forecast for ${destination} on ${date}: Sunny with a high of 25°C.`;
}
});
// 8
// Inside script.js

document.addEventListener('DOMContentLoaded', function () {
const saveDataForm = document.getElementById('saveDataForm');
const dataInput = document.getElementById('data');
const offlineDataDisplay = document.getElementById('offlineData');

saveDataForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = dataInput.value;

  // Save data to local storage
  localStorage.setItem('travelData', data);

  // Display confirmation message
  offlineDataDisplay.innerText = 'Data saved offline successfully!';
});

// Retrieve and display saved data on page load
const savedData = localStorage.getItem('travelData');
if (savedData) {
  offlineDataDisplay.innerText = savedData;
}
});
// 9
// Inside script.js

document.addEventListener('DOMContentLoaded', function () {
const speakButton = document.getElementById('speakButton');
const fontSizeSelect = document.getElementById('fontSizeSelect');

// Text-to-Speech Functionality
speakButton.addEventListener('click', function () {
  const textToSpeak = document.getElementById('accessibilityFeatures').innerText;

  // Create a new speech synthesis object
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(textToSpeak);

  // Speak the text
  synth.speak(utterance);
});

// Font Size Customization
fontSizeSelect.addEventListener('change', function () {
  const selectedFontSize = fontSizeSelect.value;

  // Apply selected font size to the container
  document.getElementById('accessibilityFeatures').style.fontSize = selectedFontSize;
});
});
