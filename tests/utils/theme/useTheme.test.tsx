import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../../src";
import { initialState } from "../../../src/utils/theme/themeContext";

type t = { [index: string]: any };

describe("Get CSS", () => {
    afterEach(() => {
        cleanup();
    });
    test("should return the default theme configuration if there is no provider", () => {
        let useThemeResult;
        const TestComponent = () => {
            
            useThemeResult = useTheme();

            return (
                <div></div>
            );
        }
        render(<TestComponent/>);
        expect(useThemeResult).toStrictEqual(initialState);        
    });
    test("should return the theme configuration defined in the provider", () => {
        const expectedResult: t = {
            theme: initialState.theme,
            isDark: true
        };
        let useThemeResult;
        const TestComponent = () => {
            
            useThemeResult = useTheme();

            return (
                <div></div>
            );
        }
        render(
            <ThemeProvider isDark={true}>
                <TestComponent/>
            </ThemeProvider>
        );
        expect(useThemeResult).toMatchObject({
            ...expectedResult,
            toggle: expect.anything()
        });        
    });
});