import React from "react";
import { render } from "@testing-library/react";
import Container from "../../../src/components/Switch/Container";

describe("Container", () => {
    test("should properly render Container component", () => {
        const container = render(
            <Container>
            </Container>
        );
        expect(container).toMatchSnapshot();
    });
    test("should properly render Container component with children", () => {
        const container = render(
            <Container>
                <div/>
            </Container>
        );
        expect(container).toMatchSnapshot();
    });
});
