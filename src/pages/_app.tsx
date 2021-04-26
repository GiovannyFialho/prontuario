import { ProntuariosProvider } from "context/prontuarios";
import type { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "styles/global";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Prontuario</title>
                <link rel="shortcut icon" href="/img/icon-192.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <meta
                    name="description"
                    content="Prontuário eletrônico de saúde simplificado"
                />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <GlobalStyles />
            <ProntuariosProvider>
                <Component {...pageProps} />
            </ProntuariosProvider>
        </>
    );
}

export default App;
