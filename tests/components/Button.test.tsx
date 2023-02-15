import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../../src";


describe("Button", () => {

  const onClick = jest.fn();

  afterEach(() => {
    onClick.mockClear();
  });

  test("renders the Button component", () => {
    render(<Button>Test</Button>);
    expect(screen.findByText('Test')).toBeTruthy();
  });

  test("button have been clicked", () => {
    render(<Button onClick={onClick}>Test</Button>);
    const btn  = screen.getByRole('button');

    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("disable button doesn't fire onClick event", () => {
    render(<Button isDisable={true} onClick={onClick}>Test</Button>);
    const disableBtn  = screen.getByRole('button');

    fireEvent.click(disableBtn);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

});