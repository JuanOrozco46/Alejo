const ui = {
    elements: {
        container: document.getElementById('weather-container'),
        cityName: document.getElementById('city-name'),
        temperature: document.getElementById('temperature'),
        windspeed: document.getElementById('windspeed'),
        weatherCode: document.getElementById('weather-code'),
        measurementTime: document.getElementById('measurement-time'),
        messageContainer: document.getElementById('message-container')
    },

    renderWeather(weatherData) {
        this.clearMessage();
        this.elements.cityName.textContent = weatherData.city;
        this.elements.temperature.textContent = weatherData.temperature;
        this.elements.windspeed.textContent = weatherData.windspeed;
        this.elements.weatherCode.textContent = this.translateCode(weatherData.weathercode);
        this.elements.measurementTime.textContent = weatherData.time.replace('T', ' '); // Formatear hora
        
        this.elements.container.style.display = 'block';
    },

    showError(message) {
        this.elements.container.style.display = 'none';
        this.elements.messageContainer.innerHTML = `<div class="error-message">${message}</div>`;
    },

    clearMessage() {
        this.elements.messageContainer.innerHTML = '';
    },

    // Traduce el código de clima a una descripción legible
    translateCode(code) {
        const codes = {
            0: 'Cielo despejado',
            1: 'Mayormente despejado',
            2: 'Parcialmente nublado',
            3: 'Nublado',
            45: 'Niebla',
            51: 'Llovizna',
            61: 'Lluvia leve',
            71: 'Nieve',
            95: 'Tormenta'
        };
        return codes[code] || `Código ${code} (Desconocido)`;
    }
};