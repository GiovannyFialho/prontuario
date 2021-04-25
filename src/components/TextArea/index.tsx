import { Wrapper, Label, InputTextArea } from "./styles";

export type TextAreaProps = {
    title: string;
    dadoHistorico: React.ReactNode;
    setDadoHistorico: React.ReactNode;
};

const TextArea = ({
    title,
    dadoHistorico,
    setDadoHistorico
}: TextAreaProps) => (
    <Wrapper>
        <Label>{title}</Label>

        <InputTextArea
            placeholder="Digite..."
            minLength="10"
            maxLength="1000"
            role="textbox"
            alt="textarea-input"
            required
            value={dadoHistorico}
            onChange={(e) => setDadoHistorico(e.target.value)}
        />
    </Wrapper>
);

export default TextArea;
