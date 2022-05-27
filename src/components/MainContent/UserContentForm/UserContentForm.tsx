import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import userContentSlice from '../../../store/slices/userContent.slice';
import { RootState } from '../../../store/store';
import { default as S } from './UserContentForm.styled';

const { updateNote } = userContentSlice.actions;

const UserContentForm = () => {
  const dispatch = useDispatch();
  const currentNote = useSelector((state: RootState) => state.userContent.currentNote);
  const [displayName, setDisplayName] = useState<string>('');
  const [body, setBody] = useState<string>('');

  useEffect(() => {
    if (currentNote) {
      setDisplayName(currentNote.displayName);
      setBody(currentNote.body);
    } else {
      setDisplayName('');
      setBody('');
    }
  }, [currentNote])

  useEffect(() => {
    if (currentNote) {
      dispatch(updateNote({ ...currentNote, displayName, body }));
    }
  }, [displayName, body]);

  return (
    <S.Wrapper>
      <S.Top>
        <S.TitleInput
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          readOnly={currentNote?.isProtected}
        />
        {currentNote?.isProtected && <S.ReadOnlySign>Read Only</S.ReadOnlySign>}
      </S.Top>
      <S.Bottom>
        <S.BodyTextArea
          readOnly={currentNote?.isProtected}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </S.Bottom>
    </S.Wrapper >
  )
}

export default UserContentForm