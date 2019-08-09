const SET_BOOK = "SET_BOOK";

const setBook = ( bookName ) => ({
    return {
       type: SET_BOOK,
       payload: {
           bookName
       } 
    }
})

const setChapter = ( chapter ) => ({
    return {
       type: SET_CHAPTER,
       payload: {
           chapter
       } 
    }
})

const setVerse = ( verse ) => ({
    return {
       type: SET_VERSE,
       payload: {
            verse
       } 
    }
})


export default setBook, setChapter, setVerse;
export { SET_BOOK };