import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Select } from "../../src";
import Option from "../../src/components/Select/Option";

describe("Select", () => {

    const data =  [
        'First option', 
        'Second option',
        'Third option',
    ];

    const mockSetState = jest.fn();

    afterEach(() => {
        mockSetState.mockClear();
      });

    test("renders the Select component", () => {
        const select = render(
            
            <Select placeholder="Search value" onChange={(v) => mockSetState(v)}>
                <Option value={data[0]}/>
                <Option value={data[1]}/>
                <Option value={data[2]}/>
            </Select>
        );

        expect(select).toBeTruthy();
    });

    test("shows options list", () => {
        const { getByRole, getByText } = render(
            <Select placeholder="Search value" onChange={(v) => mockSetState(v)}>
                <Option value={data[0]}/>
                <Option value={data[1]}/>
                <Option value={data[2]}/>
            </Select>
        );  
        const component = getByRole('textbox');
        fireEvent.focus(component);

        const options = getByText('First option');
        expect(options).toBeTruthy();

    });

    test("selecting option change state", () => {
        const { getByRole, getByText } = render(
            <Select placeholder="Search value" onChange={(v) => mockSetState(v)}>
                <Option value={data[0]}/>
                <Option value={data[1]}/>
                <Option value={data[2]}/>
            </Select>
        );  
        const component = getByRole('textbox');
        fireEvent.focus(component);

        const options = getByText('First option');
        expect(options).toBeTruthy();

        fireEvent.click(options);

        expect(mockSetState).toBeCalled();

    });

    test("Option component ", () => {
        const { getByText } = render(
            <Option value="test"/>
        );

        expect(getByText('test')).toBeTruthy();
    });
});