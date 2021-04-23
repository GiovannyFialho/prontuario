import { Wrapper, Label, Select } from "./styles";

type itemsProps = {
    label: string;
    id: number;
};

export type SelectInputProps = {
    label: string;
    items: itemsProps[];
};

const SelectInput = ({ label, items }: SelectInputProps) => (
    <Wrapper>
        <Label>{label}</Label>

        <Select>
            <option defaultValue="Selecione..." hidden disabled>
                Selecione...
            </option>
            {items.map((item) => (
                <option key={`item-${item.id}`} value={item.label}>
                    {item.label}
                </option>
            ))}
        </Select>
    </Wrapper>
);

export default SelectInput;
