import React from "react";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { TextInput, SelectBox, CheckBox } from "../../components/Form/Form";
import OrderCard from "../../components/order/OrderCard";
import {
  useLogoutUser,
  useLoadUser,
  useUpdateUser,
} from "../../shared/hooks/UseAuth";
import { useAllOrders } from "../../shared/hooks/UseOrder";

function MyAccount() {
  const [logoutUser] = useLogoutUser();
  const [user_data] = useLoadUser();
  const [updateUser] = useUpdateUser();
  const { user } = user_data;
  const [data, setPageNumber] = useAllOrders();
  const { orders, orders_loading } = data;
  console.log("ORDER", orders);
  return (
    <div>
      <Header />
      <Breadcrum title={"My Account"} />
      <div className="account_dashboard">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
              {/* Nav tabs */}
              <div
                className="dashboard_tab_button"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <ul role="tablist" className="nav flex-column dashboard-list">
                  <li>
                    <a
                      href="#dashboard"
                      data-bs-toggle="tab"
                      className="nav-link active"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#orders" data-bs-toggle="tab" className="nav-link">
                      Orders
                    </a>
                  </li>

                  <li>
                    <a
                      href="#account-details"
                      data-bs-toggle="tab"
                      className="nav-link"
                    >
                      Account details
                    </a>
                  </li>
                  <li>
                    <a onClick={() => logoutUser()} className="nav-link">
                      logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-9 col-lg-9">
              {/* Tab panes */}
              <div
                className="tab-content dashboard_content"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="tab-pane fade show active" id="dashboard">
                  <h4>Dashboard </h4>
                  <p>
                    From your account dashboard. you can easily check &amp; view
                    your <a href="#">recent orders</a>
                  </p>
                </div>
                <div className="tab-pane fade" id="orders">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      {!orders_loading ? (
                        orders &&
                        orders.map((item) => {
                          return <OrderCard order={item} />;
                        })
                      ) : (
                        <div> Loading </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="account-details">
                  <h3>Account details </h3>
                  <div className="login">
                    <div className="login_form_container">
                      {user && (
                        <div className="account_login_form">
                          <p>Enter details to change contact information.</p>
                          <Formik
                            initialValues={{
                              name: user.name ? user.name : "",
                              email: user.email ? user.email : "",
                              phone: user.phone ? user.phone : "",
                              address:
                                user.address && user.address.length > 0
                                  ? [user.address[0]]
                                  : [
                                      {
                                        address_1: "",
                                        address_2: "",
                                        city: "",
                                        state: "",
                                        pin: "",
                                        landmark: "",
                                      },
                                    ],
                            }}
                            validationSchema={Yup.object({
                              name: Yup.string().required("Required"),
                              email: Yup.string().required("Required"),
                              phone: Yup.string().required("Required"),
                            })}
                            onSubmit={async (
                              values,
                              { setSubmitting, resetForm }
                            ) => {
                              setSubmitting(true);
                              await updateUser(values);
                              resetForm();
                              setSubmitting(false);
                            }}
                          >
                            {(formik) => {
                              console.log(formik);
                              return (
                                <Form>
                                  <div className="default-form-box mb-20">
                                    <TextInput label="Name" name="name" />
                                  </div>

                                  <div className="default-form-box mb-20">
                                    <TextInput label="Email" name="email" />
                                  </div>
                                  <div className="default-form-box mb-20">
                                    <TextInput label="Phone" name="phone" />
                                  </div>
                                  <div className="col-lg-12 mb-20">
                                    <div className="default-form-box">
                                      <TextInput
                                        label="Address 1"
                                        name="address[0].address_1"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 mb-20">
                                    <div className="default-form-box">
                                      <TextInput
                                        label="Address 2"
                                        name="address[0].address_2"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 mb-20">
                                    <div className="default-form-box">
                                      <TextInput
                                        label="Landmark"
                                        name="address[0].landmark"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 mb-20">
                                    <div className="default-form-box">
                                      <TextInput
                                        label="City"
                                        name="address[0].city"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 mb-20">
                                    <div className="default-form-box">
                                      <SelectBox
                                        label="State"
                                        name="address[0].state"
                                        type="text"
                                      >
                                        <option value=""></option>
                                        <option value="Andhra Pradesh">
                                          Andhra Pradesh
                                        </option>
                                        <option value="Andaman and Nicobar Islands">
                                          Andaman and Nicobar Islands
                                        </option>
                                        <option value="Arunachal Pradesh">
                                          Arunachal Pradesh
                                        </option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">
                                          Chandigarh
                                        </option>
                                        <option value="Chhattisgarh">
                                          Chhattisgarh
                                        </option>
                                        <option value="Dadar and Nagar Haveli">
                                          Dadar and Nagar Haveli
                                        </option>
                                        <option value="Daman and Diu">
                                          Daman and Diu
                                        </option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadweep">
                                          Lakshadweep
                                        </option>
                                        <option value="Puducherry">
                                          Puducherry
                                        </option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">
                                          Himachal Pradesh
                                        </option>
                                        <option value="Jammu and Kashmir">
                                          Jammu and Kashmir
                                        </option>
                                        <option value="Jharkhand">
                                          Jharkhand
                                        </option>
                                        <option value="Karnataka">
                                          Karnataka
                                        </option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">
                                          Madhya Pradesh
                                        </option>
                                        <option value="Maharashtra">
                                          Maharashtra
                                        </option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">
                                          Meghalaya
                                        </option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">
                                          Nagaland
                                        </option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">
                                          Rajasthan
                                        </option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">
                                          Tamil Nadu
                                        </option>
                                        <option value="Telangana">
                                          Telangana
                                        </option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">
                                          Uttar Pradesh
                                        </option>
                                        <option value="Uttarakhand">
                                          Uttarakhand
                                        </option>
                                        <option value="West Bengal">
                                          West Bengal
                                        </option>
                                      </SelectBox>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 mb-20">
                                    <div className="default-form-box">
                                      <TextInput
                                        label="Pin"
                                        name="address[0].pin"
                                        type="text"
                                      />
                                    </div>
                                  </div>

                                  <div className="save_button primary_btn default_button">
                                    <button type="submit">Save</button>
                                  </div>
                                </Form>
                              );
                            }}
                          </Formik>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyAccount;
