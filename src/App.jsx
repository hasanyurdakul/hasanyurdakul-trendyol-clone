import Navbar from "./components/Navbar/Navbar";
import CircleCarousel from "./components/CircleCarousel/CircleCarousel";
import CallToAction from "./components/CallToAction/CallToAction";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import TrioBanner from "./components/TrioBanner/TrioBanner";
import FlashProducts from "./components/FlashProducts/FlashProducts";
import BestSellers from "./components/BestSellers/BestSellers";
import AdvantageProducts from "./components/AdvantageProducts/AdvantageProducts";
import FullBanner from "./components/FullBanner/FullBanner";
import MightInterstYouPills from "./components/MightInterstYouPills/MightInterstYouPills";
import WallOfText from "./components/WallOfText/WallOfText";
import PopularLinksGrid from "./components/PopularLinksGrid/PopularLinksGrid";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CircleCarousel />
      <CallToAction />
      <PopularProducts />
      <TrioBanner />
      <FlashProducts />
      <BestSellers />
      <AdvantageProducts />
      <FullBanner />
      <MightInterstYouPills />
      <WallOfText />
      <PopularLinksGrid />
      <Footer />
    </div>
  );
}

export default App;
