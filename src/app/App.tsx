import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((item, i: number) => (
          <Route key={i} path={item.pathname} element={<item.component />} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
