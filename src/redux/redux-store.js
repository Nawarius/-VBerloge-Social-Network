import {createStore, combineReducers} from 'redux';
import {postsReducer} from './reducers/posts-reducer.js'
import {dialogsReducer} from './reducers/dialogs-reducer.js'

let reducers = combineReducers({
	dialogsPage:dialogsReducer,
	profilePage:postsReducer
});
let store = createStore(reducers);

export default store


