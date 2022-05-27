import styled from "styled-components";

export default {
    ListItem: styled.li<{ isCurrentNote: boolean }>`
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        background-color: ${props => props.isCurrentNote ? 'lightblue' : 'white'};
        :hover {
            background-color: pink;
        }
        :hover .appear-on-parent-hover {
            visibility: visible;
        }
    `,
    List: styled.ul`
        display: flex;
        flex-direction: column;
        background-color: blue;
    `,
    Name: styled.label`
        font-size: 1.2em;
    `,
    NameWrapper: styled.div`
        flex-basis: 100%;
    `,
    Button: styled.button`
        background: none;
        border: none;
        cursor: pointer;
        :hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    `,
    Input: styled.input`
    `,
    AddNoteButton: styled.button`
    `,
    Checkbox: styled.input.attrs({
        type: 'checkbox',

    })`
    `,
    ListItemRow: styled.div`
        display: flex;
        vertical-align: middle;
    `,
    DragHandle: styled.div.attrs({
        className: "appear-on-parent-hover"
    })`
        cursor: grab;
        margin: auto;
        > * {
            margin: auto;
        }
    `,
    ButtonsContainer: styled.div.attrs({
        className: "appear-on-parent-hover"
    })`
    display: flex;
`

}

