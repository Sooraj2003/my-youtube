import {  useMemo, useRef, useState } from "react";
import { nthprime } from "../utils/helper"

const Demo = () => {
    const [text,setText] = useState();
    const [dark,setDark] = useState(false);
    const prime = useMemo(()=>nthprime(text),[text]);

     let x=0;
     const [count,setCount] = useState(0);
     const ref = useRef(0);
     
     

  return (
    //useMemo used to cache values between re-renders
    //heavy operations must be cached for other state changes
    <div className="flex">
    <div className={"m-4 p-4 w-96 rounded-lg"+(dark ? " bg-gray-400" : " bg-gray-200")}>
      <button onClick={()=>setDark(!dark)} className="bg-green-300 p-2 m-2 rounded-lg font-bold hover:bg-green-600">  Toggle</button>
      <input className="w-full border m-2 border-black p-2" value={text} onChange={(e)=>setText(e.target.value)} type="number" placeholder="Enter the number"/>
      <p className="font-bold m-2 text-xl">{"Nth prime : "+prime}</p>
    </div>
    <div className="m-4 p-4 w-96 rounded-lg bg-gray-400">
      <button onClick={()=>{
        console.log("Let : "+x);
        x=x+1;
        
        
      }} className="p-2 m-2 bg-green-300 font-bold text-2xl rounded-lg hover:bg-green-500">Increase let :</button>
      <span className="m-2 font-bold text-xl">{"Let : "+x}</span>
      <button onClick={()=>{
       setCount(count+1);
       }} className="p-2 m-2 bg-green-300 font-bold text-2xl rounded-lg hover:bg-green-500">Increase State :</button>
      <span className="m-2 font-bold text-xl">{"State : "+count}</span>
      <button onClick={()=>{
        console.log("Ref : " +ref.current);
        
       ref.current=ref.current+1;
       }} className="p-2 m-2 bg-green-300 font-bold text-2xl rounded-lg hover:bg-green-500">Increase Ref :</button>
      <span className="m-2 font-bold text-xl">{"Ref : " +ref.current}</span>
    </div>
    </div>
  )
}

export default Demo
