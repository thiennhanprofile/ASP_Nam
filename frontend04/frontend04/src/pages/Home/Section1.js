import { useEffect, useState } from "react";
import React from "react";
const Section1 = () => {
  return (
    <>
<section class="padding-bottom">
<header class="section-heading heading-line">
	<h4 class="title-section text-uppercase">Apparel</h4>
</header>

<div class="card card-home-category">
<div class="row no-gutters">
	<div class="col-md-3">
	
	<div class="home-category-banner bg-light-orange">
		<h5 class="title">Best trending clothes only for summer</h5>
		<p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
		<a href="#" class="btn btn-outline-primary rounded-pill">Source now</a>
		<img class="img-bg" src={require("../../assets/images/items/2.jpg" )}/>
	</div>

	</div> {/* col.// */}
	<div class="col-md-9">
<ul class="row no-gutters bordered-cols">
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Well made women clothes with trending collection  </h6>
		<img class="img-sm float-right"src={require("../../assets/images/items/1.jpg")}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Great clothes with trending collection  </h6>
		<img class="img-sm float-right"src={require("../../assets/images/items/2.jpg")}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Beijing, China</p>
	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Demo clothes with sample collection  </h6>
		<img class="img-sm float-right"src={require("../../assets/images/items/3.jpg")}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tokyo, Japan</p>
	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen electronic  stuff collection  </h6>
		<img class="img-sm float-right"src={require("../../assets/images/items/4.jpg")}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tashkent, Uzb</p>
	</div>
</a>	
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen electronic  stuff collection  </h6>
		<img class="img-sm float-right"src={require("../../assets/images/items/5.jpg")}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> London, Britain</p>
	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen electronic  stuff collection  </h6>
		<img class="img-sm float-right"src={require("../../assets/images/items/6.jpg")}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Well made clothes with trending collection </h6>
		<img class="img-sm float-right"src={require("../../assets/images/items/7.jpg")}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Hong Kong, China</p>

	</div>
</a>
	</li>
	<li class="col-6 col-lg-3 col-md-4">
<a href="#" class="item"> 
	<div class="card-body">
		<h6 class="title">Home and kitchen interior  stuff collection   </h6>
		<img class="img-sm float-right"src={require("../../assets/images/items/6.jpg")}/> 
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
	</div>
</a>
	</li>
</ul>
	</div> {/* col.// */}
</div> {/* row.// */}
</div> {/* card.// */}
</section>
    </>
  );
};
export default Section1;