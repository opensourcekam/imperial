import * as React from "react";
import IThemeInterface, { theme } from "./theme";

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

class Imperial extends React.Component<IProps, any> {
  public componentWillMount() {
    const { colors, shadow, roundness } = this.props;
    const newTheme: IThemeInterface = {
      ...theme,
      color: {
        ...theme.color,
        ...colors
      },
      border: {
        ...theme.border,
        radius: `${roundness}px`
      },
      ...(shadow && {
        box: {
          ...theme.box,
          shadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          hovershadow:
            "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        }
      })
    };

    let base = `
    * {
      box-sizing: inherit;
    }
    
    *:before, *:after {
      box-sizing: inherit;
    }
    
    body {
      font-size: 16px;
      line-height: 22px;
      color: var(--lightgrey-color);
      background: #F5F9FF;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }    
    `;

    let root = ``;

    Object.keys(newTheme).forEach(
      k =>
        (root += `
        :root {
          ${Object.keys(newTheme[k])
            .map(j => `--${j}-${k}: ${newTheme[k][j]};`)
            .join("\n")}
        }
      `)
    );

    var css = `
        ${base}
        ${root}
    `,
      head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("style");

    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  }

  public render() {
    return null;
  }
}

export { Imperial };