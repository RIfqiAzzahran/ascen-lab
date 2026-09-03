import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { colors } from "./theme";

const divider = (
  <hr
    style={{
      border: "none",
      borderTop: `1px solid ${colors.border}`,
      maxWidth: "1000px",
      margin: "0 auto",
    }}
  />
);

export default function App() {
  return (
    <div style={{ background: colors.bg, minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      {divider}
      <Services />
      {divider}
      <Work />
      {divider}
      <Process />
      {divider}
      <Contact />
      <Footer />
    </div>
  );
}
