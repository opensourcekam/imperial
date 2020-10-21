interface IColors {
    primary: string;
    secondary: string;
    tertiary: string;
    lightgrey: string;
    heavygrey: string;
    text: string;
    headline: string;
    [key: string]: string;
}
interface IBorders {
    radius: string;
    [key: string]: string;
}
interface IBox {
    shadow: string;
    hovershadow: string;
    [key: string]: string;
}
declare const theme: IThemeInterface;
export default interface IThemeInterface {
    color: IColors;
    border: IBorders;
    box: IBox;
    [key: string]: any;
}
export { theme };
