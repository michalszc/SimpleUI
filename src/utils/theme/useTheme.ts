import { useContext } from "react";
import ThemeContext from "./themeContext"; // eslint-disable-next-line no-duplicate-imports
import type { IThemeContext } from "./themeContext";

const useTheme = () => {
    const { isDark, theme, toggle } = useContext<IThemeContext>(ThemeContext);

    return {
        isDark,
        theme,
        toggle
    } as IThemeContext;
};

export default useTheme;
