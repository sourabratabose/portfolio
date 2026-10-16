import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
	root: "./",
	publicDir: "./public",
	server: {
		port: 5173,
	},
	build: {
		emptyOutDir: true,
		outDir: "./dist",
		copyPublicDir: true,
		cssMinify: "lightningcss",
		rolldownOptions: {
			output: {
				codeSplitting: true,
			},
		},
	},
	plugins: [tailwindcss(), react()],
});
