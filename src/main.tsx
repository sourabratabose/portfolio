import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@radix-ui/themes/styles.css";
import "./RadixStylesMods.css";
import ThemeProvider from "./providers/ThemeContext.tsx";
import PageDataProvider from "./providers/PageDataContext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<PageDataProvider>
				<App />
			</PageDataProvider>
		</ThemeProvider>
	</StrictMode>,
);
