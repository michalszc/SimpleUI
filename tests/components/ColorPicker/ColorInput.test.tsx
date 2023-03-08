import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import ColorInput from "../../../src/components/ColorPicker/ColorInput/ColorInput";

describe("ColorInput", () => {
    const color = '#FFF';
    const mockFn = jest.fn();
    test("should properly render ColorInput component - type hex", () => {
        const { container, getByRole } = render(<ColorInput color={color} setColor={mockFn} type={'hex'}/>);
        const input = getByRole('textbox');
        expect(input).toHaveValue('FFF');
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorInput component - type hsl", () => {
        const { container, getAllByRole } = render(<ColorInput color={color} setColor={mockFn} type={'hsl'}/>);
        const inputs = getAllByRole('textbox');
        expect(inputs[0]).toHaveValue('0');
        expect(inputs[1]).toHaveValue('0');
        expect(inputs[2]).toHaveValue('100');
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorInput component - type hsla", () => {
        const { container, getAllByRole } = render(<ColorInput color={color} setColor={mockFn} type={'hsla'}/>);
        const inputs = getAllByRole('textbox');
        expect(inputs[0]).toHaveValue('0');
        expect(inputs[1]).toHaveValue('0');
        expect(inputs[2]).toHaveValue('100');
        expect(inputs[3]).toHaveValue('100');
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorInput component - type rgb", () => {
        const { container, getAllByRole } = render(<ColorInput color={color} setColor={mockFn} type={'rgb'}/>);
        const inputs = getAllByRole('textbox');
        expect(inputs[0]).toHaveValue('255');
        expect(inputs[1]).toHaveValue('255');
        expect(inputs[2]).toHaveValue('255');
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorInput component - type rgba", () => {
        const { container, getAllByRole } = render(<ColorInput color={color} setColor={mockFn} type={'rgba'}/>);
        const inputs = getAllByRole('textbox');
        expect(inputs[0]).toHaveValue('255');
        expect(inputs[1]).toHaveValue('255');
        expect(inputs[2]).toHaveValue('255');
        expect(inputs[3]).toHaveValue('100');
        expect(container).toMatchSnapshot();
    });
});
