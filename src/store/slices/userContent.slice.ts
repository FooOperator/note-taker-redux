import { createSlice, nanoid } from "@reduxjs/toolkit";

const FOLDER_ID_SIZE = 8;
const NOTE_ID_SIZE = 12;

export interface UserContent {
    id: string;
    parentFolderName?: string;
    displayName: string;
    /**
    * if true, the content may not be deleted and is read-only.
    */
    isProtected: boolean;
}

export interface Note extends UserContent {
    /** 
     * Optional parameter - The content of the note that will be displayed in the UI.
    */
    body: string;
    /**
     * Optional parameter - allows to group notes by a common tag.
     */
    tags?: string[];
}

interface UserContentState {
    notes: Note[];
    currentNote?: Note;
    folders: string[];
}

const initialState: UserContentState = {
    notes: [
        {
            id: nanoid(NOTE_ID_SIZE),
            displayName: 'My first note',
            parentFolderName: "Thoughts",
            body: 'This is my first note, text text text.',
            isProtected: false
        },
        {
            id: nanoid(NOTE_ID_SIZE),
            displayName: 'My feelings regarding the project',
            parentFolderName: 'Thoughts',
            body: 'MUCHO TEXTO.',
            isProtected: true
        },
        {
            id: nanoid(NOTE_ID_SIZE),
            displayName: 'Root note',
            body: '',
            isProtected: false
        }
    ],
    currentNote: undefined,
    folders: ["Thoughts", "Recipes"]

}

const userContentSlice = createSlice({
    initialState: initialState,
    name: "user content",
    reducers: {
        setCurrentNote: (state, action: { type: string, payload: string }) => {
            const { notes } = state;
            const index = notes.findIndex(note => note.id === action.payload);
            console.log(index);
            state.currentNote = notes[index];
        },
        addNote: (state, action: { payload: Note }) => {
            state.notes.push(action.payload);
        },
        deleteNote: (state, action: { payload: string }) => {
            const target = state.notes.find(note => note.id === action.payload);
            if (target?.isProtected) return;
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        },
        updateNote: (state, action: { payload: Note }) => {
            const { isProtected } = action.payload;
            console.log(isProtected);
            if (!isProtected) {
                const index = state.notes.findIndex(note => note.id === action.payload.id);
                state.notes[index] = action.payload;
            }
        },
        setNoteProtection: (state, action: { payload: { id: string, isProtected: boolean } }) => {
            const { id, isProtected } = action.payload;
            const index = state.notes.findIndex(note => note.id === id);
            state.notes[index].isProtected = isProtected;
            console.log("is note protected?", state.notes[index].isProtected);
        },
        addFolder: (state, action: { payload: string }) => {
            state.folders.push(action.payload);
        },
        deleteFolder: (state, action: { payload: string }) => {
            return {
                ...state,
                folders: state.folders.filter(folder => folder !== action.payload)
            }
        }
    }
});

export default {
    reducer: userContentSlice.reducer,
    actions: userContentSlice.actions,
}