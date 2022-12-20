/* ---------------------------- styled component ---------------------------- */
import { GlobalStyle } from "./styles/GlobalStyle";

/* -------------------------------- sections -------------------------------- */
import Quote from "./sections/Quote";
import PhoneModel from "./sections/PhoneModel";
import HeroSection from "./sections/HeroSection";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import ProcessorSection from "./sections/ProcessorSection";
import BatterySection from "./sections/BatterySection";
import ColorSection from "./sections/ColorSection";
import CameraSection from "./sections/CameraSection";
import PricingSection from "./sections/PricingSection";

/* --------------------------------- context -------------------------------- */
import { ColorContextProvider } from "./context/ColorContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorContextProvider>
        <ColorSection />
        <CameraSection />
        <PricingSection />
      </ColorContextProvider>
    </>
  );
}

export default App;
