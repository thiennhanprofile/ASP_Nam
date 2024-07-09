import { useEffect, useState } from "react";
import React from "react";
const Service = () => {
  return (
    <>
<section  class="padding-bottom">

<header class="section-heading heading-line">
	<h4 class="title-section text-uppercase">Trade services</h4>
</header>

<div class="row">
	<div class="col-md-3 col-sm-6">
		<article class="card card-post">
		  <img  class="card-img-top" src={require("../../assets/images/posts/1.jpg")}/>
		  <div class="card-body">
		    <h6 class="title">Trade Assurance</h6>
		    <p class="small text-uppercase text-muted">Order protection</p>
		  </div>
		</article> {/* card.// */}
	</div> {/* col.// */}
	<div class="col-md-3 col-sm-6">
		<article class="card card-post">
		  <img class="card-img-top" src={require("../../assets/images/posts/2.jpg")}/>
		  <div class="card-body">
		    <h6 class="title">Pay anytime</h6>
		    <p class="small text-uppercase text-muted">Finance solution</p>
		  </div>
		</article> {/* card.// */}
	</div> {/* col.// */}
	<div class="col-md-3 col-sm-6">
		<article class="card card-post">
		  <img  class="card-img-top" src={require("../../assets/images/posts/3.jpg" )}/>
		  <div class="card-body">
		    <h6 class="title">Inspection solution</h6>
		    <p class="small text-uppercase text-muted">Easy Inspection</p>
		  </div>
		</article> {/* card.// */}
	</div> {/* col.// */}
	<div class="col-md-3 col-sm-6">
		<article class="card card-post">
		  <img class="card-img-top" src={require("../../assets/images/posts/4.jpg")}/>
		  <div class="card-body">
		    <h6 class="title">Ocean and Air Shipping</h6>
		    <p class="small text-uppercase text-muted">Logistic services</p>
		  </div>
		</article> {/* card.// */}
	</div> {/* col.// */}
</div> {/* row.// */}

</section>
    </>
  );
};
export default Service;