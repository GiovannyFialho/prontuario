import { render, screen } from "@testing-library/react";

import { Container } from ".";

describe("<Container />", () => {
    it("should render component", () => {
        const { container } = render(<Container />);

        expect(container.firstChild).toMatchInlineSnapshot(`
            .c0 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              max-width: 1800px;
              width: 100%;
              margin: auto;
              padding: 0 2rem;
            }

            <div
              class="c0"
            />
        `);
    });
});
