import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const BackendLayout = () => {
  return (
    <section className="maincontent">
      <Header />
      <div className="container-fluid">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </section>
  );
};
export default BackendLayout;
