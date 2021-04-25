import Link from "next/link";

import { Container } from "components/Container";
import Title from "components/Title";

export default function Home() {
    return (
        <Container>
            <Title>Protuário Eletrônico</Title>

            <div className="msgError alignRight">
                <h2>Nenhum prontuário cadastrado</h2>
            </div>

            <Link href="/cadastro-prontuario" passHref>
                <a className="buttonAdd">Adicionar novo prontuário</a>
            </Link>
        </Container>
    );
}
