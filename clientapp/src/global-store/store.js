import {configureStore} from '@reduxjs/toolkit'
import CRUD_Operations from './reducers/CRUD_Operations';
const store  = configureStore({ 
    reducer: CRUD_Operations
})


export default store;