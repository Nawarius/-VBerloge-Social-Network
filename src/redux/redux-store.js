import {createStore, combineReducers,applyMiddleware} from 'redux';
import {postsReducer} from './reducers/posts-reducer.js'
import {dialogsReducer} from './reducers/dialogs-reducer.js'
import {searchReducer} from './reducers/search-reducer.js'
import {authReducer} from './reducers/auth-reducer.js'
import {loginReducer} from './reducers/login-reducer.js'
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
	dialogsPage:dialogsReducer,
	profilePage:postsReducer,
	searchPage:searchReducer,
	auth:authReducer,
	form:formReducer,
	loginPage: loginReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store


