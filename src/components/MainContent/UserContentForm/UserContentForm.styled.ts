import styled from "styled-components";

export default {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        flex: 1;
        flex-basis: 75%;
    `,
    TitleInput: styled.input.attrs({
        placeholder: "Type your title here...",
        autoFocus: true
    })`
        border-bottom: .1em solid black;
        width: 100%;
    `,
    BodyTextArea: styled.textarea.attrs({
        placeholder: "Type your message here..."
    })`
        resize: none;
        overflow: hidden;
        width: 100%;
        height: 100%;
    `,

    SubmitButton: styled.button`
        display: none;
    `,
    Fieldset: styled.fieldset`
    `,
    Top: styled.div`
        display: flex;
        background-color: pink;
    `,
    Bottom: styled.div`
        flex-basis: 90%;
        background-color: red;
    `,
    ReadOnlySign: styled.span`
        position: fixed;
        padding: .1rem;
        color: crimson;
        border: .1em solid crimson;
        right: .4em;
        top: .8em;
    `

}