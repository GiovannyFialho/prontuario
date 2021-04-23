import { useState } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

import {
    Wrapper,
    Label,
    Select,
    Selected,
    SelectedItem,
    SelectedIconClose
} from "./styles";

type itemsProps = {
    label: string;
    id: number;
};

export type SelectInputDoencasProps = {
    label: string;
    items: itemsProps[];
};

const SelectInputDoencas = ({ label, items }: SelectInputDoencasProps) => {
    const [doencas, setDoencas] = useState([]);

    return (
        <Wrapper>
            <Label>{label}</Label>

            <Select onChange={(e) => setDoencas([...doencas, e.target.value])}>
                <option defaultValue="Selecione..." hidden disabled>
                    Selecione...
                </option>
                {items.map((item) => (
                    <option key={`item-${item.id}`} value={item.id}>
                        {item.label}
                    </option>
                ))}
            </Select>

            <Selected>
                {doencas.map((doenca, index) => (
                    <SelectedItem key={`doenca-${index}`}>
                        {doenca}

                        <SelectedIconClose>
                            <CloseOutline
                                onClick={(e) =>
                                    setDoencas(
                                        doencas.filter((e) => e !== doenca)
                                    )
                                }
                                size={18}
                            />
                        </SelectedIconClose>
                    </SelectedItem>
                ))}
            </Selected>
        </Wrapper>
    );
};

export default SelectInputDoencas;
