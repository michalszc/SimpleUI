import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Option from "../../../src/components/Select/Option";

describe("Option", () => {
    const mockFn = jest.fn();
    
    test("renders Option component", () => {
        const container = render(<Option value="test"/>);
        expect(container).toMatchSnapshot();
    });

    test("should fire onclick event", () => {
        const { getByText } = render(<Option value="test" onClick={mockFn}/>);
        fireEvent.click(getByText('test'));
        expect(mockFn).toBeCalled();
    });
});
