import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Trending from "./components/Trending";
import MostPlayed from "./components/MostPlayed";
import Categories from "./components/Categories";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Trending />
      <MostPlayed />
      <Categories />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
