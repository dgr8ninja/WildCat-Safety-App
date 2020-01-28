import { compose, createStore, applyMiddleWare} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleWare(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
);

export default store;