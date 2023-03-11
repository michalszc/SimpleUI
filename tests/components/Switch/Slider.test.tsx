import React from "react";
import { render } from "@testing-library/react";
import Slider from "../../../src/components/Switch/Slider";

describe("Slider", () => {
    test("should properly render Slider component - shape circle, enabled", () => {
        const container = render(<Slider shape={'circle'} isDisabled={false} isReadonly={false}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Slider component - shape square, enabled", () => {
        const container = render(<Slider shape={'square'} isDisabled={false} isReadonly={false}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Slider component - shape roundedSquare, enabled", () => {
        const container = render(<Slider shape={'roundedSquare'} isDisabled={false} isReadonly={false}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Slider component - shape circle, disabled", () => {
        const container = render(<Slider shape={'circle'} isDisabled={true} isReadonly={false}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Slider component - shape square, disabled", () => {
        const container = render(<Slider shape={'square'} isDisabled={true} isReadonly={false}/>);
        expect(container).toMatchSnapshot();
    });
    test("should properly render Slider component - shape roundedSquare, disabled", () => {
        const container = render(<Slider shape={'roundedSquare'} isDisabled={true} isReadonly={false}/>);
        expect(container).toMatchSnapshot();
    });
});
