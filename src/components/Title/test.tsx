import { render, screen } from "@testing-library/react";

import Title from ".";

describe("<Title />", () => {
    it("should render component with child", () => {
        render(<Title>A simple title</Title>);

        expect(
            screen.getByRole("heading", { name: /a simple title/i })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", { name: /a simple title/i })
        ).toHaveStyle({
            fontSize: "3.2rem"
        });

        expect(
            screen.getByRole("heading", { name: /a simple title/i })
        ).toHaveStyleRule("font-size", "4rem", {
            media: "(min-width: 768px)"
        });
    });
});
