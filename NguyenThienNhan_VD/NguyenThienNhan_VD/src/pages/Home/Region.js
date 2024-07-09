import { useEffect, useState } from "react";
import React from "react";
const Region = () => {
  return (
    <>
<section  class="padding-bottom">

<header class="section-heading heading-line">
	<h4 class="title-section text-uppercase">Choose region</h4>
</header>

<ul class="row mt-4">
	<li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={require("../../assets/images/icons/flags/CN.png")}/> <span>China</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={require("../../assets/images/icons/flags/DE.png")}/> <span>Germany</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={require("../../assets/images/icons/flags/AU.png")}/> <span>Australia</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={require("../../assets/images/icons/flags/RU.png")}/> <span>Russia</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={require("../../assets/images/icons/flags/IN.png")}/> <span>India</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={require("../../assets/images/icons/flags/GB.png")}/> <span>England</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={require("../../assets/images/icons/flags/TR.png")}/> <span>Turkey</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src={require("../../assets/images/icons/flags/UZ.png")}/> <span>Uzbekistan</span> </a></li>
	<li class="col-md col-6"><a href="#" class="icontext"> <i class="mr-3 fa fa-ellipsis-h"></i> <span>More regions</span> </a></li>
</ul>
</section>
    </>
  );
};
export default Region;