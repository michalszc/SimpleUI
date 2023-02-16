import getCSS from '../../../src/utils/styles/get';

type t = { [index: string]: string };

describe("Get CSS", () => {
    test("should find CSS props", () => {
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
        const styles: t = getCSS(props);
        expect(styles).toMatchObject(expectedStyles);
    });
    test("should find CSS props and convert their shorthands", () => {
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
        const styles: t = getCSS(props);
        expect(styles).toMatchObject(expectedStyles);
    });
});