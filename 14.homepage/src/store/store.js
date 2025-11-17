import {configureStore, createSlice} from '@reduxjs/toolkit';

/*
let 이름마음대로 = createSlice({
    name : 이름내마음대로,
    initialState : 값
})
*/
/*
let user = createSlice({
    name : 'user',
    initialState : 'tjoeun',
    reducers : {
        changeName(n) {
            return n + ' 3차'
        }
    }
}) */

/*
    변경하는 값이 array/object인 경우
*/

let user = createSlice({
    name : 'user',
    initialState : {name: 'kim', age: 20},
    reducers : {
        changeName(n) {
            return {name: 'pack', age:28};
        }
    }
}) 


export let { changeName } = user.actions

let stock = createSlice({
    name : 'stock',
    initialState : [5, 10, 9]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id:1, name:'jacket', count:1},
        {id:3, name:'knit', count:2}
    ]
})

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})