import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ModalState} from "../types/types";


const initialState: ModalState = {
    isOpened: false,
    lamboId: 0,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<number>) {
            state.lamboId = action.payload
            state.isOpened = true
        },
        closeModal(state) {
            state.lamboId = 0
            state.isOpened = false
        },
    },
})

export const {openModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;
