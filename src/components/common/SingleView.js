import React, { useState } from "react";
import renderHTML from "react-render-html";
import SingleItem from "../template/SingleItem";
import { Link } from "react-router-dom";
import { URI } from "../../domain/constant";
import moment from "moment";

function SingleView({
  data,
  inputFields,
  label,
  link,
  id,
  hideGallery,
  hideAllBtn,
  col,
}) {
  const [fields, setFields] = useState(Object.keys(inputFields));
  console.log("inputFields", inputFields);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={col ? `col-lg-${col}` : "col-lg-9"}>
          <div className="card">
            <div className="card-header">
              <div>
                <h4 className="card-title">
                  {data[fields[0]] &&
                    typeof data[fields[0]] == "string" &&
                    data[fields[0]]}{" "}
                  <span>View</span>
                </h4>
                <p className="card-title-desc">
                  {!hideAllBtn && (
                    <Link to={`/${link}`} className="btn btn-soft-light">
                      <i className="fa fa-angle-left"></i> {label}
                    </Link>
                  )}

                  <Link
                    to={`/${link}/${id}/edit`}
                    className="btn btn-soft-light"
                  >
                    <i className="fa fa-edit"></i>
                  </Link>
                </p>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                {inputFields &&
                  Object.keys(inputFields) &&
                  Object.keys(inputFields).map((item, index) => {
                    if (
                      inputFields[item] &&
                      inputFields[item].type === "string" &&
                      !inputFields[item].hideOnView
                    ) {
                      return (
                        <SingleItem title={inputFields[item].title}>
                          {inputFields[item].inputType == "date"
                            ? moment(data[item]).format("DD-MMM-YYYY")
                            : inputFields[item].inputType == "datetime-local"
                            ? moment(data[item]).format(
                                "DD-MMM-YYYY hh:mm:ss A"
                              )
                            : data[item]}
                        </SingleItem>
                      );
                    }
                    if (
                      inputFields[item] &&
                      inputFields[item].type === "divider"
                    ) {
                      return (
                        <div className="col-md-12">
                          <div
                            style={{
                              background: "#f1f1f1",
                              padding: "20px 10px",
                              marginBottom: "10px",
                            }}
                          >
                            {inputFields[item].title}
                          </div>
                        </div>
                      );
                    }
                    if (
                      inputFields[item] &&
                      inputFields[item].type === "text"
                    ) {
                      return (
                        <SingleItem title={inputFields[item].title}>
                          {data[item]}
                        </SingleItem>
                      );
                    }
                    if (
                      inputFields[item] &&
                      inputFields[item].type === "select"
                    ) {
                      return (
                        <SingleItem title={inputFields[item].title}>
                          {data[item]}
                        </SingleItem>
                      );
                    }
                    if (
                      inputFields[item] &&
                      inputFields[item].type === "related"
                    ) {
                      if (inputFields[item].multiple) {
                        return (
                          <SingleItem
                            title={inputFields[item].title}
                            // value={
                            //   data[item]
                            //     ? data[item][inputFields[item].field]
                            //     : ""
                            // }
                          >
                            {data[item]
                              ? data[item].map((e) => {
                                  console.log(e);
                                  return (
                                    <span
                                      style={{
                                        background: "#f1f1f1",
                                        padding: "5px",
                                        borderRadius: "10px",
                                        margin: "5px",
                                      }}
                                    >
                                      {" "}
                                      {!inputFields[item].static
                                        ? e[inputFields[item].field]
                                        : e}{" "}
                                    </span>
                                  );
                                })
                              : ""}
                          </SingleItem>
                        );
                      } else {
                        return (
                          <SingleItem title={inputFields[item].title}>
                            {data[item]
                              ? !inputFields[item].static
                                ? data[item][inputFields[item].field]
                                : data[item]
                              : "-"}
                          </SingleItem>
                        );
                      }
                    }
                    if (
                      inputFields[item] &&
                      inputFields[item].type === "slug"
                    ) {
                      return (
                        <SingleItem title={inputFields[item].title}>
                          {data[item]}
                        </SingleItem>
                      );
                    }
                    if (
                      inputFields[item] &&
                      inputFields[item].type === "checkbox"
                    ) {
                      return (
                        <SingleItem title={inputFields[item].title}>
                          {data[item] ? "YES" : "NO"}
                        </SingleItem>
                      );
                    }
                    if (
                      inputFields[item] &&
                      inputFields[item].type === "html"
                    ) {
                      return (
                        <SingleItem title={inputFields[item].title}>
                          {data[item] && renderHTML(data[item])}
                        </SingleItem>
                      );
                    }
                    if (
                      inputFields[item] &&
                      inputFields[item].type === "file"
                    ) {
                      return (
                        <SingleItem title={inputFields[item].title}>
                          {data[item] && (
                            <>
                              <img
                                src={`${URI}${data[item]}`}
                                style={{
                                  width: "100%",
                                  height: "200px",
                                  objectFit: "contain",
                                }}
                              />
                              <a href={`${URI}${data[item]}`} target={"_blank"}>
                                {" "}
                                View{" "}
                              </a>
                            </>
                          )}
                        </SingleItem>
                      );
                    }
                    if (
                      inputFields[item] &&
                      inputFields[item].type === "gallery"
                    ) {
                      return (
                        <SingleItem title={inputFields[item].title}>
                          {data[item] &&
                            data[item].map((pic) => {
                              return (
                                <>
                                  {!hideGallery ? (
                                    <img
                                      src={`${URI}${pic.image}`}
                                      style={{
                                        width: "100%",
                                        height: "100px",
                                        objectFit: "contain",
                                      }}
                                    />
                                  ) : (
                                    <a
                                      href={`${URI}${pic.image}`}
                                      target={"_blank"}
                                    >
                                      {" "}
                                      View{" "}
                                    </a>
                                  )}
                                </>
                              );
                            })}
                        </SingleItem>
                      );
                    }
                  })}

                {data.created_by && (
                  <SingleItem title="Created By">
                    {data.created_by && data.created_by.name}
                  </SingleItem>
                )}
                {data.updated_by && (
                  <SingleItem title="Updated By">
                    {data.updated_by && data.updated_by.name}
                  </SingleItem>
                )}

                {data.createdAt && (
                  <SingleItem title="Created At">
                    {data.createdAt &&
                      moment(data.createdAt).format("DD-MM-YYYY hh:mm:ss A")}
                  </SingleItem>
                )}
                {data.updatedAt && (
                  <SingleItem title="Updated At">
                    {data.updatedAt &&
                      moment(data.updatedAt).format("DD-MM-YYYY hh:mm:ss A")}
                  </SingleItem>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleView;
