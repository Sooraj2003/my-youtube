import { USER_LOGO } from "../utils/constants"

const ChatMessage = ({name,text}) => {
  return (
    <div className="flex my-2">
      <img className="w-8 h-8" alt="user-logo" src={USER_LOGO}/>
      <h1 className="mx-2 font-bold">{name}</h1>
      <p className="text-gray-400">{text}</p>
    </div>
  )
}

export default ChatMessage
