import { createStore } from 'redux';

const logger = store => {
  return next => {
    if (!console.group) {
      return next;
    }

    return action => {
      console.group(action.type);
      console.log("%c prev state", "color: gray", store.getState());
      console.log("%c action", "color: blue", action);
      const returnValue = next(action);
      console.log("%c next state", "color: green", store.getState());
      console.groupEnd(action.type);
      return returnValue;
    };
  };
};

const promise = store => {
  return next => {
    return action => {
      if (typeof action.then === "function") {
        return action.then(next);
      }
      return next(action);
    };
  };
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.forEach(
    middleware => (store.dispatch = middleware(store)(store.dispatch))
  );
};

const reactTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(/* reducer/s */, reactTools);

const middlewares = [promise, logger];

wrapDispatchWithMiddlewares(store, middlewares);
