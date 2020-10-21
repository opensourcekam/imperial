import * as React from "react";
import { ICONS } from "../../icons";
interface IIconProps {
    icon: ICONS;
    color?: string;
    size?: number;
}
declare const Icon: React.SFC<IIconProps>;
export default Icon;
