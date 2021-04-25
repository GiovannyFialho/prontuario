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
    listaDoencas?: React.ReactNode[];
    setListaDoencas?: React.ReactNode;
};

const SelectInputDoencas = ({
    label,
    items,
    listaDoencas,
    setListaDoencas
}: SelectInputDoencasProps) => {
    return (
        <Wrapper>
            <Label>{label}</Label>

            <Select
                onChange={(e) =>
                    setListaDoencas([...listaDoencas, e.target.value])
                }
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

            <Selected>
                {listaDoencas?.map((doenca, index) => (
                    <SelectedItem key={`doenca-${index}`}>
                        {doenca}

                        <SelectedIconClose>
                            <CloseOutline
                                onClick={(e) =>
                                    setListaDoencas(
                                        listaDoencas.filter((e) => e !== doenca)
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
