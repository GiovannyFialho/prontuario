import { Wrapper, Label, InputTextArea } from "./styles";

export type TextAreaProps = {
    title: string;
};

const TextArea = ({ title }: TextAreaProps) => (
    <Wrapper>
        <Label>{title}</Label>

        <InputTextArea
            placeholder="Digite..."
            minLength="10"
            maxLength="1000"
            role="textbox"
            alt="textarea-input"
            required
        />
    </Wrapper>
);

export default TextArea;
