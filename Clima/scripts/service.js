const weatherService = {
    async getCoordinates(city) {
        try {
            // Geocodificación
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=es&format=json`);
            if (!response.ok) throw new Error('Error al conectar con la API.');
            
            const data = await response.json();
            if (!data.results || data.results.length === 0) {
                throw new Error('La ciudad no existe o no arrojó resultados.'); // Manejo de ciudad inexistente
            }
            
            return {
                name: data.results[0].name,
                latitude: data.results[0].latitude,
                longitude: data.results[0].longitude
            };
        } catch (error) {
            throw error;
        }
    },

    async getWeather(lat, lon) {
        try {
            // Consulta de clima actual
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
            if (!response.ok) throw new Error('Ocurrió un error al consultar el clima.');
            
            const data = await response.json();
            return data.current_weather;
        } catch (error) {
            throw error;
        }
    }
};