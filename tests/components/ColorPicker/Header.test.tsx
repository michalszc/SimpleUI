import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import Header from "../../../src/components/ColorPicker/Header";

describe("Header", () => {
    const color = '#FFF';
    test("should properly render Header component", () => {
        const container = render(<Header color={color} />);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Header with text and background color", () => {
        const { getByText } = render(<Header color={color} />);
        const header = getByText(color);

        expect(header).toBeTruthy();
        expect(header).toHaveStyle(`background-color: ${color}`);
    });
});
