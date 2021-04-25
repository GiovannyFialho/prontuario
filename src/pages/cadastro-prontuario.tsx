import { useState, useEffect } from "react";

import { Container } from "components/Container";
import Title from "components/Title";
import SelectInputQueixas from "components/SelectInputQueixas";
import SelectInputDoencas from "components/SelectInputDoencas";
import TextArea from "components/TextArea";

import selectMock from "components/SelectInputQueixas/mock";

import api from "services/api";

export default function Cadastro() {
    const [queixas, setQueixas] = useState([]);
    const [doencas, setDoencas] = useState([]);

    const [dadoQueixa, setDadoQueixa] = useState("");
    const [listaDoencas, setListaDoencas] = useState([]);
    const [dadoHistorico, setDadoHistorico] = useState("");

    const dadosPost = {
        queixa: dadoQueixa,
        doencas: listaDoencas,
        historico: dadoHistorico
    };

    function handlePost(event) {
        event.preventDefault();

        console.log(dadosPost);
    }

    useEffect(() => {
        api.get("queixas")
            .then((response) => setQueixas(response.data.data))
            .catch((err) => console.log(`Ops! Error: ${err}`));

        api.get("doencas")
            .then((response) => setDoencas(response.data.data))
            .catch((err) => console.log(`Ops! Error: ${err}`));
    }, []);

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
                        items={queixas}
                        setDadoQueixa={setDadoQueixa}
                        dadoQueixa={dadoQueixa}
                    />

                    <SelectInputDoencas
                        label="Doenças Adulto"
                        items={doencas}
                        listaDoencas={listaDoencas}
                        setListaDoencas={setListaDoencas}
                    />

                    <TextArea
                        title="Histórico da Moléstia"
                        dadoHistorico={dadoHistorico}
                        setDadoHistorico={setDadoHistorico}
                    />

                    <button className="buttonAdd" onClick={handlePost}>
                        Salvar
                    </button>
                </form>
            </div>
        </Container>
    );
}
