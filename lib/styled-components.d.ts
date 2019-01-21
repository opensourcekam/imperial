/// <reference types="react" />
import * as styledComponents from "styled-components";
import IThemeInterface from "./theme";
declare const styled: styledComponents.ThemedBaseStyledInterface<IThemeInterface>, css: styledComponents.BaseThemedCssFunction<IThemeInterface>, createGlobalStyle: <P extends object = {}>(first: TemplateStringsArray | styledComponents.CSSObject | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, IThemeInterface>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, IThemeInterface>>[]) => styledComponents.GlobalStyleComponent<P, IThemeInterface>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, ThemeProvider: import("react").ComponentClass<styledComponents.ThemeProviderProps<IThemeInterface, IThemeInterface>, any>;
export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
