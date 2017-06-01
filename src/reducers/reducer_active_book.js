// state це не application state, тільки state для цього редюсера і все
export default function(state = null, action){
    //state = null щоб не був undefined
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload; // схоже state.title = book.title , а потім return state
    }

    return state;
}