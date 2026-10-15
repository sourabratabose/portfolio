import { Context, createContext } from "react";
import type PageData from "../types/PageDataContext";
import DEFAULT_PAGE_DATA from "../constants/page-data";

const PageDataContext: Context<PageData> =
  createContext<PageData>(DEFAULT_PAGE_DATA);

export default PageDataContext;
