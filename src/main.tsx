import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactLenis } from "@studio-freight/react-lenis";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';


const lenisOptions = {
  lerp: 0.5,
  duration: 2,
  smoothTouch: false, //smooth scroll for touch devices
  smooth: true,
};



const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    // children:[
    //   {
    //     path:"/",
    //     element:<Home/>
    //   }
    // ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis root options={lenisOptions}>
    <RouterProvider router={router} />
    </ReactLenis>
  </StrictMode>,
)
