import React from 'react'
import { useSelector } from 'react-redux';
import { helpers, RootState } from '../../store/store';
import NotesComponent from '../MainContent/Notes/NotesComponent';
import { Tree } from '../MainContent/Tree/Tree';
import UserContentForm from '../MainContent/UserContentForm/UserContentForm';

import { default as S } from './SharedLayout.styled';


const { addFreshNote } = helpers.userContent;

const SharedLayout: React.FC = () => {
    const noNotes = useSelector((state: RootState) => state.userContent.notes.length === 0);
    const hasCurrentNote = useSelector((state: RootState) => state.userContent.currentNote !== undefined);

    const RightSide = () => {
        return hasCurrentNote ?
            <UserContentForm /> :
            <S.NoNotes>
                {
                    noNotes ?
                        <>
                            <p>No notes available</p>
                            <button onClick={() => addFreshNote()}>Add Note</button>
                        </> :
                        <span>Please select a note</span>
                }
            </S.NoNotes>
    }

    return (
        <S.RootDiv>
            <header>header</header>
            <main>
                <S.MainContent>
                    <NotesComponent />
                    <RightSide />
                </S.MainContent>
            </main>
            <footer>footer</footer>
        </S.RootDiv>
    )
}

export default SharedLayout;