import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../../src";
import { initialState } from "../../../src/utils/theme/themeContext";
import '@testing-library/jest-dom';
import { merge } from "lodash";

type t = { [index: string]: any };

function setupMatchMedia(matches: boolean) {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
}

describe("ThemeProvider", () => {
    afterEach(() => {
        cleanup();
    });
    test("should render children with default configuration", () => {
        let config;
        const TestComponent = () => {
            
            config = useTheme();

            return (
                <div>test</div>
            );
        }
        const { getByText } = render(
            <ThemeProvider>
                <TestComponent/>
            </ThemeProvider>
        );
        const container = getByText('test');
        expect(container).toBeTruthy();
        expect(config).toStrictEqual({
            ...initialState,
            toggle: expect.anything()
        });
    });
    test("should render children with passed configuration", () => {
        const customTheme: t = {
            palette: {
                custom: {
                    light: 0,
                    main: 1,
                    dark: 2,
                    contrast: 3
                }
            }
        };
        let config;
        const TestComponent = () => {
            
            config = useTheme();
            
            return (
                <div>test</div>
                );
            }
            const { getByText } = render(
                <ThemeProvider isDark={true} theme={customTheme}>
                <TestComponent/>
            </ThemeProvider>
        );
        const container = getByText('test');
        expect(container).toBeTruthy();
        expect(config).toStrictEqual({
            isDark: true,
            theme: merge(customTheme, initialState.theme),
            toggle: expect.anything()
        });
    });
    test("should render children with user control - system preferences", () => {
        setupMatchMedia(true);
        jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => null);
        let config;
        const TestComponent = () => {
            
            config = useTheme();

            return (
                <div>test</div>
            );
        }
        const { getByText } = render(
            <ThemeProvider allowControl={true}>
                <TestComponent/>
            </ThemeProvider>
        );
        const container = getByText('test');
        expect(container).toBeTruthy();
        expect(config).toStrictEqual({
            isDark: true,
            theme: initialState.theme,
            toggle: expect.anything()
        });
    });
    test("should render children with user control - user preferences", () => {
        setupMatchMedia(false);
        jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => 'true');
        let config;
        const TestComponent = () => {
            
            config = useTheme();

            return (
                <div>test</div>
            );
        }
        const { getByText } = render(
            <ThemeProvider allowControl={true}>
                <TestComponent/>
            </ThemeProvider>
        );
        const container = getByText('test');
        expect(container).toBeTruthy();
        expect(config).toStrictEqual({
            isDark: true,
            theme: initialState.theme,
            toggle: expect.anything()
        });
    });
});