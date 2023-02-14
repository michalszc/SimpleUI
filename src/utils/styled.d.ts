import 'styled-components';

interface Pallete {
    main: string;
    contrastText: string;
    light?: string;
    dark?: string;
}

declare module 'styled-component' {
    export interface DefaultTheme {
        pallete: {
            common: {
                black: string,
                white: string
            }
            primary: Pallete
            secondary: Pallete
        }
    }
}