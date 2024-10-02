import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  return (
    <div className="  w-full p-2 m-2 pl-10 h-[90vh]  overflow-y-scroll">
       <ButtonList/>
       <VideoContainer/>
    </div>
  )
}

export default MainContainer
