import { Box, Container, Flex, Theme } from "@radix-ui/themes";
import { useContext } from "react";
import About from "./components/About";
import Certifications from "./components/Certifications";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KnowMore from "./components/KnowMore";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ThemeContext from "./contexts/ThemeContext";
import type ThemeContextData from "./types/ThemeContextData";

function App() {
	const { currentTheme }: ThemeContextData = useContext(ThemeContext);
	return (
		<Theme
			appearance={currentTheme}
			accentColor={"iris"}
			grayColor={"gray"}
			radius={"medium"}
		>
			<Header />
			<Container align={"center"} size={"4"}>
				<Flex
					direction={{ initial: "column", md: "row" }}
					gap={"5"}
					justify={"center"}
					align={{ initial: "center", md: "start" }}
					mx={"5"}
					mt={"80px"}
				>
					<Box
						minWidth={{ md: "448px" }}
						width={"100%"}
						px={"3"}
						position={{ initial: "static", md: "sticky" }}
						top={"80px"}
					>
						<Hero />
						<Contact />
						<Newsletter />
					</Box>
					<Flex
						gap={"5"}
						direction={"column"}
						align={"center"}
						justify={"start"}
					>
						<About />
						<Skills />
						<Projects />
						<Experience />
						<Education />
						<CodingProfiles />
						<Certifications />
						<KnowMore />
					</Flex>
				</Flex>
			</Container>
			<Footer />
		</Theme>
	);
}

export default App;
