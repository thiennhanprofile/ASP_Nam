import Auth from "../pages/Home/Auth";
import Index from "../pages/Home/Index";
import ProductList from "../pages/Home/ProductList";
import UsersList from "../pages/Home/UserList";
import Footer from "./Footer";
import Header from "./Header";

const Layouts = () => {
  return (
    <>
      <Header />

      <Index />
      
      {/* <ProductList /> */}
      {/* <Auth /> */}
      <Footer />
    </>
  );
};
export default Layouts;
