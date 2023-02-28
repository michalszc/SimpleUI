import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import HexInput from "../../../src/components/ColorPicker/ColorInput/HexInput";

describe("HSLAInput", () => {
    const color = '#FFF';
    const mockFn = jest.fn();
    test("should properly render HexInput component", () => {
        const container = render(<HexInput color={color} setColor={mockFn}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly set color values", () => {
        const { getByRole } = render(<HexInput color={color} setColor={mockFn}/>);
        const input = getByRole('textbox');
        expect(input).toHaveValue('FFF');
    });
});
