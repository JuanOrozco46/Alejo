const state = {
    userList: [],
    postList: [],
    isLoading: false,
    isSuccess: false,
};

export function getState(key) {
    return state[key];
}

export function setState(key, newValue) {
    state[key] = newValue;
}

/* const obj = { name: "Alejo" };

obj.name;

obj["name"];

getState("isLoading") */