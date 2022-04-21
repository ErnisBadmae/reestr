import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { main } from './entries/entries';
// import main from './main/main'

// export const store = configureStore({
//   reducer: rootReducer,
// })

export default createStore(main, applyMiddleware(thunk));
