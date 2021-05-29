import { useMemo } from "react";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import config from "../config";
import { watchUser } from "./user/saga";
import { watchAuth } from "./auth/saga";
import { watchPost } from "./posts/saga";
import { rootReducer } from "./rootReducer";

let store;
const sagaMiddleware = createSagaMiddleware();

// Persist config
const persistConfig = {
  key: config.PERSIST_KEY,
  storage,
};

// Persist reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

function initStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

store = initializeStore(undefined);

// Saga middleware
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchPost);
sagaMiddleware.run(watchUser);

// Store perstitor
let persistor = persistStore(store);

export { store, persistor };
