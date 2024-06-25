export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';


// add new todo item
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    };
};

// delete all item
export const deleteAll = () => {
    alert("Sure You Want To Delete All Item");
    return {
        type: DELETE_ALL
    };
};

 
// delete indivitual item
export const removeTodo = (payload) => {
    alert("You Want To Delete Item");
    return {
        type: REMOVE_TODO,
        payload
    };
};

// update item
export const handleEditSubmit = (payload) => {
    alert("You want To Update Item");
    return {
        type: UPDATE_TODO,
        payload
    };
};

