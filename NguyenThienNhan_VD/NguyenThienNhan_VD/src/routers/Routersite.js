import Layouts from "../layouts";
import "../assets/css/bootstrap.css";
import "../assets/css/ui.css";
import "../assets/css/responsive.css";
import "../assets/fonts/fontawesome/css/all.min.css";
import ProductDetailPage from "../pages/Detail/ProductDetailPage";
import Category from "../pages/Category/Index";
import Login from "../pages/Login";
import Register from "../pages/Register";
const RouterSite = [
  { path: "/", component: Layouts },
  { path: "/productdetail/:id", component: ProductDetailPage },
  { path: "/category/:id", component: Category },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];
export default RouterSite;
