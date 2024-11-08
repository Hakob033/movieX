import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./components/card";
import FilmPage from "./pages/filmPage";
import SearchedFilm from "./pages/serachedFilm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/films/:id" element={<FilmPage />} />
      <Route path="/searchedFilm" element={<SearchedFilm />} />
      <Route></Route>
    </Routes>
  );
}

export default App;
