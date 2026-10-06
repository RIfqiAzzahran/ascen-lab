import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { colors } from "./theme";
import useReveal from "./hooks/useReveal";

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
  useReveal();

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
      <Testimonials />
      {divider}
      <Process />
      {divider}
      <Pricing />
      {divider}
      <Faq />
      {divider}
      <Contact />
      <Footer />
    </div>
  );
}
