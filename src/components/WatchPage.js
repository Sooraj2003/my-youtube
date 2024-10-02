import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"
import { closeSideBar } from "../utils/sideBarSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChatContainer from "./LiveChatContainer";

const WatchPage = () => {
  const  showSideBar = useSelector((store)=>store.sideBar.showSideBar)
  const dispatch = useDispatch();
    const [searchParam] =useSearchParams();
    const key = searchParam.get("v");
    console.log(key);
    
    useEffect(()=>{
        dispatch(closeSideBar());
    },[])
  return (
    <div className="h-[90vh] overflow-y-scroll w-screen">
    <div className="-z-10 m-2 p-2 ml-10 flex ">
      <iframe 
      className="rounded-2xl w-8/12"
      width="900" 
      height="450" 
      src={"https://www.youtube.com/embed/"+key }
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
      </iframe>
      <LiveChatContainer/>
    </div>
    <CommentsContainer/>
    </div>
    
  )
}

export default WatchPage
