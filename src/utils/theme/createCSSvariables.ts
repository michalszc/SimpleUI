import Theme from "./theme";

export default function(theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;
    const iterate = (obj: { [index: string]: any; }, prefix: string = '--simpleui') => {
        Object.keys(obj).forEach(key => {
            const newPrefix = `${prefix}-${key}`;
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                iterate(obj[key], newPrefix)
            } else {
                root.style.setProperty(newPrefix, obj[key]);
            }
        });
    };
    
    iterate(theme);
}
