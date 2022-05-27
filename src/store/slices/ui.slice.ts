import { createSlice } from "@reduxjs/toolkit";

interface UIContent {
    modalActive: boolean;
    isRenamingItem: boolean;
}

const initialState: UIContent = {
    modalActive: false,
    isRenamingItem: false
}

const uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        activateModal: (state, action: { type: string }) => {
            state.modalActive = true;
        },
        deactivateModal: (state, action: { type: string }) => {
            state.modalActive = false;
        },
        startRenamingItem: (state, action: { type: string }) => {
            state.isRenamingItem = true;
        },
        stopRenamingItem: (state, action: { type: string }) => {
            state.isRenamingItem = false;
        }
    }
});

export default {
    reducer: uiSlice.reducer,
    actions: uiSlice.actions,
}