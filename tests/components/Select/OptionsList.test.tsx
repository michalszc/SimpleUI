import React from "react";
import { render } from "@testing-library/react";
import OptionsList from "../../../src/components/Select/OptionsList";
import Option from "../../../src/components/Select/Option";

describe("OptionsList", () => {
    const data =  [
        'First option', 
        'Second option',
        'Third option',
    ];
    const options = [
        <Option value={data[0]}/>,
        <Option value={data[1]}/>,
        <Option value={data[2]}/>
    ];
    const mockFn = jest.fn();

    test("renders list with Option components", () => {
        const { container } = render(
            <OptionsList 
            searchInput="" 
            updateSelectedOptionsFunction={mockFn} 
            checkIfSelectedFunction={mockFn} 
            children={options}
            />
        );
        expect(container).toMatchSnapshot();
    });
});
