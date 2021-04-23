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
            {items.map((item) => (
                <option key={`item-${item.id}`} value={item.label}>
                    {item.label}
                </option>
            ))}
        </Select>
    </Wrapper>
);

export default SelectInputQueixas;
