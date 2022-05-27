import React from 'react'
import userContentSlice, { Note } from '../../../store/slices/userContent.slice';
import { default as S } from './NoteComponent.styled';
import { AiFillDelete, AiFillUnlock, AiFillLock } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

const { deleteNote, setCurrentNote, setNoteProtection } = userContentSlice.actions;

interface NoteComponentProps {
    note: Note;
    isCurrentNote: boolean;
}

const NoteComponent: React.FC<NoteComponentProps> = ({ note, isCurrentNote }) => {
    const { displayName, isProtected, id } = note;
    const dispatch = useDispatch();

    const handleDeleteNote = () => {
        dispatch(deleteNote(note.id));
    }

    const handleAddNote = () => {
        dispatch(setCurrentNote(note.id));
    }

    const handleSetNoteProtection = () => {
        dispatch(setNoteProtection({ id, isProtected: !isProtected }));
    }

    return (
        <S.ListItem isCurrentNote={isCurrentNote}>
            <S.ListItemRow>
                <S.NameWrapper onClick={handleAddNote}>
                    <S.Name>
                        {displayName}
                    </S.Name>
                </S.NameWrapper>
                <S.ButtonsContainer>
                    <S.Button onClick={handleDeleteNote}>
                        <AiFillDelete />
                    </S.Button>
                    <S.Button onClick={handleSetNoteProtection}>
                        {!isProtected ? <AiFillLock /> : <AiFillUnlock />}
                    </S.Button>
                </S.ButtonsContainer>
            </S.ListItemRow>
        </S.ListItem>
    )
}

export default NoteComponent