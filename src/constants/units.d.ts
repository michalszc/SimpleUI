type AbsoluteUnits = 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'px';
type RelativeUnits = 'em' | 'ex' | 'ch' | 'rem' | 'lh' | 'rlh' 
                    | 'vw' | 'vh' | 'vmin' | 'vmax' | 'vb' 
                    | 'vi' | 'svw' | 'svh' | 'lvw'  | 'lvh' 
                    | 'dvw' | 'dvh';
type Units = AbsoluteUnits | RelativeUnits | '%';

export type { AbsoluteUnits, RelativeUnits, Units };