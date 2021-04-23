import { render, screen } from "@testing-library/react";

import TextArea, { TextAreaProps } from ".";

const props: TextAreaProps = {
    title: "A simple text"
};

describe("<TextArea />", () => {
    it("should render component correctly", () => {
        render(<TextArea {...props} />);

        expect(screen.getByText(/a simple text/i)).toBeInTheDocument();

        expect(
            screen.getByRole("textbox", { TextArea: /textarea-input/i })
        ).toBeInTheDocument();
    });
});
