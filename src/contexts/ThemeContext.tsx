import { Context, createContext } from "react";
import type ThemeContextData from "../types/ThemeContextData";
import DEFAULT_THEME_DATA from "../constants/theme-data";

const ThemeContext: Context<ThemeContextData> =
  createContext<ThemeContextData>(DEFAULT_THEME_DATA);

export default ThemeContext;