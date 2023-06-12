import React from "react";

function VariableProductTitle({ product, activeVariantVersion }) {
  // console.log(activeVariantVersion);
  return (
    <div>
      {product && product.is_variable_product && (
        <p className="title" style={{ color: "#000" }}>
          {product.name}
          {activeVariantVersion &&
            activeVariantVersion.options &&
            activeVariantVersion.options.map((item) => {
              return <span> {item.value} </span>;
            })}
        </p>
      )}
    </div>
  );
}

export default VariableProductTitle;
