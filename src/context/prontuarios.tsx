import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect
} from "react";

type prontuariosContextType = {
    prontuarios: [];
    addProntuarios: () => void;
};

const prontuariosContextDefaultValues: prontuariosContextType = {
    prontuarios: [],
    addProntuarios: () => {}
};

const ProntuariosContext = createContext<prontuariosContextType>(
    prontuariosContextDefaultValues
);

export function useProntuarios() {
    return useContext(ProntuariosContext);
}

type Props = {
    children: ReactNode;
};

export function ProntuariosProvider({ children }: Props) {
    const [prontuarios, setProntuarios] = useState<[]>([]);

    const addProntuarios = (data) => {
        setProntuarios([...prontuarios, data]);
    };

    const value = {
        prontuarios,
        addProntuarios
    };

    useEffect(() => {
        const prontuariosData = JSON.parse(localStorage.getItem("Prontuarios"));

        if (prontuariosData && prontuariosData.length) {
            setProntuarios(prontuariosData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("Prontuarios", JSON.stringify(prontuarios));
    }, [prontuarios]);

    return (
        <>
            <ProntuariosContext.Provider value={value}>
                {children}
            </ProntuariosContext.Provider>
        </>
    );
}
