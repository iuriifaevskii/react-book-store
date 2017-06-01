import { combineReducers } from 'redux';
import BooksReducer from './reduser_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
