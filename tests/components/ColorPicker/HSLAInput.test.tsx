import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import HSLAInput from "../../../src/components/ColorPicker/ColorInput/HSLAInput";

describe("HSLAInput", () => {
    const color = '#FFF';
    const mockFn = jest.fn();
    test("should properly render HSLAInput component", () => {
        const container = render(<HSLAInput color={color} setColor={mockFn}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly set color values", () => {
        const { getAllByRole } = render(<HSLAInput color={color} setColor={mockFn}/>);
        const inputs = getAllByRole('textbox');
        expect(inputs[0]).toHaveValue('0');
        expect(inputs[1]).toHaveValue('0');
        expect(inputs[2]).toHaveValue('100');
        expect(inputs[3]).toHaveValue('100');
    });
});
