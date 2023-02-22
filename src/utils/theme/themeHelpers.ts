import Theme from "./theme";

export function createCSSvariables(theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const iterate = (obj: { [index: string]: any; }, prefix = '--simpleui') => {
        Object.keys(obj).forEach(key => {
            const newPrefix = `${prefix}-${key}`;
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                iterate(obj[key], newPrefix);
            } else {
                root.style.setProperty(newPrefix, obj[key]);
            }
        });
    };
    
    iterate(theme);
}

export const isDarkTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
