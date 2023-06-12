import React from "react";

function VariationOption({
  product,
  activeVariantVersion,
  handleVariationChange,
  checkExistence,
}) {
  return (
    <div>
      {product.is_variable_product && (
        <div className="product-details-variable">

          {product &&
            product.variation_attrs &&
            product.variation_attrs.map((item) => {
              return (
                <div className="variable-single-item">
                  <div className="variable-single-item">{item.label}</div>
                  <div className="d-flex v-flex-wrap gap-11">
                    {item.options &&
                      item.options.map((option) => {
                        return (
                          <div
                            onClick={() =>
                              handleVariationChange({
                                label: item.label,
                                value: option.value,
                              })
                            }
                          >
                            <div
                              className={
                                checkExistence({
                                  array: activeVariantVersion,
                                  label: item.label,
                                  value: option.value,
                                })
                                  ? "variation-option active-variation"
                                  : "variation-option"
                              }
                            >
                              {" "}
                              {option.value}{" "}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default VariationOption;
