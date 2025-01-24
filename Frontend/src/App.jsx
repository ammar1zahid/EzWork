import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { createBrowserRouter
  ,RouterProvider,
  Outlet  
} from 'react-router-dom'
import "./app.scss";
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import MyGigs from "./pages/myGigs/MyGigs";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import SingleMessage from "./pages/singleMessage/SingleMessage";
import Add from "./pages/add/Add";
import SingleGig from "./pages/singleGig/SingleGig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";




function App() {
  const queryClient = new QueryClient()


  const Layout =()=>{
    return (
      <div className="app">
         <QueryClientProvider client={queryClient}>
              <Navbar />
              <Outlet />
              <Footer/>
         </QueryClientProvider>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      // exact: true,
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <SingleMessage />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <SingleGig />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ]

    },
  ]);


  return (
    <>
    <RouterProvider router={router}/>
   
    </>
  )
}

export default App
