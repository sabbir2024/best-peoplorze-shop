import { createBrowserRouter } from "react-router-dom";
import Navigration from "../Navigration/Navigration";
import Products from "../Leyout/Products/Products";
import HomeGallery from "../Pages/HomeGellary/Homegellary";
import Dashbord from "../Pages/Dashbord/Dashbord";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <Navigration></Navigration>,
        children: [
            {
                path: "",
                element: <HomeGallery></HomeGallery>,
                // element: <h2>hello</h2>
            },

            {
                path: "/product",
                element: <Products></Products>,
                loader:()=> fetch(`https://dummyjson.com/products`)
            },
            {
                path: "/dashbord",
                element: <Dashbord></Dashbord>
            }
        ]
    }
])

export default myCreatedRoute;
