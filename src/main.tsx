import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@radix-ui/themes/styles.css";
import "./RadixStylesMods.css";
import PageDataProvider from "./providers/PageDataContext.tsx";
import ThemeProvider from "./providers/ThemeContext.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<ThemeProvider>
				<PageDataProvider>
					<App />
				</PageDataProvider>
			</ThemeProvider>
		</StrictMode>,
	);
}
