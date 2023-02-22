import React from "react";
import { render } from "@testing-library/react";
import { Select } from "../../src";
import { Option } from "../../src/utils/types/option";

describe("Select", () => {

    const data: Option[] = [
        {
            index: '1',
            value: 'First option',
        },
        {
            index: '2',
            value: 'Second option',
        },
        {
            index: '3',
            value: 'Third option',
        },
    ];

    test("renders the Select component", () => {
        render(
            <Select 
                values={data}
                placeholder='test'
            />
        );
    });

});
