import React from "react";
import Portefeuille from "./portefeuille";
import Articles from "./Articles";

const FeuilleDeComptes = () => {
  const total = "Ce qu'il te reste";
  return (
    <div className="feuilleDeComptes">
      <Portefeuille />
      <Articles />
      <p>total: {total}</p>
    </div>
  );
};

export default FeuilleDeComptes;
