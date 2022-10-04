const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  rootReducer: rootReducer,
});

export default store;
