import PopularFilms from "./components/popularFilms";
import MainLayout from "./layouts/mainLayout";

function App() {
  return <MainLayout children={<PopularFilms />}></MainLayout>;
}

export default App;
