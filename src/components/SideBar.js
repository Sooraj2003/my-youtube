import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"

const SideBar = () => {
  
  return (
    <div className="w-48 shadow-sm h-[90vh] overflow-y-scroll bg-white ">
       <ul className="p-2 m-2 border-b-2 text-sm">
        <li className="p-1 m-1"><Link to="/">Home</Link></li>
        <li className="p-1 m-1"><Link to="/demo">Demo</Link></li>
        <li className="p-1 m-1">Shorts</li>
        <li className="p-1 m-1">Subscriptions</li>
       </ul>
       <ul className="p-2 m-2 border-b-2 text-sm">
        <h1 className="font-semibold p-1 m-1 ">You <IoIosArrowForward className="inline-block -mt-1" /></h1>
        <li className="p-1 m-1">Your Channel</li>
        <li className="p-1 m-1">History</li>
        <li className="p-1 m-1">Your Videos</li>
        <li className="p-1 m-1">PlayLists</li>
        <li className="p-1 m-1">Watch later</li>
        <li className="p-1 m-1">Liked videos</li>
       </ul>
       <ul className="p-2 m-2 border-b-2 text-sm">
        <h1 className="font-semibold p-1 m-1 ">Explore</h1>
        <li className="p-1 m-1">Trending</li>
        <li className="p-1 m-1">Shoping</li>
        <li className="p-1 m-1">Music</li>
        <li className="p-1 m-1">Movies</li>
        <li className="p-1 m-1">Live</li>
        <li className="p-1 m-1">Gaming</li>
        <li className="p-1 m-1">News</li>
        <li className="p-1 m-1">Sports</li>
       </ul>
    </div>
  )
}

export default SideBar
