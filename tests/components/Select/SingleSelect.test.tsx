import React from "react";
import { render } from "@testing-library/react";
import { SingleSelect } from "../../../src";
import Option from "../../../src/components/Select/Option";

describe("Single Select", () => {
    const data =  [
        'First option', 
        'Second option',
        'Third option',
    ];
    const mockFn = jest.fn();
    const color = "#ff0000";

    test("renders the Single Select component", () => {
        const container = render(
            <SingleSelect placeholder="Search value" onChange={(v) => mockFn(v)}>
                <Option value={data[0]}/>
                <Option value={data[1]}/>
                <Option value={data[2]}/>
            </SingleSelect>
        );

        expect(container).toMatchSnapshot();
    });

    test("renders the Single Select component with changed border-color", () => {
        const container = render(
            <SingleSelect borderColor={color} placeholder="Search value" onChange={(v) => mockFn(v)}>
                <Option value={data[0]}/>
                <Option value={data[1]}/>
                <Option value={data[2]}/>
            </SingleSelect>
        );
        
        expect(container).toMatchSnapshot();
    });
});
