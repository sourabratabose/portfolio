import { type Context, createContext } from "react";
import DEFAULT_THEME_DATA from "../constants/theme-data";
import type ThemeContextData from "../types/ThemeContextData";

const ThemeContext: Context<ThemeContextData> =
	createContext<ThemeContextData>(DEFAULT_THEME_DATA);

export default ThemeContext;
