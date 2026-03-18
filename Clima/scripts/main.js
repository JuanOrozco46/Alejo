document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const cityInput = document.getElementById('city-input');

    //localStorage al iniciar
    const savedData = persistance.load();
    if (savedData) {
        state.setWeather(savedData);
        ui.renderWeather(savedData);
    }

    //búsqueda
    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evitar recarga
        const city = cityInput.value.trim();
        if (!city) return;

        ui.clearMessage();

        try {
            // Obtener coordenadas
            const location = await weatherService.getCoordinates(city);
            
            // Obtener clima con las coordenadas
            const weather = await weatherService.getWeather(location.latitude, location.longitude);
            
            //Ensamblar los datos
            const finalData = {
                city: location.name,
                temperature: weather.temperature,
                windspeed: weather.windspeed,
                weathercode: weather.weathercode,
                time: weather.time
            };

            //actualizar estado
            state.setWeather(finalData);
            persistance.save(finalData);
            ui.renderWeather(finalData);
            
            cityInput.value = ''; //Limpiar campo
            
        } catch (error) {
            //errores que vengan de service.js
            ui.showError(error.message);
        }
    });
});