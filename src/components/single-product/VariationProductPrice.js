import React from "react";

function VariationProductPrice({ product, activeVariantVersion }) {
  return (
    <div>
      {product.is_variable_product ? activeVariantVersion ? (
        <div className="price">
          {product.regular_price > activeVariantVersion.price && (
            <del>₹{product.regular_price}</del>
          )}
          ₹{activeVariantVersion.price}
        </div>
      ) : (
        <div className="price">
          {product.regular_price > product.sale_price && (
            <del>₹{product.regular_price}</del>
          )}
          ₹{product.sale_price}
        </div>
      ) : (<></>)}
    </div>
  );
}

export default VariationProductPrice;
