import React from "react";
import '@testing-library/jest-dom';
import { fireEvent, render } from "@testing-library/react";
import { FormLabel, Switch } from "../../src"; 

describe("FormLabel", () => {
    test("should properly render FormLabel component", () => {
        const container = render(<FormLabel />);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Header with children", () => {
        const { getByText } = render(
            <FormLabel>
                test
            </FormLabel>
        );
        const label = getByText('test');
        expect(label).toBeTruthy();
    });
    test("should properly handle htmlfor attribute", () => {
        const mockFn = jest.fn();
        const { getByText } = render(
            <>
                <FormLabel htmlFor={'formlabel-test-id'}>
                    test
                </FormLabel>
                <Switch onChange={mockFn} id={'formlabel-test-id'}/>
            </>
        );
        const label = getByText('test');
        expect(label).toBeTruthy();
        fireEvent.click(label);
        expect(mockFn).toBeCalled();
    });
});
