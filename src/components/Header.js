import { IoIosSearch } from "react-icons/io"
import { YOUTUBE_LOGO ,USER_LOGO,HAMBURGER_ICON, YOUTUBE_SEARCH_SUGGESTION_API} from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { toggleSideBar } from "../utils/sideBarSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addSearchCache } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [value,setValue] = useState("");
  const [searchSuggesstions,setSearchSuggestions] = useState([]);
  const [showSearchSuggestions,setShowSearchSuggestions] = useState(false);
 
  useEffect(()=>{

    const timer = setTimeout(()=>{
      
      
      getSearchSuggestions();
    },200)
     
    return ()=>{
      clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value]);
  const searchCache = useSelector(store=>store.cache);
  //{key:"",key:""}  0(1) but arrau takes O(n) also use hashmap
  const getSearchSuggestions = async ()=>{
  
    if(searchCache[value]){
      setSearchSuggestions(searchCache[value]);
    }else{
      
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+value);
    const json = await data.json();
    console.log("api call"+value);
    setSearchSuggestions(json[1]);
    dispatch(addSearchCache({[value]:json[1]}))
    }
  
    
     
    
  }
  const handleSideBar = ()=>{
        dispatch(toggleSideBar());
  }
  const handleBlur = ()=>{

    setTimeout(()=>{
      setShowSearchSuggestions(false)
    },200)
  }
  return (
    <>
    <div className="flex justify-between items-center p-2 m-2  shadow-sm">
    <div className="flex justify-between w-32 ">
    <div className="w-7 h-7 hover:bg-gray-200 hover:rounded-full m-0 p-1 -mt-1">
      <img onClick={handleSideBar} className="w-5 h-5 " alt="hamburger-logo" src={HAMBURGER_ICON}/>
    </div>
    <div className="ml-4">
      <Link to="/"><img className="w-24" alt="logo" src={YOUTUBE_LOGO}/></Link>
      </div>
    </div>
      <div className="flex w-5/12 -ml-36 -mt-4 ">
      <input onFocus={()=>setShowSearchSuggestions(true)} onBlur={handleBlur} value={value} onChange={(e)=>setValue(e.target.value)}className="border border-black border-solid rounded-l-full w-full px-4 py-1"type="text" placeholder="Search"/>
      <button className="border border-black border-solid rounded-r-full bg-gray-100 hover:bg-gray-200 px-2 py-1"><IoIosSearch /></button>
      </div>
      <div className="w-8">
      <img alt="user-logo" src={USER_LOGO}/>
      </div>
    </div>
    {showSearchSuggestions &&
    <div className="w-5/12  bg-white absolute left-[28%] top-11 rounded-lg shadow-lg">
        <ul className=" font-semibold">
          {searchSuggesstions.map(item=><Link to={"/search?search_query="+item} key={item}><li   className="m-1 p-1 hover:bg-gray-200 hover:rounded-lg"><IoIosSearch className="inline-block"/> {item}</li></Link>)}
        </ul>
    </div>
      }
    </>
  )
}

export default Header
