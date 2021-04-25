import { useState } from "react";

import { Container } from "components/Container";
import Title from "components/Title";
import SelectInputQueixas from "components/SelectInputQueixas";
import SelectInputDoencas from "components/SelectInputDoencas";
import TextArea from "components/TextArea";

import { FormContent, TitleForm, Form } from "styles/formCadastro";

export default function TestApi({ queixas, doencas }) {
    const [dadoQueixa, setDadoQueixa] = useState("");
    const [listaDoencas, setListaDoencas] = useState([]);
    const [dadoHistorico, setDadoHistorico] = useState("");

    const dadosPost = {
        queixa: dadoQueixa,
        doencas: listaDoencas,
        historico: dadoHistorico
    };

    return (
        <Container>
            {queixas.data.length && doencas.data.length ? (
                <>
                    <Title>Cadastro de Prontuário</Title>

                    <FormContent>
                        <TitleForm>
                            <Title>Anamnese</Title>
                        </TitleForm>

                        <Form>
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

                            <button
                                className="buttonAdd"
                                onClick={(e) => {
                                    e.preventDefault();

                                    console.log(dadosPost);
                                }}
                            >
                                Salvar
                            </button>
                        </Form>
                    </FormContent>
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
    const queixas = await resQueixas?.json();

    const resDoencas = await fetch(
        "http://assina-prontuario.herokuapp.com/doencas"
    );
    const doencas = await resDoencas?.json();

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
