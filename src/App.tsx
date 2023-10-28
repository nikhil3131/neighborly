import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {Landing, Layout, SignIn, SignUp, AuthLayout} from "./pages/index.ts"

//routing
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Landing/>
      }
    ]
  },
  {
    path: "/",
    element: <AuthLayout/>,
    children:[
      {
        index: true,
        element:<SignIn/>
      },
      {
        path:"signup",
        element: <SignUp/>
      }
    ]
  }
])

export default function App(){
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}