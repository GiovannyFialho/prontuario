import { Meta, Story } from "@storybook/react/types-6-0";

import Title, { TitleProps } from ".";

export default {
    title: "Title",
    component: Title,
    args: {
        children: "Prontuário de cadastrado"
    }
} as Meta;

export const Default: Story<TitleProps> = (args) => <Title {...args} />;
