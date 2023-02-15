import type {
    BackgroundProps,
    BorderProps,
    ColorProps,
    EffectProps,
    FlexboxProps,
    GridProps,
    InteractivityProps,
    LayoutProps,
    ListProps,
    PositionProps,
    SpaceProps,
    TextDecorationProps,
    TransformProps,
    TransitionProps,
    TypographyProps,
    ScrollProps,
} from "./config";

export interface StyleProps
  extends SpaceProps,
    ColorProps,
    TransitionProps,
    TypographyProps,
    FlexboxProps,
    TransformProps,
    GridProps,
    LayoutProps,
    BorderProps,
    EffectProps,
    BackgroundProps,
    ListProps,
    PositionProps,
    ScrollProps,
    InteractivityProps,
    TextDecorationProps {}
