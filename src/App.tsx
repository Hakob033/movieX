import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
  );
}

export default App;
