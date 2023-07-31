import React, { useEffect } from 'react';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import { loadUser } from './store/actions/auth';
import setAuthToken from './domain/setAuthToken';

import PageNotFound from './containers/notfound/PageNotFound';
import Home from './containers/home/Home';
import OurCenter from './containers/our-centers/OurCenter';
import BrandCollabs from './containers/BrandCollabs';
import SubscriptionPlan from './containers/subscription/SubscriptionPlan';
import PreferredPartner from './containers/preferred-partner/PreferredPartner';
import Login from './containers/login/Login';
import ForgetPassword from './containers/forget-password/ForgetPassword';
import SignUp from './containers/signup/SignUp';
import OurServices from './containers/our-services/OurServices';
import Cart from './containers/cart/Cart';
import Checkout from './containers/checkout/Checkout';
import MyProfile from './containers/my-profile/MyProfile';
import ContactUs from './containers/contact-us/ContactUs';
import Refund from './containers/refund_cancellation/Refund';
import PrivacyPolicy from './containers/privacy-policy/PrivacyPolicy';
import Gallary from './containers/gallary/Gallary';
import SubscriptionRegistration from './containers/subscription-registration/SubscriptionRegistration';
import BeforeLoginRoutes from './shared/Routes/BeforeLoginRoutes';

function App() {
  useEffect(() => {
    const body = document.querySelector('#root');

    body.scrollIntoView(
      {
        behavior: 'smooth',
      },
      500
    );
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/our-centers" component={OurCenter} />
          <Route exact path="/brand-collabs" component={BrandCollabs} />
          <Route exact path="/subscription-plan" component={SubscriptionPlan} />
          <Route exact path="/preferred-partner" component={PreferredPartner} />
          <BeforeLoginRoutes exact path="/login" component={Login} />
          <Route exact path="/forget-password" component={ForgetPassword} />
          <Route exact path="/our-services" component={OurServices} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/register" component={SignUp} />
          <Route
            exact
            path="/user-subscription-registration"
            component={SubscriptionRegistration}
          />
          <Route
            exact
            path="/my-account"
            component={SubscriptionRegistration}
          />

          <Route exact path="/contactus" component={ContactUs} />

          <Route exact path="/refund-cancellation" component={Refund} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/gallery" component={Gallary} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
