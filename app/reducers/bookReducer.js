import { SET_BOOK } from '../actions/setBook';

const bookReducer = (state =  {
    currentVersion: 'KJV',
    currentBook: 'Genesis',
    currentChapter: 1,
    currentVerse: 1,
    nextChapter: true,
    previousChapter: false
}, action) => { 
    switch(action.type) {
        case SET_BOOK:
            return {
                ...state, 
                currentBook: action.payload.bookName
            } 
        default: 
            return state;
    }
    return state;
};

export default bookReducer; 