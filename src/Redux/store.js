import { legacy_createStore as createStore } from "redux";

import { counterReducer } from "./reducer";

export const store = createStore(counterReducer)

store.subscribe(() =>{
    console.log("Suscribe",store.getState());
})
console.log(store)