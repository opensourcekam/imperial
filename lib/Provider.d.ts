import * as React from "react";
interface IThemeColorsOverrides {
    primary: string;
    secondary: string;
    tertiary: string;
}
export interface IProps {
    colors?: IThemeColorsOverrides;
    shadow?: boolean;
    roundness?: number;
}
declare class Provider extends React.Component<IProps, any> {
    componentWillMount(): void;
    render(): null;
}
export { Provider };
