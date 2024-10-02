import { useEffect } from "react";
import VideoCard from "./VideoCard"
import { useDispatch, useSelector } from "react-redux";
import { addVideoItems } from "../utils/videosSlice";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  
  const dispatch = useDispatch();
  const getVideos = async()=>{
    const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+process.env.REACT_APP_API_KEY);
    const json = await data.json();
     dispatch(addVideoItems(json.items));
  }
  useEffect(()=>{
    getVideos();
    // eslint-disable-next-line
  },[]);
 const videoItems = useSelector((store)=>store.videos.videoItems);

  
  return (
    <div className="flex flex-wrap  ">
      {videoItems?.map(videoItem=><Link key={videoItem.id} to={"/watch?v="+videoItem.id}><VideoCard  videoItem={videoItem}/></Link>)  }
    </div>
  )
}

export default VideoContainer
