import { Meta, Story } from "@storybook/react/types-6-0";

import SelectInput, { SelectInputProps } from ".";

import selectMock from "./mock";

export default {
    title: "SelectInput",
    component: SelectInput,
    args: {
        label: "Doenças Adulto",
        items: selectMock
    },
    parameters: {
        layout: "fullscreen"
    }
} as Meta;

export const Default: Story<SelectInputProps> = (args) => (
    <div style={{ maxWidth: "40rem" }}>
        <SelectInput {...args} />
    </div>
);
