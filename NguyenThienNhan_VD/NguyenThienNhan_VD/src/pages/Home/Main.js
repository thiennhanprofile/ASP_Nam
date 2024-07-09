import { useEffect, useState } from "react";
import React from "react";
import { Dropdown } from "react-bootstrap";
const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [brand, setBrand] = useState([]);
  // Category
  useEffect(() => {
    fetchBrand();
  }, []);
  const fetchBrand = async () => {
    try {
      const response = await fetch(
        "https://localhost:7255/api/Brand/GetBrands"
      );
      if (response.ok) {
        const data = await response.json();
        setBrand(data); // Lưu danh sách categories vào state
      } else {
        throw new Error("Failed to fetch Brand");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Đăng kí đăng nhập
  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập hay không
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setIsLoggedIn(true);
      setUserData(userData);
    }
  }, []);

  const handleLogout = () => {
    // Xóa thông tin người dùng từ localStorage và đặt trạng thái loggedIn thành false
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUserData(null);
  };
  return (
    <>
      <section class="section-main padding-y">
        <main class="card">
          <div class="card-body">
            <div class="row">
              <aside class="col-lg col-md-3 flex-lg-grow-0">
                <h6>THƯƠNG HIỆU</h6>
                <nav class="nav-home-aside">
                  <ul class="menu-category">
                    {brand.map((brand) => (
                      <Dropdown.Item
                        className="menu-item-has-children"
                        key={brand.brandId}
                        href={`/brand/${brand.BrandID}`}
                      >
                        {brand.name}
                      </Dropdown.Item>
                    ))}
                  </ul>
                </nav>
              </aside>{" "}
              {/* col.// */}
              <div class="col-md-9 col-xl-7 col-lg-7">
                {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
                <div
                  id="carousel1_indicator"
                  class="slider-home-banner carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carousel1_indicator"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li
                      data-target="#carousel1_indicator"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carousel1_indicator"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={require("../../assets/images/banners/post3.jpg")}
                        alt="First slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={require("../../assets/images/banners/post2.jpg")}
                        alt="Second slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={require("../../assets/images/banners/post1.jpg")}
                        alt="Third slide"
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carousel1_indicator"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carousel1_indicator"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>{" "}
              {/* col.// */}
              <div class="col-md d-none d-lg-block flex-grow-1">
                <aside class="special-home-right">
                  <h6 class="bg-blue text-center text-white mb-0 p-2">
                    Popular category
                  </h6>

                  <div class="card-banner border-bottom">
                    <div class="py-3" style={{ width: "80%" }}>
                      <h6 class="card-title">Men clothing</h6>
                      <a href="#" class="btn btn-secondary btn-sm">
                        {" "}
                        Source now{" "}
                      </a>
                    </div>
                    <img
                      class="img-bg"
                      src={require("../../assets/images/items/1.jpg")}
                      style={{ height: "80" }}
                    />
                  </div>

                  <div class="card-banner border-bottom">
                    <div class="py-3" style={{ width: "80%" }}>
                      <h6 class="card-title">Winter clothing </h6>
                      <a href="#" class="btn btn-secondary btn-sm">
                        {" "}
                        Source now{" "}
                      </a>
                    </div>
                    <img
                      class="img-bg"
                      src={require("../../assets/images/items/2.jpg")}
                      style={{ height: "80" }}
                    />
                  </div>

                  <div class="card-banner border-bottom">
                    <div class="py-3" style={{ width: "80%" }}>
                      <h6 class="card-title">Home inventory</h6>
                      <a href="#" class="btn btn-secondary btn-sm">
                        {" "}
                        Source now{" "}
                      </a>
                    </div>
                    <img
                      class="img-bg"
                      src={require("../../assets/images/items/6.jpg")}
                      style={{ height: "80" }}
                    />
                  </div>
                </aside>
              </div>{" "}
              {/* col.// */}
            </div>{" "}
            {/* row.// */}
          </div>{" "}
          {/* card-body.// */}
        </main>{" "}
        {/* card.// */}
      </section>
    </>
  );
};
export default Main;
