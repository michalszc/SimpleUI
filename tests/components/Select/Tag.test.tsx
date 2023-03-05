import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Tag from "../../../src/components/Select/Tag";

describe("Tag", () => {
    const mockFn = jest.fn();
    
    test("renders Tag component", () => {
        const container = render(<Tag value="test"/>);
        expect(container).toMatchSnapshot();
    });

    test("should fire onclick event", () => {
        const { getByRole } = render(<Tag value="test" onClick={mockFn}/>);
        const cross = getByRole('link');
        fireEvent.click(cross);
        expect(mockFn).toBeCalled();
    });
});
