//Layouts
import RooterLayout from "./Layouts/RooterLayout";

//hooks
import useFetch from "./hooks/useFetch";
import Create from "./pages/Create";

//Pages
import Error from "./pages/Error";
import Home from "./pages/Home";
import RecepieDetail from "./pages/RecepieDetail";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<Error />} element={<RooterLayout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<RecepieDetail />} />
        <Route path="create" element={<Create />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
