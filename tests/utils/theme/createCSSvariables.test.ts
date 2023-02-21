import createCSSvariables from "../../../src/utils/theme/createCSSvariables";

type t = { [index: string]: any };

describe("Create CSS variables", () => {
    test("should create CSS variables from the theme configuration", () => {
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
});