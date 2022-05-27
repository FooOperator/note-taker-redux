import { configureStore, nanoid } from "@reduxjs/toolkit"
import userContentSlice, { Note } from "./slices/userContent.slice";
import uiSlice from "./slices/ui.slice";

const store = configureStore({
    reducer: {
        userContent: userContentSlice.reducer,
        ui: uiSlice.reducer,
    },

});

export const helpers = {
    userContent: {
        addFreshNote: (parentFolderName?: string) => {
            const note: Note = { displayName: '', body: '', id: nanoid(16), isProtected: false, parentFolderName };
            store.dispatch(userContentSlice.actions.addNote(note));
            store.dispatch(userContentSlice.actions.setCurrentNote(note.id));
        }
    },
    ui: {}
}

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;