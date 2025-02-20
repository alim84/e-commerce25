import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Rootlayout from "./component/layout/Rootlayout";
import About from "./pages/About";
import Shop from "./pages/Shop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  
        <Route path="/" element={<Rootlayout />} >
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        </Route>


   

    </>
  )
);

const App = () => {
  return(
    <RouterProvider router={router}/>
  )
};

export default App;
