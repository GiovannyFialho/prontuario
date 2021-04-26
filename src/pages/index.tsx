import Link from "next/link";
import { Clock } from "@styled-icons/bootstrap/Clock";

import { useProntuarios } from "context/prontuarios";

import { Container } from "components/Container";
import Title from "components/Title";

import {
    ContainerListaProntuarios,
    ContainerProntuario,
    ContentData,
    ContentProntuario,
    HeaderProntuario,
    BodyProntuario,
    TitleProntuario
} from "styles/home";

const months = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez"
];

function ProntuarioItem({ data }) {
    const date = new Date(data.created_at);

    return (
        <ContainerProntuario>
            <ContentData>
                <h2>
                    {`0${date.getDate()}`.slice(-2)}
                    <span className="mes">{months[date.getMonth()]}</span>{" "}
                    <span className="ano">{date.getFullYear()}</span>
                </h2>
            </ContentData>

            <ContentProntuario>
                <HeaderProntuario>
                    <div className="clock">
                        <Clock size={18} />
                        <p>
                            {`0${date.getHours()}`.slice(-2)}:
                            {`0${date.getMinutes()}`.slice(-2)}
                        </p>
                    </div>

                    <div className="title">
                        <h2>Anamnese</h2>
                    </div>
                </HeaderProntuario>

                <BodyProntuario>
                    <div className="queixa">
                        <TitleProntuario>Queixa Principal</TitleProntuario>
                        <p>{data.queixa.label}</p>
                    </div>

                    <div className="doencas">
                        <TitleProntuario>Doenças Adulto</TitleProntuario>

                        <div className="doencasSelected">
                            {data.doencas.map((item) => (
                                <div key={item.id} className="doenca">
                                    <p>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="historico">
                        <TitleProntuario>Histórico da moléstia</TitleProntuario>

                        <p>{data.historico}</p>
                    </div>
                </BodyProntuario>
            </ContentProntuario>
        </ContainerProntuario>
    );
}

export default function Home() {
    const { prontuarios } = useProntuarios();

    return (
        <Container>
            <Title>Protuário Eletrônico</Title>

            <ContainerListaProntuarios>
                {prontuarios.length ? (
                    prontuarios.map((item) => (
                        <ProntuarioItem key={item._id} data={item} />
                    ))
                ) : (
                    <div className="msgError">
                        <div className="content">
                            <p>Ops!</p>
                            <h2>Nenhum prontuário cadastrado no momento.</h2>
                        </div>
                    </div>
                )}
                <Link href="/cadastro-prontuario" passHref>
                    <a className="buttonAdd">Adicionar novo prontuário</a>
                </Link>
            </ContainerListaProntuarios>
        </Container>
    );
}
