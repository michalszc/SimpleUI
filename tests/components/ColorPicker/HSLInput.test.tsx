import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import HSLInput from "../../../src/components/ColorPicker/ColorInput/HSLInput";

describe("HSLInput", () => {
    const color = '#FFF';
    const mockFn = jest.fn();
    test("should properly render HSLInput component", () => {
        const container = render(<HSLInput color={color} setColor={mockFn}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly set color values", () => {
        const { getAllByRole } = render(<HSLInput color={color} setColor={mockFn}/>);
        const inputs = getAllByRole('textbox');
        expect(inputs[0]).toHaveValue('0');
        expect(inputs[1]).toHaveValue('0');
        expect(inputs[2]).toHaveValue('100');
    });
});
