import { Wrapper, Label, Select } from "./styles";

type itemsProps = {
    label: string;
    id: number;
};

export type SelectInputQueixasProps = {
    label: string;
    items: itemsProps[];
};

const SelectInputQueixas = ({ label, items }: SelectInputQueixasProps) => (
    <Wrapper>
        <Label>{label}</Label>

        <Select>
            <option defaultValue="Selecione..." hidden disabled>
                Selecione...
            </option>
            {items.map((item) => (
                <option key={`item-${item.id}`} value={item.id}>
                    {item.label}
                </option>
            ))}
        </Select>
    </Wrapper>
);

export default SelectInputQueixas;
