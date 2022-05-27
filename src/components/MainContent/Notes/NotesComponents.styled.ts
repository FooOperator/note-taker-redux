import styled from "styled-components";

export default {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        flex-basis: 25%;
        padding: 0.5rem;
        height: 100%;
        background-color: black;
    `,
    List: styled.ul`
        display: flex;
        flex-direction: column;
        padding: 0;
        flex-basis: 100%;
    `,
    AddNoteButton: styled.button`
        background: none;
        font-weight: 600;
        color: black;
        background-color: beige;
        border-color: beige;
        :hover {
            background-color: black;
            color: beige;
            cursor: pointer;
        }
    `,
    ButtonsNav: styled.div`
        display: flex;
    `
}