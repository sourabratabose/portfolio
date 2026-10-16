import { ReactNode } from "react";
import DEFAULT_PAGE_DATA from "../constants/page-data";
import PageDataContext from "../contexts/PageDataContext";

export default function PageDataProvider({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<PageDataContext.Provider value={DEFAULT_PAGE_DATA}>
			{children}
		</PageDataContext.Provider>
	);
}
