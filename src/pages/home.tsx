import MostRated from "../components/mostRated";
import PopularFilms from "../components/popularFilms";
import MainLayout from "../layouts/mainLayout";

export default function Home() {
  return (
    <MainLayout>
      <>
        <PopularFilms />
        <MostRated />
      </>
    </MainLayout>
  );
}
