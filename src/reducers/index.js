import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import promise from "redux-promise";
import { createLogger } from "redux-logger";

import todos, * as fromTodos from "../reducers/todos";
import visibilityFilter from "../reducers/visibility-filter";
import persistedStore from "../storage/persisted-store";
import { loadState } from "../storage/local-store-data";

// const logger = store => {
//   return next => {
//     if (!console.group) {
//       return next;
//     }

//     return action => {
//       console.group(action.type);
//       console.log("%c prev state", "color: gray", store.getState());
//       console.log("%c action", "color: blue", action);
//       const returnValue = next(action);
//       console.log("%c next state", "color: green", store.getState());
//       console.groupEnd(action.type);
//       return returnValue;
//     };
//   };
// };

// const promise = store => {
//   return next => {
//     return action => {
//       if (typeof action.then === "function") {
//         return action.then(next);
//       }
//       return next(action);
//     };
//   };
// };

// const wrapDispatchWithMiddlewares = (store, middlewares) => {
//   middlewares.forEach(
//     middleware => (store.dispatch = middleware(store)(store.dispatch))
//   );
// };

// const reactTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// wrapDispatchWithMiddlewares(store, middlewares);

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }
  middlewares.push(promise);

  const store = createStore(
    combineReducers({ todos, visibilityFilter }),
    loadState() || persistedStore,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // autosave (needs to install lodash -lodash/throttle):
  // store.subscribe(throttle(() => {
  //   saveState({
  //     todos: store.getState().todos,
  //   });
  // }, 1000));

  return store;
};

export default configureStore;

// selectors:
export const getVisibleTodos = state =>
  fromTodos.getVisibleTodos(state.todos, state.visibilityFilter);

export const getFilter = state => state.visibilityFilter;
