import Footer from "../components/footer";
import Header from "../components/header";

type props = {
  children: JSX.Element;
};

export default function MainLayout({ children }: props) {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}
