import React from "react";
import '@testing-library/jest-dom';
import { fireEvent, render } from "@testing-library/react";
import { Switch } from "../../../src";

describe("Switch", () => {
    const mockFn = jest.fn();
    beforeEach(() => {
        mockFn.mockClear();
    });
    test("should properly render Switch component - default", () => {
        const container = render(<Switch />);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Switch component - checked", () => {
        const container = render(<Switch isChecked={true}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Switch component - shape circle, enabled", () => {
        const container = render(<Switch shape={'circle'} isDisabled={false}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Switch component - shape square, enabled", () => {
        const container = render(<Switch shape={'square'} isDisabled={false}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Switch component - shape roundedSquare, enabled", () => {
        const container = render(<Switch shape={'roundedSquare'} isDisabled={false}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Switch component - shape circle, disabled", () => {
        const container = render(<Switch shape={'circle'} isDisabled={true}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Switch component - shape square, disabled", () => {
        const container = render(<Switch shape={'square'} isDisabled={true}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Switch component - shape roundedSquare, disabled", () => {
        const container = render(<Switch shape={'roundedSquare'} isDisabled={true}/>);
        expect(container).toMatchSnapshot();
    });
    test("should call onChange function on click", () => {
        const { getByTestId } = render(<Switch onChange={mockFn} />);
        const label = getByTestId('test-switchcontainer');
        fireEvent.click(label);
        expect(mockFn).toBeCalled();
    });
    test("should not call onChange function on click - disabled", () => {
        const { getByTestId } = render(<Switch onChange={mockFn} isDisabled={true} />);
        const label = getByTestId('test-switchcontainer');
        fireEvent.click(label);
        expect(mockFn).not.toBeCalled();
    });
    test("should not call onChange function on click - readonly", () => {
        const { getByTestId } = render(<Switch onChange={mockFn} isReadonly={true} />);
        const label = getByTestId('test-switchcontainer');
        fireEvent.click(label);
        expect(mockFn).not.toBeCalled();
    });
});
