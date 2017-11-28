"use strict"
import {createStore} from 'redux';

// step 3 define reducers
const reducer = function(state = {books:[]}, action) {
    switch(action.type) {
        // case "INCREMENT":
        // return state + action.payload;
        // break;
        // case "DECREMENT":
        // return state - action.payload;
        // break;
        case "POST_BOOK":
        // let books = state.books.concat(action.payload)
        // return {books};
        return {books: [...state.books, ...action.payload]}
        break;
        case "DELETE_BOOK":
        //Create a copy of the current array of books
        const currentBookToDelete = [...state.books]
        //Determine at which index in books array is the book to be deleted
        const indexToDelete = currentBookToDelete.findIndex(
            function(book) {
                return book.id === action.payload.id;
            }
        )
        // use slice to remove the book at the specified index
        return {books: [...currentBookToDelete.slice(0, indexToDelete),
        ...currentBookToDelete.slice(indexToDelete + 1)]}
        break;
        case "UPDATE_BOOK":
        // Create a co[y of the current array of books
        const currentBookToUpdate = [...state.books];
        // Determine at which index in books array is the book to be deleted
        const indexToUpdate = currentBookToUpdate.findIndex(
            function(book) {
                return book.id === action.payload.id;
            }
        )
        // Create a new book object with the new values and with the same array index of the item we want to replace. TO achieve this we will use ...spread but we could use concat methods too
        const newBookToUpdate = {
            ...currentBookToUpdate[indexToUpdate],
            title: action.payload.title
        }
        // This log has the purpose to show you how newBookTo Update looks like
        console.log("What is it newBookToUpdate", newBookToUpdate);
        // use slice to remove the book at the specified index, replace with the new object and cincatenate with the rest of items in the array
        return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
        ...currentBookToUpdate.slice(indexToUpdate + 1)]}
        break;
    }
    return state
}

//Step 1 create the store
const store = createStore(reducer);

store.subscribe(function() {
    console.log('current state is: ', store.getState());
    // console.log('current state is: ', store.getState()[0].price);
    // console.log('current state is: ', store.getState()[1].price);
});

// step 2 create and dispatch actions
// store.dispatch({type:"INCREMENT", payload: 1})
// store.dispatch({type:"INCREMENT", payload: 1})
// store.dispatch({type:"DECREMENT", payload: 1})
store.dispatch ({
    type: "POST_BOOK",
    payload: [{
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price: 33.33
    }, 
    {
        id: 2,
        title: 'this is the book title 2',
        description: 'this is the book description 2',
        price: 35.45
    }]
})

// Disptach a second action
// store.dispatch ({
//     type: "POST_BOOK",
//     payload: {
//         id: 3,
//         title: 'this is the book title for id 3',
//         description: 'this is the book description id is 3',
//         price: 45.33
//     } 
// })

//Delete a book
store.dispatch ({
    type: "DELETE_BOOK",
    payload: {
        id: 1
    } 
})

//Update a book
store.dispatch ({
    type: "UPDATE_BOOK",
    payload: {
        id: 2,
        title: "Changed the title here "
    } 
})
