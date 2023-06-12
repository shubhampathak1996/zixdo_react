import { combineReducers } from "redux";
import alert from "./alert_reducer";
import auth from "./auth_reducer";
import { collection_reducer } from "./collection_reducer";
import { product_reducer } from "./product_reducer";
import { category_reducer } from "./category_reducer";
import { blog_reducer } from "./blog_reducer";
import { banner_reducer } from "./banner_reducer";
import { mobilebanner_reducer } from "./mobilebanner_reducer";
import { webpage_reducer } from "./webpage_reducer";
import { setting_reducer } from "./setting_reducer";



// import { testimonial_reducer } from "./testimonial_reducer";

export default combineReducers({
  alert,
  auth,
  collection: collection_reducer,
  product: product_reducer,
  category: category_reducer,
  blog: blog_reducer,
  banner: banner_reducer,
  mobilebanner: mobilebanner_reducer,
  webpage: webpage_reducer,
  setting: setting_reducer,
});
