import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//initail state
const initailState={}
// Thunk middleware for Redux.
const middleware=[thunk];
//creating a store 
//added a reducer, initialstate , middleware::thunk, i.e devtools(thunk)
const store=createStore(rootReducer,
    initailState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;


 