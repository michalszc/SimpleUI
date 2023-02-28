import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import ColorSelector from "../../../src/components/ColorPicker/ColorSelector";

describe("ColorSelector", () => {
    const color = '#FFF';
    const mockFn = jest.fn();
    test("should properly render ColorSelector component - shape circle", () => {
        const container = render(
            <ColorSelector color={color} shape={'circle'} setColor={mockFn} />
        );
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorSelector component - shape square", () => {
        const container = render(
            <ColorSelector color={color} shape={'square'} setColor={mockFn} />
        );
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorSelector component - shape roundedSquare", () => {
        const container = render(
            <ColorSelector color={color} shape={'roundedSquare'} setColor={mockFn} />
        );
        expect(container).toMatchSnapshot();
    });
    test("should properly render ColorSelector component with background color", () => {
        const { getByTestId } = render(
            <ColorSelector color={color} shape={'circle'} setColor={mockFn} />
        );
        expect(getByTestId('test-colorselector')).toHaveStyle(`background-color: ${color}`);
    });
});
