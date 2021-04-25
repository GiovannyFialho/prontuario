import { Wrapper, Label, Select } from "./styles";

type itemsProps = {
    label: string;
    id: number;
};

export type SelectInputQueixasProps = {
    label: string;
    items: itemsProps[];
    setDadoQueixa?: React.ReactNode;
    dadoQueixa?: React.ReactNode;
};

const SelectInputQueixas = ({
    label,
    items,
    setDadoQueixa,
    dadoQueixa
}: SelectInputQueixasProps) => (
    <Wrapper>
        <Label>{label}</Label>

        <Select
            required
            dadoQueixa={dadoQueixa}
            onChange={(e) => setDadoQueixa(e.target.value)}
        >
            <option hidden>Selecionar...</option>
            {items.map((item) => (
                <option
                    key={`item-${item.id}`}
                    value={item.label}
                    data-id={item.id}
                >
                    {item.label}
                </option>
            ))}
        </Select>
    </Wrapper>
);

export default SelectInputQueixas;
