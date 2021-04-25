import Link from "next/link";

import { Container } from "components/Container";
import Title from "components/Title";

export default function Home({ prontuarios }) {
    return (
        <Container>
            <Title>Protuário Eletrônico</Title>

            {prontuarios ? (
                <h2>temos prontuarios</h2>
            ) : (
                <>
                    <div className="msgError alignRight">
                        <h2>Nenhum prontuário cadastrado</h2>
                    </div>

                    <Link href="/cadastro-prontuario" passHref>
                        <a className="buttonAdd">Adicionar novo prontuário</a>
                    </Link>
                </>
            )}
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
