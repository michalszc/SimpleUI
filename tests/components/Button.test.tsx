import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Button } from "../../src";

describe("Button", () => {

  const onClick = jest.fn();

  afterEach(() => {
    onClick.mockClear();
  });

  test("renders the Button component", () => {
    const { getByRole } = render(<Button>Test</Button>);
    const btn = getByRole('button');

    expect(btn).toBeTruthy();
  });

  test("button has been clicked", () => {
    const { getByRole } = render(<Button onClick={onClick}>Test</Button>);
    const btn = getByRole('button');

    fireEvent.click(btn);
    expect(onClick).toBeCalled();
  });

  test("disable button doesn't fire onClick event", () => {
    const { getByRole } = render(<Button isDisable={true} onClick={onClick}>Test</Button>);
    const disableBtn = getByRole('button');

    fireEvent.click(disableBtn);
    expect(onClick).not.toBeCalled();
  });

});
