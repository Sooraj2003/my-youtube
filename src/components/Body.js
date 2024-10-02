import { useSelector } from "react-redux"
import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"

const Body = () => {
  const showSideBar = useSelector((store)=>store.sideBar.showSideBar)
  return (
    <div className="flex ">
      {showSideBar && <SideBar/>}
       
       <Outlet/>
    </div>
  )
}

export default Body
