import React, { useState } from 'react';
import { UseSubscriptionPlan } from '../../shared/hooks/UseFetch';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

function SubscriptionPlanComponent() {
  const [active, setactive] = useState(null);
  const { subscription, GetSubscriptionPlan, subscription_plan_loading } =
    UseSubscriptionPlan();
  useEffect(() => {
    GetSubscriptionPlan();
  }, []);
  console.log(subscription, 'subscription');
  return (
    <div>
      <section class="ptb-60 subscription-plan">
        <div class="container">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <div class="car-wash-maainnn">
                <div class="car-w">
                  <h3>Car Wash</h3>
                </div>
                <div class="car-washing-plans">
                  <h4 className="mb-3">Choose your daily car wash plan</h4>

                  <div className="row">
                    {subscription_plan_loading ? (
                      <>
                        <div>
                          <>
                            <div className="hatch-flex">
                              <div className="car-box">
                                <Skeleton height={200} />
                              </div>
                              <div className="car-box">
                                <Skeleton height={200} />
                              </div>
                              <div className="car-box">
                                <Skeleton height={200} />
                              </div>
                            </div>
                          </>
                        </div>
                      </>
                    ) : (
                      subscription &&
                      subscription.map((data) => {
                        return (
                          <div className="col-md-4">
                            <div
                              class={`center main-box-plan ${
                                active == data && 'active'
                              }`}
                              onClick={() => setactive(data)}
                            >
                              <h4>{data.plan_name}</h4>

                              <div class="total-money">
                                <h3>Rs.{data.price}</h3>
                                <span className="text-yellow">
                                  Service at your doorstep
                                </span>
                              </div>
                              <div class="procees center ">
                                <Link
                                  to={`/user-subscription-registration/${data.id}`}
                                  class="btn btn-primary w-50"
                                >
                                  Rs.{data.price}
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubscriptionPlanComponent;
