import isDarkTheme from "../../../src/utils/theme/isDarkTheme";

function setup(matches: boolean) {
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

describe("isDarkTheme", () => {
    test("should return true", () => {
        setup(true);
        expect(isDarkTheme()).toBeTruthy();
    });
    test("should return false", () => {
        setup(false);
        expect(isDarkTheme()).toBeFalsy();
    });
});