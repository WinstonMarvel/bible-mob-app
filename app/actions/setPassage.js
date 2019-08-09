const SET_BOOK = "SET_BOOK";
const SET_CHAPTER = "SET_CHAPTER";
const SET_VERSE = "SET_VERSE";

const setBook = ( bookName ) => ({
    type: SET_BOOK,
    payload: {
        bookName
    } 
})

const setChapter = ( chapter ) => ({
    type: SET_CHAPTER,
    payload: {
        chapter
    } 
})

const setVerse = ( verse ) => ({
    type: SET_VERSE,
    payload: {
        verse
    } 
})


export { 
    setBook, 
    setChapter, 
    setVerse, 
    SET_BOOK, 
    SET_CHAPTER, 
    SET_VERSE 
};