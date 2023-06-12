import React from "react";

function ProductPrice({ product }) {
  return (
    <>
      {!product.is_variable_product && (
        <div className="price">
          {product.regular_price > product.sale_price && (
            <del>₹{product.regular_price}</del>
          )}
          ₹{product.sale_price}
        </div>
      )}
    </>
  );
}

export default ProductPrice;
