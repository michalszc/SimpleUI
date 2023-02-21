import { useContext } from "react";
import ThemeContext from "./themeContext";
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
