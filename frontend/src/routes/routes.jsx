import Basket from "../pages/Basket/Basket";
import Home from "../pages/Home";
import Root from "../pages/Root";
import Add from "../pages/add/Add";

const ROUTES = [
  {
    path: "",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "add",
        element: <Add/>,
      },
    ],
  },
];

export default ROUTES;
