import React from "react";
import { render } from "@testing-library/react";
import Styles from "../../../src/utils/styles";
import '@testing-library/jest-dom';

describe("Styles", () => {
  test("should render children", () => {
    const { getByText } = render(
        <Styles>
            <div>
                text
            </div>
        </Styles>
    );

    const container = getByText('text');
    expect(container).toBeTruthy();
  });
  test("should render children with red background", () => {
    const { getByText } = render(
        <Styles bg={'red'}>
            <div>
                text
            </div>
        </Styles>
    );

    const container = getByText('text');
    expect(container).toBeTruthy();
    expect(container).toHaveStyle("background: red");
  });
});