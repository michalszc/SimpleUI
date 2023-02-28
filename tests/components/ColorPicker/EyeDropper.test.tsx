import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import EyeDropper from "../../../src/components/ColorPicker/EyeDropper";

function setupEyeDropper() {
    Object.defineProperty(window, 'EyeDropper', {
        writable: true,
        value: jest.fn().mockImplementation(() => ({})),
    });
}

describe("EyeDropper", () => {
    const mockFn = jest.fn();
    test("should not render EyeDropper component, due to lack of implementation", () => {
        const { container } = render(<EyeDropper shape={'circle'} setColor={mockFn} />);
        expect(container).toBeEmptyDOMElement();
    });
    test("should properly render EyeDropper component - shape circle", () => {
        setupEyeDropper();
        const container = render(<EyeDropper shape={'circle'} setColor={mockFn} />);
        expect(container).toMatchSnapshot();
    });
    test("should properly render EyeDropper component - shape square", () => {
        setupEyeDropper();
        const container = render(<EyeDropper shape={'square'} setColor={mockFn} />);
        expect(container).toMatchSnapshot();
    });
    test("should properly render EyeDropper component - shape roundedSquare", () => {
        setupEyeDropper();
        const container = render(<EyeDropper shape={'roundedSquare'} setColor={mockFn} />);
        expect(container).toMatchSnapshot();
    });
});
