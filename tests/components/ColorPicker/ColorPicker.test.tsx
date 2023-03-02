import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ColorPicker } from "../../../src/components/ColorPicker";
import { predefinedColors } from "../../../src/components/ColorPicker/ColorPicker";
import { DataType } from "csstype";

function setupEyeDropper() {
    Object.defineProperty(window, 'EyeDropper', {
        writable: true,
        value: jest.fn().mockImplementation(() => ({})),
    });
}

describe("ColorPicker", () => {
    test("should properly render ColorPicker component with default props", () => {
        const { container, getAllByTestId } = render(<ColorPicker />);
        const colorSelectors = getAllByTestId('test-colorselector');
        expect(colorSelectors).toHaveLength(predefinedColors.length);
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorPicker component with own colors", () => {
        const colors: DataType.Color[] = [
            "#b2dfdb",
            "#ffcdd2",
            "#b3e5fc",
            "#d7ccc8"
        ];
        const { container, getAllByTestId } = render(<ColorPicker colors={colors} />);
        const colorSelectors = getAllByTestId('test-colorselector');
        expect(colorSelectors).toHaveLength(colors.length);
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorPicker component with eyeDropper", () => { 
        setupEyeDropper();
        const container = render(<ColorPicker eyeDropper={true} />);
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorPicker component with header", () => { 
        const container = render(<ColorPicker header={true} />);
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorPicker component with custom size", () => { 
        const container = render(<ColorPicker size={[1, 20]} />);
        expect(container).toMatchSnapshot();
    });
    test("should throw error due to empty colors array", () => {
        expect(() => render(<ColorPicker colors={[]} />))
        .toThrow('Colors array should contain at least one item');
    });
    test("should throw an error due to negative size values", () => {
        expect(() => render(<ColorPicker size={[-1,-1]} />))
        .toThrow('Size should contain numbers greater than 0');
    });
    test("should throw an error due to negative row value", () => {
        expect(() => render(<ColorPicker row={-1} />))
        .toThrow('Row should be greater than 0');
    });
    test("should throw an error due to negative column value", () => {
        expect(() => render(<ColorPicker column={-1} />))
        .toThrow('Column should be greater than 0');
    });
    test("should properly trigger onChange function on click", () => {
        const mockFn = jest.fn();
        const { getAllByTestId } = render(<ColorPicker onChange={mockFn}/>);
        const colorSelectors = getAllByTestId('test-colorselector');
        fireEvent.click(colorSelectors[0]);
        expect(mockFn).toBeCalled();
    });
});
