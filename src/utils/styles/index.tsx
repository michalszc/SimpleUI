import React, { FC, useMemo } from "react";
import getCss from './get';
import type { StyleProps } from "./styles";
import type { Config } from "./config";
import { useTheme } from "../theme";

export type { StyleProps };

interface StylesComponentProps 
    extends StyleProps {
    children: React.ReactNode;
}

const Styles: FC<StylesComponentProps> = ({ children, ...listOfStyles }) => {
    const style = useMemo(
        () => getCss(listOfStyles as Config),
        [listOfStyles]
    ) as React.CSSProperties;

    const { isDark, theme } = useTheme();

    const childrenWithProps = React.cloneElement(
        React.Children.only(children) as React.ReactElement,
        {
            style,
            theme,
            isdark: isDark.toString()
        }
    );
    
    return (
        <>
            {childrenWithProps}
        </>
    );
};

export default Styles;
