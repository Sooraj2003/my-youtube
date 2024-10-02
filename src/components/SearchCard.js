const SearchCard = ({video}) => {

    if(!video) return;
    
    const {snippet} = video;
    const {channelTitle,description,thumbnails,title} = snippet;
  return (
    <div className="flex w-full rounded-lg shadow-lg my-4 hover:bg-gray-300">
      <div className="w-5/12">
        <img className="h-80 w-full rounded-lg" alt="thumnail-logo" src={thumbnails.high.url}/>
      </div>
      <div className="w-7/12 ml-4">
         <h1 className="font-bold text-xl ">{title}</h1>
         <p className="text-slate-500 my-4">{channelTitle}</p>
         <p className="text-sm text-slate-600">{description}</p>
      </div>
    </div>
  )
}

export default SearchCard
