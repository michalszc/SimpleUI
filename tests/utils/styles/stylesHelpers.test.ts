import getCSS, { valueConverter } from '../../../src/utils/styles/stylesHelpers';
import { initialState } from "../../../src/utils/theme/themeContext";

type t = { [index: string]: string };

describe("Styles helpers", () => {
    test("Get CSS - should find CSS props", () => {
        const props: t = {
            x: '1',
            y: '2',
            'background': 'red',
            'margin': '10px'
        };
        const expectedStyles: t = {
            'background': 'red',
            'margin': '10px'
        }
        const styles: t = getCSS(props, {});
        expect(styles).toMatchObject(expectedStyles);
    });
    test("Get CSS - should find CSS props and convert their shorthands", () => {
        const props: t = {
            x: '1',
            y: '2',
            'bg': 'red',
            'm': '10px'
        };
        const expectedStyles: t = {
            'background': 'red',
            'margin': '10px'
        }
        const styles: t = getCSS(props, {});
        expect(styles).toMatchObject(expectedStyles);
    });
    test("valueConverter - should properly convert custom value into css value", () => {
        const property = 'width';
        const value = 'sm';
        const expectedValue = '24rem';
        const convertedValue = valueConverter(property, value, initialState.theme);
        expect(convertedValue).toBe(expectedValue);
    });
    test("valueConverter - should not convert passed value cause it's already css value", () => {
        const property = 'width';
        const value = '24rem';
        const expectedValue = '24rem';
        const convertedValue = valueConverter(property, value, initialState.theme);
        expect(convertedValue).toBe(expectedValue);
    });
    test("valueConverter - should not convert passed value because this property cannot have custom value", () => {
        const property = 'position';
        const value = 'static';
        const expectedValue = 'static';
        const convertedValue = valueConverter(property, value, initialState.theme);
        expect(convertedValue).toBe(expectedValue);
    });
    test("Get CSS and valueConverter - should find CSS props, convert their shorthands and custom values", () => {
        const props: t = {
            x: '1',
            y: '2',
            'bg': 'red',
            'm': 'sm'
        };
        const expectedStyles: t = {
            'background': 'red',
            'margin': '24rem'
        }
        const styles: t = getCSS(props, initialState.theme);
        expect(styles).toMatchObject(expectedStyles);
    });
});