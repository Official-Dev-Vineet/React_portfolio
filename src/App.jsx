import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Loader from "./helper/Loader";
import { lazy, Suspense } from "react";
const RootLayout = lazy(() => import("./helper/RootLayout"));
const Error = lazy(() => import("./helper/Error"));
const Home = lazy(() => import("./components/Home/Home"));
const PageNotFound = lazy(() => import("./helper/PagenotFound"));
export const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route index exact element={<Home />} />
        <Route path="/about-us" element={<>About us</>} />
        <Route path="/services" element={<>Services</>} />
        <Route path="/connect" element={<>Connect</>} />
        <Route path="/contact-us" element={<>Contact us</>} />
        <Route
          path="*"
          element={<PageNotFound pathData={window.location.href} />}
        />
      </Route>
    )
  );
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};
