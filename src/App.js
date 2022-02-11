import React, { useEffect, lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.component";
import { GlobalStyle } from "./GlobalStyle";

import { auth } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { onAuthStateChanged } from "firebase/auth";

import ProtectedRoute from "./components/protected-route/protected-route.component";
import Spinner from "./components/spinner/spinner.components";
import BoundaryError from "./components/Error-boundary/error-boundary.component";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.component"));
const ShopPage = lazy(() => import("./pages/ShopPage/shopPage.component"));
const Checkout = lazy(() =>
  import("./pages/checkout-page/checkoutPage.component")
);
const SignIn = lazy(() => import("./pages/login/login.component"));
const SignUp = lazy(() => import("./pages/register/register.component"));
const ForgetPassword = lazy(() =>
  import("./pages/forget-password/forget-password.component")
);
const ResetPassword = lazy(() =>
  import("./pages/Reset-password/reset-password.component")
);

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null);
    });

    return () => {
      unsubscribe();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<Spinner />}>
        <BoundaryError>
          <Routes>
            <Route path="/*" element={<HomePage />} />

            <Route
              path="/register"
              element={
                <ProtectedRoute>
                  <SignUp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forget-password"
              element={
                <ProtectedRoute>
                  <ForgetPassword />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <ProtectedRoute>
                  <SignIn />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reset-password"
              element={
                <ProtectedRoute>
                  <ResetPassword />
                </ProtectedRoute>
              }
            />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BoundaryError>
      </Suspense>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => {
  return { setCurrentUser: user => dispatch(setCurrentUser(user)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
