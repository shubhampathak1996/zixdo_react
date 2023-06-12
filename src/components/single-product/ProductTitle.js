import React from "react";

function ProductTitle({ product }) {
  return (
    <div>
      {!product.is_variable_product && (
        <p style={{ color: "#000" }} className="title">{product.name}</p>
      )}
    </div>
  );
}

export default ProductTitle;
