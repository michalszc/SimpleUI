import React, { FC, useEffect, useState } from "react";
import Theme from "./theme";
import defaultTheme from "./defaultTheme";
import isDarkTheme from "./isDarkTheme";
import ThemeContext from "./themeContext";
import { merge } from "lodash";
import createCSSvariables from "./createCSSvariables";

export interface ThemeProviderProps {
    /**
     * Allow user to control theme
     */
    allowControl?: boolean;
    /**
     * `Dark mode`: `false` (the default) or `true`
     */
    isDark?: boolean;
    /**
     * `Theme configuration`: If it is not passed, the default configuration is used.
     */
    theme?: Theme
    children?: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
    allowControl = false, isDark = false, theme = {}, children
}) => {
    const [dark, setDark] = useState<boolean>(isDark);
    const themeConfig = merge(theme, defaultTheme);

    createCSSvariables(themeConfig); // create CSS variables

    // On mount, read system theme
    useEffect(() => {
        if (allowControl) {
            const userDark = JSON.parse(localStorage.getItem('isDark')!) ?? isDarkTheme();
            setDark(userDark);
        }
    }, []);

    const toggle = () => {
        const toggleDark = !dark;
        if (allowControl) {
            localStorage.setItem('isDark', JSON.stringify(toggleDark));
        }
        setDark(toggleDark);
    };

    return (
        <ThemeContext.Provider value={{
            isDark: dark,
            theme: themeConfig,
            toggle
        }}>
            {children}
        </ThemeContext.Provider>  
    );
};

export default ThemeProvider;
