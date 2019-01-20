interface IColors {
  primary: string;
  secondary: string;
  tertiary: string;
  "lightgrey": string;
  "heavygrey": string;
  "text": string;
  "headline": string;
  [key: string]: string;
}

interface IBorders {
  "radius": string;
  [key: string]: string;
}

interface IBox {
  "shadow": string;
  "hovershadow": string;
  [key: string]: string;
}

const theme: IThemeInterface = {
  color: {
    primary: "#8C6FF0",
    secondary: "#5628EE",
    tertiary: "#F6D87C",
    lightgrey: "#CDD9ED",
    heavygrey: "#99A3BA",
    text: "#6C7486",
    headline: "#3F4656"
  },
  border: {
    radius: "3px",
  },
  box: {
    shadow: "none",
    hover: "none",
    hovershadow: "none",
    hoverstransition: "none"
  }
};

export default interface IThemeInterface {
  color: IColors;
  border: IBorders;
  box: IBox;
  [key: string]: any;
}

export { theme };
