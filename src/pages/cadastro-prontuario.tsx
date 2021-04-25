import { useState } from "react";

import { Container } from "components/Container";
import Title from "components/Title";
import SelectInputQueixas from "components/SelectInputQueixas";
import SelectInputDoencas from "components/SelectInputDoencas";
import TextArea from "components/TextArea";

export default function TestApi({ queixas, doencas }) {
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

    return (
        <Container>
            {queixas.data.length && doencas.data.length ? (
                <>
                    <Title>Cadastro de Prontuário</Title>

                    <div className="formContent">
                        <div className="titleForm">
                            <h2>Anamnese</h2>
                        </div>

                        <form>
                            <SelectInputQueixas
                                label="Queixa Principal"
                                items={queixas.data}
                                setDadoQueixa={setDadoQueixa}
                                dadoQueixa={dadoQueixa}
                            />

                            <SelectInputDoencas
                                label="Doenças Adulto"
                                items={doencas.data}
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
                </>
            ) : (
                <div className="msgError">
                    <span>Error</span>
                    <h2>
                        Ops! Estamos com alguma instabildiade no sistema, por
                        favor, tente novamente mais tarde.
                    </h2>
                </div>
            )}
        </Container>
    );
}

export async function getStaticProps() {
    const resQueixas = await fetch(
        "http://assina-prontuario.herokuapp.com/queixas"
    );
    const queixas = await resQueixas.json();

    const resDoencas = await fetch(
        "http://assina-prontuario.herokuapp.com/doencas"
    );
    const doencas = await resDoencas.json();

    if (!queixas || !doencas) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }

    return {
        props: {
            queixas,
            doencas
        }
    };
}
