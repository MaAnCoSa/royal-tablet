import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    combs: [],
    msg: "",
    code: ""
};

export const combsSlice = createSlice({
    name: "combs",
    initialState,
    reducers: {
        changeCombList: (state, action) => {
            const newCombList = action.payload
            state.combs = newCombList
        },
        changeMsg: (state, action) => {
            const msg = action.payload
            state.msg = msg
        },
        changeCode: (state, action) => {
            const code = action.payload
            state.code = code
        }
    }
})

export const {
    changeCombList,
    changeMsg,
    changeCode
} = combsSlice.actions
export default combsSlice.reducer