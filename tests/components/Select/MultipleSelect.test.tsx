import React from "react";
import { render } from "@testing-library/react";
import { MultipleSelect } from "../../../src";
import Option from "../../../src/components/Select/Option";

describe("Multiple Select", () => {
    const data =  [
        'First option', 
        'Second option',
        'Third option',
    ];
    const mockFn = jest.fn();
    const color = "#ff0000";

    test("renders the Multiple Select component", () => {
        const container = render(
            <MultipleSelect placeholder="Search value" onChange={(v) => mockFn(v)}>
                <Option value={data[0]}/>
                <Option value={data[1]}/>
                <Option value={data[2]}/>
            </MultipleSelect>
        );

        expect(container).toMatchSnapshot();
    });

    test("renders the Multiple Select component with changed border-color", () => {
        const container = render(
            <MultipleSelect borderColor={color} placeholder="Search value" onChange={(v) => mockFn(v)}>
                <Option value={data[0]}/>
                <Option value={data[1]}/>
                <Option value={data[2]}/>
            </MultipleSelect>
        );
        expect(container).toMatchSnapshot();
    });
});
