// select dom elements
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// action identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const ITEST = 'iTest';

// initial state
const initialState = {
    value: 0,
    properties: {
        a: 5,
        b: 10,
    },
};

// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    }
    else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        };
    }
    else if (action.type === ITEST) {
        return {
            ...state,
            properties: {
                ...state.properties,
                b: state.properties.b + 1,
            },
        };
    }
    else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}

// update ui initially
render();

store.subscribe(render);

// button click listener
incrementEl.addEventListener('click', () => {
    store.dispatch(increment(10))
})
decrementEl.addEventListener('click', () => {
    store.dispatch(decrement(5))
})