import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beers from "./pages/Beers/Beers";
import Home from "./pages/Home/Home";
import NewBeer from "./pages/NewBeer/NewBeer";
import RandomBeer from "./pages/RandomBeer/RandomBeer";
import BeerPage from "./pages/BeerPage/BeerPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/randombeer" element={<RandomBeer />} />
      <Route path="/newbeer" element={<NewBeer />} />
      <Route path="/beers/:beersId" element={<BeerPage />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
