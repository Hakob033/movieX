import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./components/card";
import FilmPage from "./pages/filmPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/films/:id" element={<FilmPage />} />
      <Route></Route>
      <Route></Route>
    </Routes>
  );
}

export default App;
