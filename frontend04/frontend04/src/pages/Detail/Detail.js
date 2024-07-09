import React from "react";

function Detail({ product }) {
  return (
    <section class="section-content bg-white padding-y">
      <div class="container">
        <div class="row">
          <aside class="col-md-6">
            <div class="card">
              <article class="gallery-wrap">
                <div class="img-big-wrap">
                  <div>
                    {" "}
                    <a href="#">
                      <img
                        src={require(`../../assets/images/product/${product.imageUrl}`)}
                        alt={product.productTitle}
                      />{" "}
                    </a>
                  </div>
                </div>
                <div class="thumbs-wrap">
                  <a href="#" class="item-thumb">
                    {" "}
                    <img
                      src={require(`../../assets/images/product/${product.imageUrl}`)}
                      alt={product.productTitle}
                    />
                  </a>
                  <a href="#" class="item-thumb">
                    {" "}
                    <img
                      src={require(`../../assets/images/product/${product.imageUrl}`)}
                      alt={product.productTitle}
                    />
                  </a>
                  <a href="#" class="item-thumb">
                    {" "}
                    <img
                      src={require(`../../assets/images/product/${product.imageUrl}`)}
                      alt={product.productTitle}
                    />
                  </a>
                  <a href="#" class="item-thumb">
                    {" "}
                    <img
                      src={require(`../../assets/images/product/${product.imageUrl}`)}
                      alt={product.productTitle}
                    />
                  </a>
                </div>
              </article>
            </div>
          </aside>
          <main class="col-md-6">
            <article class="product-info-aside">
              <h2 class="title mt-3">{product.productTitle} </h2>

              <div class="rating-wrap my-3">
                <ul class="rating-stars">
                  <li style={{ width: "80%" }} class="stars-active">
                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </li>
                </ul>

                <small class="label-rating text-success">
                  {" "}
                  <i class="fa fa-clipboard-check"></i> 154 orders{" "}
                </small>
              </div>

              <div class="mb-3">
                <var class="price h4">${product.price}</var>
              </div>

              <div class="form-row  mt-4">
                <div class="form-group col-md flex-grow-0">
                  <div class="input-group mb-3 input-spinner">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-light"
                        type="button"
                        id="button-plus"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                    <input type="text" class="form-control" value="1" />
                    <div class="input-group-append">
                      <button
                        class="btn btn-light"
                        type="button"
                        id="button-minus"
                      >
                        {" "}
                        −{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div class="form-group col-md">
                  <a href="#" class="btn  btn-primary">
                    <i class="fas fa-shopping-cart"></i>{" "}
                    <span class="text">Add to cart</span>
                  </a>
                  <a href="#" class="btn btn-light">
                    <i class="fas fa-envelope"></i>{" "}
                    <span class="text">Contact supplier</span>
                  </a>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </section>
  );
}

export default Detail;
