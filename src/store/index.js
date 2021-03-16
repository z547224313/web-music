import {createStore,applyMiddleware, compose } from "redux";
import reducer from "@/store/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
))

export default store
