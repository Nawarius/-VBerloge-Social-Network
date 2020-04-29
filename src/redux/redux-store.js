import {createStore, combineReducers} from 'redux';
import {postsReducer} from './reducers/posts-reducer.js'
import {dialogsReducer} from './reducers/dialogs-reducer.js'
import {searchReducer} from './reducers/search-reducer.js'

let reducers = combineReducers({
	dialogsPage:dialogsReducer,
	profilePage:postsReducer,
	searchPage:searchReducer
});
let store = createStore(reducers);

export default store


