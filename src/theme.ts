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
    primary: "#F44336",
    secondary: "#1E88E5",
    tertiary: "#FDD835",
    "lightgrey": "#CDD9ED",
    "heavygrey": "#99A3BA",
    "text": "#6C7486",
    "headline": "#3F4656"
  },
  border: {
    "radius": "",
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
