const state = {
    characterList: [],
    isLoading: false,
    isSuccess: false,
};

export function getState(key) {
    return state[key];
}

export function setState(key, newValue) {
    state[key] = newValue;
}