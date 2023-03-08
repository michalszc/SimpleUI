import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ColorList from "../../../src/components/ColorPicker/ColorList";
import { DataType } from "csstype";

function setupEyeDropper() {
    Object.defineProperty(window, 'EyeDropper', {
        writable: true,
        value: jest.fn().mockImplementation(() => ({})),
    });
}

describe("ColorList", () => {
    const mockFn = jest.fn();
    const colors: DataType.Color[] = [
        "#b2dfdb",
        "#ffcdd2",
        "#b3e5fc",
        "#d7ccc8"
    ];
    test("should properly render ColorList component - shape circle", () => {
        const container = render(<ColorList colors={colors} shape={'circle'} size={[2,2]} eyeDropper={false} setColor={mockFn} />);
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorList component - shape square", () => {
        const container = render(<ColorList colors={colors} shape={'square'} size={[2,2]} eyeDropper={false} setColor={mockFn} />);
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorList component - shape roundedSquare", () => {
        const container = render(<ColorList colors={colors} shape={'roundedSquare'} size={[2,2]} eyeDropper={false} setColor={mockFn} />);
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorList component with EyeDropper", () => {
        setupEyeDropper();
        const { container, getByTestId } = render(<ColorList colors={colors} shape={'circle'} size={[2,2]} eyeDropper={true} setColor={mockFn} />);
        const eyeDropper = getByTestId('test-eyedropper');
        expect(container).toMatchSnapshot();
        expect(eyeDropper).toBeTruthy();
    });
    test("should properly trigger setColor function on click", () => {
        const { getAllByTestId } = render(<ColorList colors={colors} shape={'circle'} size={[2,2]} eyeDropper={true} setColor={mockFn} />);
        const colorSelectors = getAllByTestId('test-colorselector');
        fireEvent.click(colorSelectors[0]);
        expect(mockFn).toBeCalled();
    });
});
