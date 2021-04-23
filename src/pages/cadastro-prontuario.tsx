import { Container } from "components/Container";
import Title from "components/Title";

import SelectInput from "components/SelectInput";
import selectMock from "components/SelectInput/mock";

export default function Cadastro() {
    return (
        <Container>
            <Title>Cadastro de Prontuário</Title>

            <form className="formContent">
                <div className="titleForm">
                    <h2>Anamnese</h2>
                </div>

                <SelectInput label="Doenças Adulto" items={selectMock} />
            </form>
        </Container>
    );
}
