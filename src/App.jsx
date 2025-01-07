import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Rootlayout from "./component/layout/Rootlayout";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
  
        <Route path="/" element={<Rootlayout />} >
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
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
