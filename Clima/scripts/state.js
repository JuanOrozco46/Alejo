const state = {
    currentWeather: null,
    
    setWeather(data) {
        this.currentWeather = data;
    },
    
    getWeather() {
        return this.currentWeather;
    }
};