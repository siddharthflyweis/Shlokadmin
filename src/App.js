import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login/Login";
import PrivateRoute from "../src/utlis/PrivateRoute";
import Dashboard from "../src/Pages/Dashboard";
import Lawyers from "../src/Pages/Lawyers";
import Totalusers from "../src/Pages/Totalusers";
import Cases from "../src/Pages/Cases";
import Department from "../src/Pages/Department";
import Notification from "../src/Pages/Notification"
import Meeting from "../src/Pages/Meeting"
import Layout from "../src/Layout/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/Lawyers", element: <Lawyers /> },
      { path: "/totalusers", element: <Totalusers /> },
      { path: "/cases", element: <Cases /> },
      { path: "/department", element: <Department /> },
      { path: "/notification", element: <Notification /> },
      { path: "/meeting", element: <Meeting  /> },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
