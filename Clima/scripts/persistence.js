const STORAGE_KEY = 'weather_app_data';

const persistance = {
    save(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },
    
    load() {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    }
};