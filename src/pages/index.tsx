import Link from "next/link";
import { Clock } from "@styled-icons/bootstrap/Clock";

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

export default function Home({ prontuarios }) {
    return (
        <Container>
            <Title>Protuário Eletrônico</Title>

            <ContainerListaProntuarios>
                {prontuarios.length ? (
                    <ContainerProntuario>
                        <ContentData>
                            <h2>
                                24
                                <span className="mes">ago</span>{" "}
                                <span className="ano">2020</span>
                            </h2>
                        </ContentData>

                        <ContentProntuario>
                            <HeaderProntuario>
                                <div className="clock">
                                    <Clock size={18} />
                                    <p>18:41</p>
                                </div>

                                <div className="title">
                                    <h2>Anamnese</h2>
                                </div>
                            </HeaderProntuario>

                            <BodyProntuario>
                                <div className="queixa">
                                    <TitleProntuario>
                                        Queixa Principal
                                    </TitleProntuario>
                                    <p>Vômito</p>
                                </div>

                                <div className="doencas">
                                    <TitleProntuario>
                                        Doenças Adulto
                                    </TitleProntuario>

                                    <div className="doencasSelected">
                                        <div className="doenca">
                                            <p>Diabetes</p>
                                        </div>
                                        <div className="doenca">
                                            <p>Câncer</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="historico">
                                    <TitleProntuario>
                                        Histórico da moléstia
                                    </TitleProntuario>

                                    <p>
                                        fortes dores de cabeça há uma semana,
                                        insônia
                                    </p>
                                </div>
                            </BodyProntuario>
                        </ContentProntuario>
                    </ContainerProntuario>
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

export async function getStaticProps() {
    const res = await fetch("http://assina-prontuario.herokuapp.com");
    const prontuarios = await res?.json();

    return {
        props: {
            prontuarios
        }
    };
}
