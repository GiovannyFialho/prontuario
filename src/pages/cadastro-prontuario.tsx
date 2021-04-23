import { Container } from "components/Container";
import Title from "components/Title";

import SelectInputQueixas from "components/SelectInputQueixas";
import selectMock from "components/SelectInputQueixas/mock";

import SelectInputDoencas from "components/SelectInputDoencas";

import TextArea from "components/TextArea";

import api from "services/api";

export default function Cadastro() {
    const itemsQueixas = api
        .get("/queixas")
        .then((response) => response.data)
        .catch((err) => console.log(`Ops! Error: ${err}`));

    console.log(itemsQueixas);

    return (
        <Container>
            <Title>Cadastro de Prontuário</Title>

            <div className="formContent">
                <div className="titleForm">
                    <h2>Anamnese</h2>
                </div>
                <form>
                    <SelectInputQueixas
                        label="Queixa Principal"
                        items={selectMock}
                    />

                    <SelectInputDoencas
                        label="Doenças Adulto"
                        items={selectMock}
                    />

                    <TextArea title="Histórico da Moléstia" />

                    <button className="buttonAdd">Salvar</button>
                </form>
            </div>
        </Container>
    );
}
