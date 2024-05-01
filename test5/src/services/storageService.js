const WILLINGS_KEY = "willings";
const CITY_KEY = "city"

export const storageService = {
    saveWilling(willingData) {
        localStorage.setItem(WILLINGS_KEY, JSON.stringify(willingData));
    },
    getWillings() {
        return JSON.parse(localStorage.getItem(WILLINGS_KEY)) || [];
    },
    createUser(user) {
        const totalWillings = this.getWillings();
        totalWillings.push(user);
        localStorage.setItem(WILLINGS_KEY, JSON.stringify(totalWillings));
    },
    saveCity(citySelect) {
        localStorage.setItem(CITY_KEY, JSON.stringify(citySelect))
    },
    getCity() {
        return JSON.parse(localStorage.getItem(CITY_KEY)) || []
    },
    removeCity() {
        localStorage.removeItem(CITY_KEY)
    },
};
