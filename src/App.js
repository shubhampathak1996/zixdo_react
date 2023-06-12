import React, { useEffect } from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-loading-skeleton/dist/skeleton.css'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./containers/home/Home";
import { loadUser } from "./store/actions/auth";
import setAuthToken from "./domain/setAuthToken";
import BeforeLoginRoutes from "./shared/Routes/BeforeLoginRoutes";
import PrivateRoutes from "./shared/Routes/PrivateRoutes";
import PageNotFound from "./containers/notfound/PageNotFound";


import Login from "./containers/login/Login";
import ForgetPassword from "./containers/login/ForgetPassword";
import ResetPassword from "./containers/login/ResetPassword";
import ThankYou from "./containers/thankyou/ThankYou";
import Contact from "./containers/contactus/Contact";
import About from "./containers/aboutus/About";
import Blog from "./containers/blog/Blog";
import PremiumSaree from "./containers/saree/PremiumSaree";
import GgAbout from "./containers/ggabout/GgAbout";
import BrocadeStory from "./containers/brocadestory/BrocadeStory";
import HeritageBridal from "./containers/heritagebridal/HeritageBridal";
import SingleBlog from "./containers/blog/SingleBlog";
import { useGetSetting } from "./shared/hooks/UseSetting"
import Privacy from "./containers/policy/Privacy";
import RefundPolicy from "./containers/policy/RefundPolicy";
import Bridal from "./containers/saree/Bridal";
import SingleCollection from "./containers/collection/SingleCollection";
import Press from "./containers/press/Press";

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import Faq from "./containers/faq/Faq";


function App() {

  useEffect(() => {
    //First we have to bring(get that) token, which is saved in local storage
    const token = localStorage.getItem("token");
    //then we will pass that token in setAuthToken method
    setAuthToken(token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/press" component={Press} />
          <Route exact path="/premium-saree" component={PremiumSaree} />
          <Route exact path="/collection/:slug" component={SingleCollection} />
          <Route exact path="/bridal" component={Bridal} />
          <Route exact path="/gg-about" component={GgAbout} />
          <Route exact path="/brocade-story" component={BrocadeStory} />
          <Route exact path="/heritage-bridal" component={HeritageBridal} />
          <Route exact path="/blog/:slug" component={SingleBlog} />
          <Route exact path="/privacy-policy" component={Privacy} />
          <Route exact path="/refund-policy" component={RefundPolicy} />
          <Route exact path="/faq" component={Faq} />
          {/* <Route exact path="/login" component={Login} /> */}

          <Route exact path="/thank-you" component={ThankYou} />
          <Route exact path="/forget-password" component={ForgetPassword} />
          <Route
            exact
            path="/reset-password/:token"
            component={ResetPassword}
          />
          <BeforeLoginRoutes exact path="/login" component={Login} />



          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
