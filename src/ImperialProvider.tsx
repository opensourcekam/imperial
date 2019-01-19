import * as React from "react";
import IThemeInterface, { theme } from "./theme";

interface IThemeColorsOverrides {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface IProps {
  colors?: IThemeColorsOverrides;
  flat?: boolean;
  roundness?: number;
}

export interface IState { }

export default class ImperialProvider extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  public componentWillMount() {
    const { colors, flat, } = this.props;
    const newTheme: IThemeInterface = {
      ...theme,
      color: {
        ...theme.color,
        ...colors,
      },
      ...(!flat && {box: {
        shadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
        hovershadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);",
        hovertransition: "box-shadow 0.3s cubic-bezier(.25,.8,.25,1);"
      }}),
    };

    let root = ``;
    Object.keys(newTheme)
      .forEach(k => root += `
        :root {
          ${Object
            .keys(newTheme[k])
            .map(j => `--${j}-${k}: ${newTheme[k][j]};`)
            .join("\n")
          }
        }
      `);

    var css = root,
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  }

  public render() {
    return null;
  }
}
