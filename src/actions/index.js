export function selectBook(book){
    // selectBook є в ActionCreator, йому треба повернути action
    //обєкт з type property
    return {
        type: 'BOOK_SELECTED',
        payload : book
    };
}