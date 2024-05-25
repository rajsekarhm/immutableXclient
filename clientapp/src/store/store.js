import redux from '@reduxjs/toolkit'
import CRUD_Operations from './reducers/CRUD_Operations';
const store  = redux.configureStore({ 
    reducer: CRUD_Operations
})


export default store;