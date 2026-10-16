import { type Context, createContext } from "react";
import DEFAULT_PAGE_DATA from "../constants/page-data";
import type PageData from "../types/PageDataContext";

const PageDataContext: Context<PageData> =
	createContext<PageData>(DEFAULT_PAGE_DATA);

export default PageDataContext;
