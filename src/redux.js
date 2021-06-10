// import { createStore } from 'redux';

const { createStore } = require("redux");

// //ACTION
// function increment() {
//     return {
//         type: 'INCREMENT'
//     }
// }

// function decrement() {
//     return {
//         type: 'DECREMENT'
//     }
// }

// //REDUCER
// function counter(state = 0, action) {
//     switch(action.type) {
//         case 'INCREMENT': 
//             return state + 1;
//             break;
//         case 'DECREMENT':
//             return state - 1;
//             break;
//         default: 
//             return null;
//             break;
//     }
// }

// //STORE
// let store = createStore(counter);

// //Display Store
// store.subscribe(() => console.log(store.getState()));

// //DISPATCH
// store.dispatch(increment());