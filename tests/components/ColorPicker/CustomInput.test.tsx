import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import CustomInput from "../../../src/components/ColorPicker/ColorInput/CustomInput";

describe("CustomInput", () => {
    const mockFn = jest.fn();
    test("should properly render CustomInput component", () => {
        const container = render(<CustomInput prefix={'prefix'} value={'value'} onChange={mockFn}/>);
        expect(container).toMatchSnapshot();
    });
});
