import { Wrapper, Label, InputTextArea } from "./styles";

export type TextAreaProps = {
    title: string;
    dadoHistorico: React.ReactNode;
    setDadoHistorico: React.ReactNode;
    setHistoricoObrigatoria: React.ReactNode;
};

const TextArea = ({
    title,
    dadoHistorico,
    setDadoHistorico,
    setHistoricoObrigatoria
}: TextAreaProps) => (
    <Wrapper>
        <Label className={setHistoricoObrigatoria}>{title} *</Label>

        <InputTextArea
            placeholder="Digite..."
            minLength="10"
            maxLength="1000"
            role="textbox"
            alt="textarea-input"
            value={dadoHistorico}
            onChange={(e) => setDadoHistorico(e.target.value)}
        />
    </Wrapper>
);

export default TextArea;
