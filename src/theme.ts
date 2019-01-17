interface IColors {
  primary: string;
  secondary: string;
  tersheary: string;
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

const theme: ThemeInterface = {
  color: {
    primary: "#F44336",
    secondary: "#1E88E5",
    tersheary: "#FDD835",
    "lightgrey": "#CDD9ED",
    "heavygrey": "#99A3BA",
    "text": "#6C7486",
    "headline": "#3F4656"
  },
  border: {
    "radius": "15px"
  }
};

export default interface ThemeInterface {
  color: IColors;
  border: IBorders;
  [key: string]: any;
}

export { theme };
