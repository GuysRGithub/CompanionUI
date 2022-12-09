import { createSlice } from "@reduxjs/toolkit";
import api from "../../app/api";

export const taskSlice = createSlice({
    name: 'dTask',
    initialState: {
        list: []
    },
    reducers: {
        create: (state, action) => {

        },

        update: (state, action) => {

        },

        del: (state, action) => {

        },

        list: (state, action) => {
            state.list = action.payload
        }

    }
})

export const { create, update, del, list } = taskSlice.actions

export const fetchAll = () => dispatch => {
    api.dTask()
        .fetchAll()
        .then(res => {
            dispatch(list(res.data))
        })
        .catch(err => console.log(err))
}



export default taskSlice.reducer