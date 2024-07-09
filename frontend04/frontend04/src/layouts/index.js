import Auth from "../pages/Home/Auth";
import Index from "../pages/Home/Index";
import ProductList from "../pages/Home/ProductList";
import UsersList from "../pages/Home/UserList";
import Footer from "./Footer";
import Header1 from "./Header1";
import "../assets/sass/app.scss";
import '../index.css';
import '../style.css';


const Layouts = () => {
  return (
    <>
      <Header1 />

      <Index />
      {/* <ProductList />  */}
      {/* <Auth /> */}
      <Footer />
    </>
  );
};
export default Layouts;
