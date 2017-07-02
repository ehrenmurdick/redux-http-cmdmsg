const createHttpMiddleware = (fetch) => {
  return store => next => action => {
    fetch(action.url);
  }
};

module.exports = createHttpMiddleware;
