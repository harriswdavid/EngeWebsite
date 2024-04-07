//import Header from './components/Header';

import Header from "./components/Header";
import "./App.css";
import NavBar from "./components/NavBar";
import TrashList from "./components/TrashList";
import TheTrashcan from "./components/TheTrashcan";
import AboutUs from "./components/AboutUs";

function App() {
  const Paper = ["Printer Paper", "Cardboard", "Napkins", "Paper Wraps"];
  const Plastic = ["Utensils", "Cups", "Plastic Bags", "Styrofoam"];
  const Metal = ["Cans", "Aluminum", "Wires", "Sheet Metal"];
  const Compost = ["Food", "Excess liquids", "Food Scraps", "PlaceHolder"];
  return (
    <div>
      <NavBar />
      <Header />
      <div className="listMain">
        <TrashList trashType={Paper} heading="Paper(1)" />
        <TrashList trashType={Plastic} heading="Plastic(2)" />
        <TrashList trashType={Metal} heading="Metal(3)" />
        <TrashList trashType={Compost} heading="Compost(4)" />
      </div>
      <div className="theTrashCan">
        <TheTrashcan />
      </div>

      <div>
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
