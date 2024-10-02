import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchCard from "./SearchCard";


const QueryPage = () => {
    const [params] = useSearchParams();
    const [videos,setVideos] = useState([]);
    const query = params.get("search_query");
    
    
    
    useEffect(()=>{
      getResults();
      console.log(videos);
    },[])

    const getResults = async ()=>{
        const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+query+"&type=video&key="+process.env.REACT_APP_API_KEY+"&maxResults=10");
        const json = await data.json();
        console.log(json.items);
        
        setVideos(json.items);
        
        
        
    }
  return (
    <div className="w-[85vw] h-screen m-2 p-2 overflow-y-scroll">
      {videos.map(video=><Link key={video.id.videoId} to={"/watch?v="+video.id.videoId}><SearchCard video={video}/></Link>)}
    </div>
  )
}

export default QueryPage;
