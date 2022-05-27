import { useSelector } from 'react-redux';
import userContentSlice, { Note } from '../../../store/slices/userContent.slice';
import { helpers, RootState } from '../../../store/store';
import NoteComponent from './NoteComponent';
import { default as S } from './NotesComponents.styled';

// const { addFolder, addNote, deleteFolder, deleteNote, setCurrentNote, setNoteProtection, updateNote } = userContentSlice.actions;
const { addFreshNote } = helpers.userContent;

interface FilteredNotes {
    [key: string]: Note[];
}

const NotesComponent: React.FC = () => {
    const currentNotes = useSelector((state: RootState) => state.userContent.notes);

    const currentNote = useSelector((state: RootState) => state.userContent.currentNote);

    const folders: FilteredNotes = currentNotes.reduce((acc: FilteredNotes, note: Note) => {
        const { parentFolderName } = note;
        if (!parentFolderName) {
            acc['root'].push(note);
            return acc;
        }
        if (acc.hasOwnProperty(parentFolderName)) acc[parentFolderName].push(note);
        else acc[parentFolderName] = [note];
        return acc;
    }, { 'root': [] } as FilteredNotes);

    const handleAddNote = () => {
        addFreshNote();
    }

    return (
        <S.Wrapper>
            <S.ButtonsNav>
                <S.AddNoteButton onClick={handleAddNote}>
                    Add Button
                </S.AddNoteButton>
            </S.ButtonsNav>
            <S.List>
                {
                    currentNotes.map((note: Note, index: number) =>
                        <NoteComponent
                            isCurrentNote={currentNote && currentNote!.id === note.id}
                            note={note}
                            key={index}
                        />
                    )
                }
            </S.List>
        </S.Wrapper>
    )
}

export default NotesComponent