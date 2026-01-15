import { useRef, useState } from "react";
import { CloseIcon } from "../../icons/CloseIcon";
// import {useState} from "react";
import { Button } from "./Button";
// import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum ContentType{
  Youtube = "youtube",
  Twitter = "Twitter"
}


export function CreateContent({open , OnClose}){

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const[type , setType] = useState(ContentType.Youtube);

    async function addContent(){
      const title = titleRef.current?.value;
      const link = linkRef.current?.value;

      await axios.post(BACKEND_URL + "/api/v1/content",{
        link,
        type,
        title
      },
        // {
        //   headers:{
        //     Authorization:localStorage.getItem("token")
        //   }
        // }) 

    )}

    return <div>
            {open && <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center  ">
                <div className=" absolute text-black bg-white p-6 rounded border rounded-3xl overflow-hidden ">
                  <div className="absolute top-1 right-1 font-bold cursor-pointer">
                    <CloseIcon onClick={OnClose} className="h-8 w-8 " />
                  </div>
                  <div  className="flex flex-col gap-4 px-4 pt-4">
                    <input ref={titleRef} placeholder={"title"} className="px-4 py-2 border border-gray-400 rounded " />
                    <input ref={linkRef} placeholder={"link"} className="px-4 py-2 border border-gray-400 rounded " />
                  </div>
                      <div className="flex gap-2 ">
                        <Button variant={type === ContentType.Youtube? "primary" : "secondery"} onClick={()=>{
                            setType(ContentType.Youtube)
                        }} text="youtube"/>
                        <Button variant={type === ContentType.Twitter? "primary" : "secondery"} onClick={()=>{
                            setType(ContentType.Twitter)
                        }} text="twitter" />
                      </div>
                  <div className="flex justify-center font-bold pb-2 pt-10">
                    <Button variant="primary" text="Sumit" onClick={addContent} />
                  </div>
                </div>
            </div>}
    </div>
    
}


interface Inputprops{
  // onChange: onChange ()=> void;
  placeholder: string;
  onChange?: ()=>void
}
function Input({onChange , placeholder}: Inputprops){
  return<div>
    <input placeholder={placeholder} type={"text"} className="px-4 py-2 border border-gray-400 rounded " onChange={onChange}></input>
  </div>
}


