import { BUTTON_LIST } from "../utils/constants"
import Button from "./Button"

const ButtonList = () => {
  return (
    <div className="flex overflow-scroll scrollbar-hide">
      {BUTTON_LIST.map((buttonText,index)=><Button key={index} buttonText={buttonText}/>)}
    </div>
  )
}

export default ButtonList
