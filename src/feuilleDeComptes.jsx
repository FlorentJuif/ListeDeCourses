import React from "react";
import Portefeuille from "./portefeuille";
import Articles from "./Articles";

const FeuilleDeComptes = () => {
  const total = "tu as moins de thunes";
  return (
    <div className="feuilleDeComptes">
      <Portefeuille />
      <Articles />
      Total:{total}
    </div>
  );
};

export default FeuilleDeComptes;
