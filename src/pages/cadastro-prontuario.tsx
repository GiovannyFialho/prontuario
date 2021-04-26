import { useState } from "react";
import { useRouter } from "next/router";

import { Container } from "components/Container";
import Title from "components/Title";
import SelectInputQueixas from "components/SelectInputQueixas";
import SelectInputDoencas from "components/SelectInputDoencas";
import TextArea from "components/TextArea";

import { FormContent, TitleForm, Form } from "styles/formCadastro";

export default function TestApi({ queixas, doencas }) {
    const router = useRouter();

    const [dadoQueixa, setDadoQueixa] = useState("");
    const [listaDoencas, setListaDoencas] = useState([]);
    const [dadoHistorico, setDadoHistorico] = useState("");

    const [queixaObrigatoria, setQueixaObrigatoria] = useState("");
    const [historicoObrigatoria, setHistoricoObrigatoria] = useState("");

    const dadosPost = {
        queixa: dadoQueixa,
        doencas: listaDoencas,
        historico: dadoHistorico
    };

    return (
        <Container>
            {!!queixas.data && !!doencas.data ? (
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
                                setQueixaObrigatoria={queixaObrigatoria}
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
                                setHistoricoObrigatoria={historicoObrigatoria}
                            />

                            <button
                                className="buttonAdd"
                                onClick={(e) => {
                                    e.preventDefault();

                                    if (!dadoQueixa) {
                                        alert(
                                            "É preciso preencher o campo de queixa"
                                        );

                                        setQueixaObrigatoria("obrigatorio");
                                    } else {
                                        setQueixaObrigatoria("");
                                    }

                                    if (!dadoHistorico) {
                                        alert(
                                            "É preciso preencher o campo de histórico"
                                        );

                                        setHistoricoObrigatoria("obrigatorio");
                                    } else {
                                        setHistoricoObrigatoria("");
                                    }

                                    fetch(
                                        "http://assina-prontuario.herokuapp.com/prontuario",
                                        {
                                            method: "POST",
                                            body: dadosPost
                                        }
                                    )
                                        .then(() => {
                                            alert(`Obrigado!`);

                                            router.push("/");
                                        })
                                        .catch((err) => {
                                            alert(`erro! ${err}`);

                                            router.push("/");
                                        });
                                }}
                            >
                                Salvar
                            </button>
                        </Form>
                    </FormContent>
                </>
            ) : (
                <div className="msgError">
                    <div className="content">
                        <p>Error</p>
                        <h2>
                            Ops! Estamos com alguma instabildiade no sistema,
                            por favor, tente novamente mais tarde.
                        </h2>
                    </div>
                </div>
            )}
        </Container>
    );
}

export async function getStaticProps() {
    const resQueixas = await fetch(
        "http://assina-prontuario.herokuapp.com/queixas"
    );
    const queixas = resQueixas.ok == true ? await resQueixas.json() : [];

    const resDoencas = await fetch(
        "http://assina-prontuario.herokuapp.com/doencas"
    );
    const doencas = resDoencas.ok == true ? await resDoencas.json() : [];

    return {
        props: {
            queixas,
            doencas
        }
    };
}
