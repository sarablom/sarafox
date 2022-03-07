import React, { useState } from "react";
import ProductMaker from "../components/ProductMaker";

function ProductsPage() {
  const [showFabricMaker, setShowFabricMaker] = useState(false);

  return (
    <section className="products-page">
      <h1>Produkter</h1>
      <p>Vill du testa att designa enga barnkläder? Klicka på knappen nedan!</p>
      <button className="products-page__button" onClick={() => setShowFabricMaker(true)}>Skapa ett plagg</button>
      {showFabricMaker && (
        <ProductMaker onClose={() => setShowFabricMaker(false)} showFabricMaker={showFabricMaker}></ProductMaker>
      )}
    </section>
  );
}

export default ProductsPage;
