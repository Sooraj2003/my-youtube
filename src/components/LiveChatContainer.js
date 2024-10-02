import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessages } from "../utils/chatSlice";
import { generateRandomNames, generateRandomText } from "../utils/helper";

const LiveChatContainer = () => {
  const [liveMessage,setLiveMessage] = useState("");
const dispatch = useDispatch();
const chatMessage = useSelector((store)=>store.chat.messages);
  useEffect(()=>{
   const id = setInterval(()=>{
    //Api polling
    
     dispatch(addMessages({name:generateRandomNames(),text:generateRandomText(10)}))
   },1500);

   return ()=>{
     clearInterval(id);
   }
  },[])
  
        
    
  return (
    <div className="w-4/12">
    <div className="ml-4 p-2 bg-gray-200 h-[450px]  rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessage.map((chat)=> <ChatMessage name={chat.name} text={chat.text}/>)}
    </div>
    <div className="ml-4 p-2 bg-gray-100">
      <input className="w-10/12 px-1" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} type="text" placeholder="Enter your message"/>
      <button onClick={()=>{
        dispatch(addMessages({name:"Sooraj",text:liveMessage}));
        setLiveMessage("");
      }} className="w-2/12 px- bg-red-600 rounded-lg hover:bg-red-500">Send</button>
    </div>
    </div>
  )
}

export default LiveChatContainer
