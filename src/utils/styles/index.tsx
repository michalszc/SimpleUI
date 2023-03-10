import React, { FC, useMemo } from "react";
import type { StyleProps } from "./styles";
import type { Config } from "./config";
import { useTheme } from "../theme";
import { get, has, merge } from "lodash";
import { BaseProps } from "../types";
import getCss from './stylesHelpers';

export type { StyleProps };

interface StylesComponentProps
    extends BaseProps, StyleProps {
    children: React.ReactNode;
}

const Styles: FC<StylesComponentProps> = ({ children, ...props }) => {
    const { isDark, theme } = useTheme();
    const listOfStyles = {
        ...props
    };
    
    const id = get(props, 'id', Math.random().toString(36).slice(2));

    if (has(props, 'variant')) {
        merge(listOfStyles, get(theme, `components.${props.variant}`));
    }

    if (has(props, 'typography')) {
        merge(listOfStyles, get(theme, `typography.${props.typography}`));
    }

    const mode = get(props, 'mode', isDark ? 'dark' : 'light') as 'light' | 'dark';

    const style = useMemo(
        () => getCss(listOfStyles as Config, theme, mode),
        [listOfStyles]
    ) as React.CSSProperties;

    const childrenWithProps = React.cloneElement(
        React.Children.only(children) as React.ReactElement,
        {
            style,
            theme,
            mode,
            id
        }
    );
    
    return (
        <>
            {childrenWithProps}
        </>
    );
};

export default Styles;
