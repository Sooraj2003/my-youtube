import { useSelector } from "react-redux";


const VideoCard = ({videoItem}) => {
    const {snippet,statistics} = videoItem;
    const {title,channelTitle,thumbnails} = snippet;
    const {viewCount} = statistics;
    const showSideBar = useSelector((store)=>store.sideBar.showSideBar)

  return (
    <div className={`h-64 shadow-sm rounded-xl p-2 m-2 ${
      showSideBar ? 'w-72' : 'w-80'
    }`}>
      <img className="rounded-xl" alt="thumbnail" src={thumbnails.medium.url}/>
      <h1 className="font-bold ">{title}</h1>
      <p className="text-slate-400 text-sm">{channelTitle}</p>
      <div className=" text-slate-400 text-sm">
       <p className="">{viewCount} views</p>
      
      </div>
    </div>
  )
}

export default VideoCard
