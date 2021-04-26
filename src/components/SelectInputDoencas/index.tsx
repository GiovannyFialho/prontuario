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
    const handleChange = (e) => {
        setListaDoencas([...listaDoencas, e.target.value]);
    };

    const handleClose = (id) => (e) => {
        setListaDoencas(listaDoencas.filter((e) => e !== id));
    };

    return (
        <Wrapper>
            <Label>{label}</Label>

            <Select onChange={handleChange}>
                <option hidden>Selecionar...</option>
                {items.map((item) => (
                    <option key={`item-${item.id}`} value={item.id}>
                        {item.label}
                    </option>
                ))}
            </Select>

            <Selected>
                {listaDoencas?.map((doencaId) => (
                    <SelectedItem key={`doenca-${doencaId}`}>
                        {items.find((doenca) => doenca.id == doencaId)?.label}
                        <SelectedIconClose>
                            <CloseOutline
                                onClick={handleClose(doencaId)}
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
