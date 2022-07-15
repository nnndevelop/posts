import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import { routes, publicRoutes } from "./router/Route";
import { useContext } from "react";
const RoutesrApp = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          element={route.element}
          exact={route.exact}
          key={route}
        />
      ))}
      <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={route.element}
          exact={route.exact}
          key={route}
          />
          ))}
          </Routes>
  );
};

export default RoutesrApp;
