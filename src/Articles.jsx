import React from "react";
import Farine from "./Farine";
import Oeufs from "./Oeufs";
import Lait from "./lait";

const Articles = () => {
  let articles = [Oeufs, Lait, Farine];
  return (
    <div>
      <Farine />
      <Lait />
      <Oeufs />
    </div>
  );
};

export default Articles;
