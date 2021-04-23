import { render, screen } from "@testing-library/react";

import SelectInput, { SelectInputQueixasProps } from ".";

import selectMock from "./mock";

const props: SelectInputQueixasProps = {
    label: "A simple title",
    items: selectMock
};

describe("<SelectInput />", () => {
    it("should render component correctly", () => {
        render(<SelectInput {...props} />);

        expect(screen.getByText(/a simple title/i)).toBeInTheDocument();

        expect(
            screen.getByRole("option", { name: selectMock[0].label })
        ).toHaveAttribute("value", `${selectMock[0].label}`);
    });
});
