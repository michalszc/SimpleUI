import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ColorPicker } from "../../../src/components/ColorPicker";
import { DataType } from "csstype";

function setupEyeDropper() {
    Object.defineProperty(window, 'EyeDropper', {
        writable: true,
        value: jest.fn().mockImplementation(() => ({})),
    });
}

describe("ColorList", () => {

});
