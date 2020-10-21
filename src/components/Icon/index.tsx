import * as React from "react";
import {ICONS} from "../../icons";
interface IIconProps {
  icon: ICONS;
  color?: string;
  size?: number;
}

const Icon: React.SFC<IIconProps> = ({ color, icon, size }) => (
  <svg
    style={{
      display: "inline-block",
      verticalAlign: "middle"
    }}
    width={`${size}rem`}
    height={`${size}rem`}
    viewBox="0 0 1024 1024"
  >
    <path
      style={{
        fill: color
      }}
      d={icon}
    />
  </svg>
);

Icon.defaultProps = { size: 1 };

export default Icon;
