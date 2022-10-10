import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import AlredyLogin from "./components/AlredyLogin";
import Login from "./routes/Login";
import Home from "./routes/Home";
import LoadingSpinner from "./components/LoadingSpinner";

import { lazy, Suspense } from "react";
const Error404 = lazy(() => import("./routes/Error404"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <AlredyLogin>
              <Login />
            </AlredyLogin>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Suspense fallback={<LoadingSpinner/>}><Error404 /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
