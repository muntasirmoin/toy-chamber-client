import { createBrowserRouter } from "react-router-dom";
import Blog from "../componentes/Blog/Blog";
import Main from "../componentes/Main/Main";
import Login from "../componentes/User/Login/Login";
import Register from "../componentes/User/Register/Register";
import ErrorPage from "../componentes/ErrorPage/ErrorPage";
import AddToy from "../componentes/Toy/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToy from "../componentes/Toy/MyToy/MyToy";
import AllToys from "../componentes/Toy/AllToys/AllToys";
import UpdateToy from "../componentes/Update/UpdateToy";
import ViewDetails from "../componentes/Detail/ViewDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: 'addtoy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: 'mytoy',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: 'updateToy/:id',
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/singleToy/${params.id}`)
    },
    {
        path: 'viewDetail/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/singleToy/${params.id}`)
    },
    {
            path: 'alltoys',
            element: <AllToys></AllToys>,
            loader: ()=> fetch(`http://localhost:5000/toys`),
            errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: 'login',
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: 'register',
        element: <Register></Register>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "blog",
        element: <Blog></Blog>,
        errorElement: <ErrorPage></ErrorPage>
    },
]);

export default router;