import { 
    SET_BOOK, 
    SET_CHAPTER, 
    SET_VERSE 
} from '../actions/setPassage';

const initialState = {
    currentVersion: 'KJV',
    currentBook: 'Genesis',
    currentChapter: 1,
    currentVerse: 1,
    nextChapter: true,
    previousChapter: false
};

const bookReducer = (state = initialState, action) => { 
    switch(action.type) {
        case SET_BOOK:
            return {
                ...state, 
                currentBook: action.payload.bookName
            } 
        case SET_CHAPTER:
            return {
                ...state, 
                currentChapter: action.payload.chapter
            } 
        case SET_VERSE:
            return {
                ...state, 
                currentVerse: action.payload.verse
            } 
        default: 
            return state;
    }
    return state;
};

export default bookReducer; 