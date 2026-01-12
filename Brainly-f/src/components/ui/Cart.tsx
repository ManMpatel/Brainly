import { ShareIcon } from "../../icons/ShareIcon"

export function Cart(){
    return <div className= " flex flex-wrap bg-white rounded-md border-gray-200 w-72 p-2 justify-between shadow-lg">
            <div className="flex text-gray-600 items-start gap-2">
                <div className="flex p-2 gap-x-2 " >
                    <ShareIcon/>
                </div>
                <div className="decoration-auto text-lg">
                    project idea
                </div> 
            </div>
            <div className="flex p-2 text-gray-600 gap-2">
                <ShareIcon/>
                <ShareIcon/>
            </div>
             <div className="pt-4 ">
                <iframe className="w-full" src="https://www.youtube.com/embed/3rH2hjj_-_k?si=SRZlLNKqkfcnhj7S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>    

   
           
        
     
}