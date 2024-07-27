import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";
import { Coins, Stocks } from "../dataTypes";
import { thunk } from "redux-thunk";

export interface AppStore{
    val:number,
    coins:Coins[],
    stocks:Stocks[],
}

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const createStoreWithMiddleware = composeEnhansers(applyMiddleware(thunk))(
    createStore
  );
  
  export const store = createStoreWithMiddleware(reducers);