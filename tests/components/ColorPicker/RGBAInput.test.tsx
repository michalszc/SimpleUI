import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import RGBAInput from "../../../src/components/ColorPicker/ColorInput/RGBAInput";

describe("RGBAInput", () => {
    const color = '#FFF';
    const mockFn = jest.fn();
    test("should properly render RGBAInput component", () => {
        const container = render(<RGBAInput color={color} setColor={mockFn}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly set color values", () => {
        const { getAllByRole } = render(<RGBAInput color={color} setColor={mockFn}/>);
        const inputs = getAllByRole('textbox');
        expect(inputs[0]).toHaveValue('255');
        expect(inputs[1]).toHaveValue('255');
        expect(inputs[2]).toHaveValue('255');
        expect(inputs[3]).toHaveValue('100');
    });
});
