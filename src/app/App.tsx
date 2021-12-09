import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes/routes";
import { useAppSelector } from "./store/hooks";

function App() {
  const authenticated = useAppSelector((state) => state.auth.authenticated);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((item, i: number) => {
          if (item.private) {
            return (
              <Route
                key={i}
                path={item.pathname}
                element={
                  authenticated ? <item.component /> : <Navigate to="/" />
                }
              />
            );
          } else {
            return (
              <Route
                key={i}
                path={item.pathname}
                element={<item.component />}
              />
            );
          }
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
