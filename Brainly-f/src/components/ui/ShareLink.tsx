import { useRef } from "react";
import { CloseIcon } from "../../icons/CloseIcon";
import { Button } from "./Button";
import toast from "react-hot-toast";




export function ShareLink({open , OnClose}){
    const linkRef= useRef<HTMLInputElement>(null);
    const pageUrl = window.location.href;

    return <div>
        { open && <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center ">
        <div className="flex bg-white p-6 rounded border rounded-3xl overflow-hidden gap-2">
            <div className="absolute top-1 right-1 font-bold cursor-pointer">
                <CloseIcon onClick={OnClose} className="h-8 w-8 " />
            </div>
             <input value={pageUrl} ref={linkRef} readOnly className="border rounded border border-gray-400 p-2 px-10" /> 
            <div className="flex justify-centr">
             <Button onClick={async()=>{
            try{
                await navigator.clipboard.writeText(pageUrl);
                toast.success("page link copid!");
                }catch{
                toast.error("faile to copy page link")
                }
                }} variant="primary" text="copy link" >   
                 </Button>
            </div>
        </div>
    </div>}
</div>

}