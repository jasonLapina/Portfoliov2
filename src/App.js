import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import About from "./components/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Projects from "./components/Projects";

function App() {
  return (
    <Box pb='40px' overflowX='hidden'>
      <Hero />
      <About />
      <Projects />
    </Box>
  );
}

export default App;
