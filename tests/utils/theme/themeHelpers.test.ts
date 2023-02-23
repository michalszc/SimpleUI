import { createCSSvariables, isDarkTheme } from "../../../src/utils/theme/themeHelpers";

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

describe("Theme helpers", () => {
    test("Create CSS variables - should create CSS variables from the theme configuration", () => {
      const style = {
        variables: {} as t,
        setProperty(name: string, value: any) {
          this.variables[name] = value;
        }
      }
      jest.spyOn(document, 'querySelector').mockImplementation(() => ({ style }) as unknown as Element);
      const theme: t = {
        palette: {
          main: 'color' 
        },
        breakpoints: {
          'xs': '0px'
        }
      };
      const expectedVariables: t = {
          '--simpleui-palette-main': 'color',
          '--simpleui-breakpoints-xs': '0px'
      };
      createCSSvariables(theme);
      expect(style.variables).toStrictEqual(expectedVariables);
    });
    test("isDarkTheme - should be dark mode", () => {
        setupMatchMedia(true);
        expect(isDarkTheme()).toBeTruthy();
    });
    test("isDarkTheme - should be light mode", () => {
        setupMatchMedia(false);
        expect(isDarkTheme()).toBeFalsy();
    });
});