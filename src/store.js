import { createStore ,applyMiddleware} from "redux";
import rootReducers from "./redux/reducer/rootReducer";
import thunk from "redux-thunk";
// const store = createStore(rootReducers,applyMiddleware(thunk));
const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;