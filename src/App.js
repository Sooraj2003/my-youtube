import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import QueryPage from "./components/QueryPage";
import Demo from "./components/Demo";


function App() {
  const appRouter  = createBrowserRouter([
    {
      path:"/",
      element:(  <div className="h-screen overflow-hidden">
        <Header/>
        <Body/>
      </div>),
      children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"watch",
          element:<WatchPage/>
        },
        {
          path:"search",
          element:<QueryPage/>
        },{
          path:"demo",
          element:<Demo/>
        }
       
      ]
    }
  ])
  return (
    <RouterProvider router={appRouter}/>
  
    
  );
}

export default App;
