import { useState } from "react";
import { useRouter } from "next/router";

import { Container } from "components/Container";
import Title from "components/Title";
import SelectInputQueixas from "components/SelectInputQueixas";
import SelectInputDoencas from "components/SelectInputDoencas";
import TextArea from "components/TextArea";

import { useProntuarios } from "context/prontuarios";

import { FormContent, TitleForm, Form } from "styles/formCadastro";

const endPoint = "http://assina-prontuario.herokuapp.com";

export default function CadastroProntuario({ queixas, doencas }) {
    const router = useRouter();

    const { addProntuarios } = useProntuarios();

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

    const handlePost = (e) => {
        e.preventDefault();

        if (!dadoQueixa) {
            setQueixaObrigatoria("obrigatorio");
        } else {
            setQueixaObrigatoria("");
        }

        if (!dadoHistorico) {
            setHistoricoObrigatoria("obrigatorio");
        } else {
            setHistoricoObrigatoria("");
        }

        fetch(`${endPoint}/prontuario`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosPost)
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json);

                if (json.ok === false) {
                    const errors = Object.entries(json.errors).map(
                        (item) => `${item[0]}: ${item[1]}`
                    );

                    alert(errors.join(`\n\n`));

                    return;
                }

                addProntuarios(json);

                alert(`Obrigado!`);
                router.push("/");
            })
            .catch((err) => {
                alert("Erro! Tente novamente mais tarde");

                console.log(`Ops! temos um erro ${err}`);

                router.push("/");
            });
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

                            <button className="buttonAdd" onClick={handlePost}>
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
    const resQueixas = await fetch(`${endPoint}/queixas`);
    const queixas = resQueixas.ok == true ? await resQueixas.json() : [];

    const resDoencas = await fetch(`${endPoint}/doencas`);
    const doencas = resDoencas.ok == true ? await resDoencas.json() : [];

    return {
        props: {
            queixas,
            doencas
        }
    };
}
