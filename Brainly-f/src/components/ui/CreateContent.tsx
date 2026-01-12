import { CloseIcon } from "../../icons/CloseIcon";
// import {useState} from "react";
import { Button } from "./Button";


export function CreateContent({open , OnClose}){
    return <div>
            {open && <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center  ">
                <div className=" absolute text-black bg-white p-6 rounded border rounded-3xl overflow-hidden ">
                  <div className="absolute top-1 right-1 font-bold cursor-pointer">
                    <CloseIcon onClick={OnClose} className="h-8 w-8 " />
                  </div>
                  <div  className="flex flex-col gap-4 px-4 pt-4">
                    <Input placeholder={"title"}  />
                    <Input placeholder={"link"} />
                  </div>

                  <div className="flex justify-center font-bold pb-2 pt-10">
                    <Button variant="primary" text="Sumit" />
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

