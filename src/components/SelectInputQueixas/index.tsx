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
    setQueixaObrigatoria: React.ReactNode;
};

const SelectInputQueixas = ({
    label,
    items,
    setDadoQueixa,
    dadoQueixa,
    setQueixaObrigatoria
}: SelectInputQueixasProps) => (
    <Wrapper>
        <Label className={setQueixaObrigatoria}>{label} *</Label>

        <Select
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
