import Link from "next/link";

import { Container } from "components/Container";
import Title from "components/Title";

export default function Home() {
    return (
        <Container>
            <Title>Protuário Eletrônico</Title>

            <p>Nenhum prontuário cadastrado</p>

            <Link href="/cadastro-prontuario" passHref>
                <a className="buttonAdd">Adicionar novo prontuário</a>
            </Link>
        </Container>
    );
}
