import React, { lazy } from "react";

const LoginPage = lazy(() => import("../../views/LoginPage"));
const HomePage = lazy(() => import("../../views/Home"));
const NotFound = lazy(() => import("../../containers/NotFound"));

type RouteType = {
  pathname: string;
  name: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
};

export const routes: RouteType[] = [
  { pathname: "/", name: "Login-Page", component: LoginPage },
  { pathname: "/home", name: "Home-Page", component: HomePage },
  { pathname: "*", name: "not-found", component: NotFound },
];
