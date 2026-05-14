import About from "./components/About";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Location from "./components/Location";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";
import Vip from "./components/Vip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-24">
        <Hero />
        <About />
        <Events />
        <Vip />
        <MenuSection />
        <Gallery />
        <Location />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
