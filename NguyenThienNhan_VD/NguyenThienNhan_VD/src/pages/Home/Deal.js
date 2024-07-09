import { useEffect, useState } from "react";
import React from "react";
const Deal = () => {
  return (
    <>
      <section class="padding-bottom">
        <div class="card card-deal">
          <div class="row no-gutters items-wrap">
          <div class="col-md col-6">
            <header class="section-heading">
              <h3 class="section-title">Deals and offers</h3>
              <p>Hygiene equipments</p>
            </header>
            {/* sect-heading */}
            <div class="timer">
              <div>
                {" "}
                <span class="num">04</span> <small>Days</small>
              </div>
              <div>
                {" "}
                <span class="num">12</span> <small>Hours</small>
              </div>
              <div>
                {" "}
                <span class="num">58</span> <small>Min</small>
              </div>
              <div>
                {" "}
                <span class="num">02</span> <small>Sec</small>
              </div>
            </div>
          </div>
            <div class="col-md col-4">
              <figure class="card-product-grid card-sm">
                <a href="#" class="img-wrap">
                  <img src={require("../../assets/images/items/3.jpg")} />
                </a>
                <div class="text-wrap p-3">
                  <a href="#" class="title">
                    Summer clothes
                  </a>
                  <span class="badge badge-danger"> -20% </span>
                </div>
              </figure>
            </div>{" "}
            {/* col.// */}
            <div class="col-md col-4">
              <figure class="card-product-grid card-sm">
                <a href="#" class="img-wrap">
                  <img src={require("../../assets/images/items/4.jpg")} />
                </a>
                <div class="text-wrap p-3">
                  <a href="#" class="title">
                    Some category
                  </a>
                  <span class="badge badge-danger"> -5% </span>
                </div>
              </figure>
            </div>{" "}
            {/* col.// */}
            <div class="col-md col-4">
              <figure class="card-product-grid card-sm">
                <a href="#" class="img-wrap">
                  <img src={require("../../assets/images/items/5.jpg")} />
                </a>
                <div class="text-wrap p-3">
                  <a href="#" class="title">
                    Another category
                  </a>
                  <span class="badge badge-danger"> -20% </span>
                </div>
              </figure>
            </div>{" "}
            {/* col.// */}
            <div class="col-md col-4">
              <figure class="card-product-grid card-sm">
                <a href="#" class="img-wrap">
                  <img src={require("../../assets/images/items/6.jpg")} />
                </a>
                <div class="text-wrap p-3">
                  <a href="#" class="title">
                    Home apparel
                  </a>
                  <span class="badge badge-danger"> -15% </span>
                </div>
              </figure>
            </div>{" "}
            {/* col.// */}
            <div class="col-md col-4">
              <figure class="card-product-grid card-sm">
                <a href="#" class="img-wrap">
                  <img src={require("../../assets/images/items/7.jpg")} />
                </a>
                <div class="text-wrap p-3">
                  <a href="#" class="title text-truncate">
                    Smart watches
                  </a>
                  <span class="badge badge-danger"> -10% </span>
                </div>
              </figure>
            </div>{" "}
            {/* col.// */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Deal;
