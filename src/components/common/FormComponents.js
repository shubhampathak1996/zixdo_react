import React, { useState, useEffect } from "react";
import { Form, Formik, FieldArray, Field } from "formik";
import EditorWYSIWYG from "../EditorWYSIWYG";
import * as Yup from "yup";
import { CheckBox, SelectBox, TextArea, TextInput } from "../Form/Form";
import slugify from "react-slugify";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { URI } from "../../domain/constant";
function FormComponents({
  formik,
  inputFields,
  setFeaturedImage,
  dropdown_options,
  setGallery,
  edit,
  loadOptions,
}) {
  // console.log(typeof loadSelectOptions);
  let history = useHistory();
  const [imagePicked, setImagePicked] = useState(null);
  const pickImage = ({ field, value }) => {
    console.log("CALLING", field);
    let imagesCollection = imagePicked ? imagePicked : {};
    imagesCollection[field] = value;
    console.log("FILES", imagesCollection);
    setImagePicked(imagesCollection);
    setFeaturedImage(imagesCollection);
  };

  console.log("Formik,", formik);

  return (
    <div className="row">
      {inputFields &&
        Object.keys(inputFields) &&
        Object.keys(inputFields).map((item, index) => {
          if (
            inputFields[item] &&
            !inputFields[item].hideOnEntry &&
            inputFields[item].type === "string"
          ) {
            return (
              <div className="col-md-6" key={`input-${index}`}>
                <TextInput
                  label={inputFields[item].title}
                  name={item}
                  type={
                    inputFields[item].inputType
                      ? inputFields[item].inputType
                      : "text"
                  }
                  onChange={(e) => {
                    formik.setFieldValue(item, e.target.value);
                    if (inputFields[item].slug) {
                      formik.setFieldValue("slug", slugify(e.target.value));
                    }
                  }}
                />
              </div>
            );
          }
          if (inputFields[item] && inputFields[item].type === "divider") {
            return (
              <div className="col-md-12" key={`input-${index}`}>
                <div className="p-2 mt-2 mb-2 bg-light">
                  <p className="font-weight-bold">
                    {" "}
                    {inputFields[item].title}{" "}
                  </p>
                </div>
              </div>
            );
          }
          if (inputFields[item] && inputFields[item].type === "text") {
            return (
              <div className="col-md-6">
                <TextArea label={inputFields[item].title} name={item} />
              </div>
            );
          }

          if (inputFields[item] && inputFields[item].type === "related") {
            return (
              <div className="col-md-6">
                <label> {inputFields[item].title} </label>
                {dropdown_options && dropdown_options[item] ? (
                  <AsyncSelect
                    styles={{
                      // Fixes the overlapping problem of the component
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    loadOptions={(inputValue, callback) =>
                      loadOptions(inputValue, callback, item)
                    }
                    defaultValue={{
                      value: formik.values[item] ? formik.values[item] : "",
                      label:
                        formik.values[item] &&
                        dropdown_options &&
                        dropdown_options[item] &&
                        dropdown_options[item].filter(
                          (option) => option.value == formik.values[item]
                        ) &&
                        dropdown_options[item].filter(
                          (option) => option.value == formik.values[item]
                        )[0] &&
                        dropdown_options[item].filter(
                          (option) => option.value == formik.values[item]
                        )[0].label,
                    }}
                    defaultOptions={dropdown_options && dropdown_options[item]}
                    onChange={(e) => {
                      if (e) {
                        formik.setFieldValue(item, e.value);
                      }
                    }}
                  />
                ) : (
                  <div>Loading...</div>
                )}

                {formik.errors && formik.errors[item] && (
                  <p className="text-danger"> Required </p>
                )}
              </div>
            );
          }
          if (inputFields[item] && inputFields[item].type === "select") {
            return (
              <div className="col-md-6">
                <SelectBox
                  label={inputFields[item].title}
                  name={item}
                  multiple={inputFields[item].multiple ? true : false}
                >
                  <option value="">
                    {/* Select {inputFields[item].title} */}
                    --None--
                  </option>
                  {inputFields[item] &&
                    inputFields[item].options &&
                    inputFields[item].options.map((option) => {
                      return <option value={option}>{option}</option>;
                    })}
                </SelectBox>
              </div>
            );
          }
          if (inputFields[item] && inputFields[item].type === "checkbox") {
            return (
              <div className="col-md-6">
                <CheckBox defaultChecked={formik.values[item]} name={item}>
                  {inputFields[item].title}
                </CheckBox>
              </div>
            );
          }
          if (inputFields[item] && inputFields[item].type === "html") {
            return (
              <div className="col-md-12">
                <div className="form-group">
                  <label> {inputFields[item].title} </label>
                  <EditorWYSIWYG
                    value={formik.values[item] ? formik.values[item] : ""}
                    name={item}
                    changeValue={(value) => {
                      formik.setFieldValue(item, value);
                    }}
                  />
                  {formik.errors && formik.errors[item] && (
                    <p className="text-danger"> Required </p>
                  )}
                </div>
              </div>
            );
          }
          if (inputFields[item] && inputFields[item].type === "file") {
            if (edit) {
              return (
                <div className="col-md-6">
                  <label> {inputFields[item].title} </label>
                  <br />

                  {formik.values[item] && !formik.values[`${item}-selected`] ? (
                    <>
                      <img
                        src={`${URI}${formik.values[item]}`}
                        style={{
                          width: "150px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <button
                        onClick={() =>
                          formik.setFieldValue(`${item}-selected`, true)
                        }
                        className="btn btn-sm btn-danger"
                      >
                        {" "}
                        X{" "}
                      </button>
                    </>
                  ) : (
                    <input
                      type="file"
                      className="form-control-file"
                      onChange={(e) =>
                        pickImage({ field: item, value: e.target.files[0] })
                      }
                    />
                  )}
                </div>
              );
            } else {
              return (
                <div className="col-md-6">
                  <label> {inputFields[item].title} </label>
                  <br />
                  <input
                    type="file"
                    className="form-control-file"
                    onChange={(e) =>
                      pickImage({ field: item, value: e.target.files[0] })
                    }
                  />
                </div>
              );
            }
          }
          if (inputFields[item] && inputFields[item].type === "gallery") {
            return (
              <div className="col-md-6">
                <label> {inputFields[item].title} </label>
                <br />
                <input
                  type="file"
                  multiple
                  className="form-control-file"
                  onChange={(e) =>
                    pickImage({ field: item, value: e.target.files })
                  }
                />
              </div>
            );
          }
          if (inputFields[item] && inputFields[item].type === "slug") {
            return (
              <div className="col-md-6">
                <TextInput
                  label={inputFields[item].title}
                  name={item}
                  type="text"
                  onChange={(e) => {
                    formik.setFieldValue(item, slugify(e.target.value));
                  }}
                />
              </div>
            );
          }
          if (inputFields[item] && inputFields[item].type === "array") {
            // console.log("ITEM", inputFields[item]);
            return (
              <>
                <div
                  style={{
                    padding: "10px 10px",
                    marginTop: "10px",
                    background: "#f5eed7",
                    borderRadius: "5px",
                  }}
                >
                  <strong>{inputFields[item].title}</strong>{" "}
                </div>
                <FieldArray name={item}>
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const arrayValues = values[item] ? values[item] : [];
                    return (
                      <div
                        style={{
                          border: "1px solid #f1f1f1",
                          margin: "10px 10px",
                          padding: "10px",
                        }}
                      >
                        {arrayValues.map((single, fieldIndex) => (
                          <div key={fieldIndex} className="row">
                            <div
                              className="d-flex justify-content-between"
                              style={{
                                background: "#f1f1f1",
                                padding: "10px 10px",
                                marginTop: "10px",
                              }}
                            >
                              <div>
                                {inputFields[item].title} {fieldIndex + 1}
                              </div>
                              <div>
                                {inputFields[item].required &&
                                fieldIndex > 0 ? (
                                  <a
                                    className="btn btn-sm btn-danger"
                                    onClick={() => remove(fieldIndex)}
                                  >
                                    -
                                  </a>
                                ) : (
                                  <a
                                    className="btn btn-sm btn-danger"
                                    onClick={() => remove(fieldIndex)}
                                  >
                                    -
                                  </a>
                                )}
                              </div>
                            </div>
                            {/* <Field name={`phNumbers[${index}]`} /> */}

                            {inputFields[item] &&
                              inputFields[item].fields &&
                              Object.keys(inputFields[item].fields) &&
                              Object.keys(inputFields[item].fields).map(
                                (single_value, index2) => {
                                  if (
                                    inputFields[item].fields[single_value] &&
                                    inputFields[item].fields[single_value]
                                      .type === "string"
                                  ) {
                                    return (
                                      <div
                                        className="col-md-6"
                                        key={`input-${index2}`}
                                      >
                                        <TextInput
                                          label={
                                            inputFields[item].fields[
                                              single_value
                                            ].title
                                          }
                                          name={`${item}[${fieldIndex}][${single_value}]`}
                                          type={
                                            inputFields[item].fields[
                                              single_value
                                            ].inputType
                                              ? inputFields[item].fields[
                                                  single_value
                                                ].inputType
                                              : "text"
                                          }
                                        />
                                      </div>
                                    );
                                  }

                                  if (
                                    inputFields[item].fields[single_value] &&
                                    inputFields[item].fields[single_value]
                                      .type === "text"
                                  ) {
                                    return (
                                      <div className="col-md-6">
                                        <TextArea
                                          label={
                                            inputFields[item].fields[
                                              single_value
                                            ].title
                                          }
                                          name={`${item}[${fieldIndex}][${single_value}]`}
                                        />
                                      </div>
                                    );
                                  }

                                  if (
                                    inputFields[item].fields[single_value] &&
                                    inputFields[item].fields[single_value]
                                      .type === "related"
                                  ) {
                                    // console.log(
                                    //   "dropdown_options",
                                    //   dropdown_options,
                                    //   item,
                                    //   single_value
                                    // );
                                    return (
                                      <div className="col-md-6">
                                        <label>
                                          {" "}
                                          {
                                            inputFields[item].fields[
                                              single_value
                                            ].title
                                          }{" "}
                                        </label>
                                        {dropdown_options &&
                                        dropdown_options[item] &&
                                        dropdown_options[item][single_value] ? (
                                          <AsyncSelect
                                            styles={{
                                              // Fixes the overlapping problem of the component
                                              menu: (provided) => ({
                                                ...provided,
                                                zIndex: 9999,
                                              }),
                                            }}
                                            loadOptions={(
                                              inputValue,
                                              callback
                                            ) =>
                                              loadOptions(
                                                inputValue,
                                                callback,
                                                item
                                              )
                                            }
                                            defaultValue={{
                                              value: formik.values[item]
                                                ? formik.values[item]
                                                : "",
                                              label:
                                                formik.values[item] &&
                                                dropdown_options &&
                                                dropdown_options[item] &&
                                                dropdown_options[item][
                                                  single_value
                                                ] &&
                                                dropdown_options[item][
                                                  single_value
                                                ].filter(
                                                  (option) =>
                                                    option.value ==
                                                    formik.values[item]
                                                ) &&
                                                dropdown_options[item][
                                                  single_value
                                                ].filter(
                                                  (option) =>
                                                    option.value ==
                                                    formik.values[item]
                                                )[0] &&
                                                dropdown_options[item][
                                                  single_value
                                                ].filter(
                                                  (option) =>
                                                    option.value ==
                                                    formik.values[item]
                                                )[0].label,
                                            }}
                                            defaultOptions={
                                              dropdown_options &&
                                              dropdown_options[item] &&
                                              dropdown_options[item][
                                                single_value
                                              ]
                                            }
                                            onChange={(e) => {
                                              if (e) {
                                                formik.setFieldValue(
                                                  `${item}[${fieldIndex}][${single_value}]`,
                                                  e.value
                                                );
                                              }
                                            }}
                                          />
                                        ) : (
                                          <div>Loading...</div>
                                        )}

                                        {formik.errors &&
                                          formik.errors[item] && (
                                            <p className="text-danger">
                                              {" "}
                                              Required{" "}
                                            </p>
                                          )}
                                      </div>
                                    );
                                  }
                                }
                              )}
                          </div>
                        ))}
                        <div style={{ float: "right" }}>
                          <a
                            className="btn btn-sm btn-success"
                            onClick={() => push("")}
                          >
                            + Add
                          </a>
                        </div>
                      </div>
                    );
                  }}
                </FieldArray>
              </>
            );
          }
        })}
    </div>
  );
}

export default FormComponents;
