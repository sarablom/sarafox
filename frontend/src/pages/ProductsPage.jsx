import React, { useState } from "react";
import ProductMaker from "../components/ProductMaker";

function ProductsPage() {
  const [showFabricMaker, setShowFabricMaker] = useState(false);

  return (
    <section className="products-page">
      <h1>Products page</h1>

      <button onClick={() => setShowFabricMaker(true)}>Make a fabric</button>
      {showFabricMaker && (
        <ProductMaker onClose={() => setShowFabricMaker(false)} showFabricMaker={showFabricMaker}></ProductMaker>
      )}
    </section>
  );
}

export default ProductsPage;
