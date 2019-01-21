import * as React from "react";
export interface ISegmentedControlProps {
    name?: string;
    values: string[];
}
declare const SegmentedControl: React.SFC<ISegmentedControlProps>;
export default SegmentedControl;
