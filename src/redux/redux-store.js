import {createStore, combineReducers,applyMiddleware} from 'redux';
import {postsReducer} from './reducers/posts-reducer.js'
import {dialogsReducer} from './reducers/dialogs-reducer.js'
import {searchReducer} from './reducers/search-reducer.js'
import {authReducer} from './reducers/auth-reducer.js'
import thunkMiddleWare from 'redux-thunk'


let reducers = combineReducers({
	dialogsPage:dialogsReducer,
	profilePage:postsReducer,
	searchPage:searchReducer,
	auth:authReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store


