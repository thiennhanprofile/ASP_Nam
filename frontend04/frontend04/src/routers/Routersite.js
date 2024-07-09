import Layouts from "../layouts";
import "../assets/css/bootstrap.css";
import "../assets/css/ui.css";
import "../assets/css/responsive.css";
import "../assets/fonts/fontawesome/css/all.min.css";
import ProductDetailPage from "../pages/Detail/ProductDetailPage";
import Category from "../pages/Category/Index";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BackendLayout from "../layouts/backend/Index";
import ProductIndex from "../pages/backend/product/ProductIndex";
import ProductCreate from "../pages/backend/product/ProductCreate";
import ProductEdit from "../pages/backend/product/ProductEdit";
import BrandIndex from "../pages/backend/brand/BrandIndex";
import BrandEdit from "../pages/backend/brand/BrandEdit";
import CategoryIndex from "../pages/backend/category/CategoryIndex";
import CategoryEdit from "../pages/backend/category/CategoryEdit";
import CategoryShow from "../pages/backend/category/CategoryShow";

import UserIndex from "../pages/backend/user/UserIndex";
import UserEdit from "../pages/backend/user/UserEdit";
import UserStore from "../pages/backend/user/UserStore";
import ProductShow from "../pages/backend/product/ProductShow";
import BrandShow from "../pages/backend/brand/BrandShow";
import UserShow from "../pages/backend/user/UserShow";
const RouterSite = [
  { path: "/", component: Layouts },
  { path: "/productdetail/:id", component: ProductDetailPage },
  { path: "/category/:id", component: Category },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/admin", component: BackendLayout },
  // 
  { path: "/admin/product", component: ProductIndex },
  { path: "/admin/product/create", component: ProductCreate },
  { path: "/admin/product/edit/:id", component: ProductEdit },
  { path: "/admin/product/show/:id", component: ProductShow },

  // Brand
  { path: "/admin/brand/index", component: BrandIndex },
  { path: "/admin/brand/edit/:id", component: BrandEdit },
  { path: "/admin/brand/show/:id", component: BrandShow},


  // Category
  { path: "/admin/category/index", component: CategoryIndex },
  { path: "/admin/category/edit/:id", component: CategoryEdit },
  { path: "/admin/category/show/:id", component: CategoryShow },

  // User
  { path: "/admin/user/index", component: UserIndex },
  { path: "/admin/user/edit/:id", component: UserEdit },
  { path: "/admin/user/show/:id", component: UserShow },

  { path: "/admin/user/store", component: UserStore },

];
export default RouterSite;
