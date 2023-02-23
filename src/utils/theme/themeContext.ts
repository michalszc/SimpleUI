import { createContext } from "react";
import defaultTheme from "./defaultTheme";
import Theme from "./theme";

export interface IThemeContext {
    /**
     * Indicates whether it's `dark` mode
     */
    isDark: boolean;
    /**
     * `Theme configuration`
     */
    theme: Theme;
    /**
     * Toggle between `light` and `dark` modes
     */
    toggle: () => void;
}

export const initialState: IThemeContext = {
    isDark: false,
    theme: defaultTheme,
    toggle: () => {} // eslint-disable-line @typescript-eslint/no-empty-function
};

const ThemeContext = createContext<IThemeContext>(initialState);

export default ThemeContext;
