import { useEffect, useState } from "react";
import React from "react";
import Main from "./Main";
import Deal from "./Deal";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Item from "./Items";
import Service from "./Service";
import Region from "./Region";
import Subscribe from "./Subscribe";
import Request from "./Request";
import Item1 from "./Item1";
const Index = () => {
  return (
    <>
      <Main />
      {/* <Deal/> */}
      {/* <Section1 />
      <Section2 /> */}
      {/* <Request /> */}
      <Item />
      <Item1/>
      {/* <Service /> */}
      {/* <Region />
      <Subscribe /> */}
    </>
  );
};
export default Index;
