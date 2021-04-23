import { Container } from "components/Container";
import Title from "components/Title";

import SelectInputQueixas from "components/SelectInputQueixas";
import selectMock from "components/SelectInputQueixas/mock";

import SelectInputDoencas from "components/SelectInputDoencas";

import TextArea from "components/TextArea";

export default function Cadastro() {
    return (
        <Container>
            <Title>Cadastro de Prontuário</Title>

            <form className="formContent">
                <div className="titleForm">
                    <h2>Anamnese</h2>
                </div>

                <SelectInputQueixas
                    label="Queixa Principal"
                    items={selectMock}
                />

                <SelectInputDoencas label="Doenças Adulto" items={selectMock} />

                <TextArea title="Histórico da Moléstia" />
            </form>
        </Container>
    );
}
