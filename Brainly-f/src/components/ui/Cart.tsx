import { ShareIcon } from "../../icons/ShareIcon"

type CartProps = {
  title: string;
  link: string;
  type: "youtube" | "twitter";
};


export function Cart({ title, link, type }: CartProps){
    return <div className= " flex flex-wrap bg-white rounded-md border-gray-200 w-72 p-2 justify-between shadow-lg">

        {/* Header */}
            <div className="flex text-gray-600 items-start gap-2">
                <div className="flex p-2 gap-x-2 " >
                    <ShareIcon/>
                </div>
                <div className="decoration-auto text-lg">
                    {title}
                </div> 
            </div>
            <div className="flex p-2 text-gray-600 gap-2">
                <ShareIcon/>
                <ShareIcon/>
            </div>
             <div className="pt-4 ">
                {type === "youtube" && (
                    <iframe
                        className="w-full"
                        src={link.replace("watch?v=", "embed/")}
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                    />
                    )}
                     {type === "twitter" && (
                        <blockquote className="twitter-tweet">
                            <a href={link} target="_blank" rel="noreferrer">
                            View Tweet
                            </a>
                        </blockquote>
                        )}


            </div>
        </div>    

   
           
        
     
}