import { BrainIcon } from "../../icons/BrainIcon";
import { TwitterIcon } from "../../icons/TwtterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItems";


export function Sidebar(){
     return <div className="fixed top-0 left-0  h-screen w-72 bg-white border-r-2 border-gray-200">
        <div className="flex text-purple-600 font-sembold text-2xl mt-2 ml-4">
            <BrainIcon/>
            Second Brain
        </div> 
        <div className="pt-10 mt-6 ">
            <SidebarItem text="Twitter" icon={<TwitterIcon/>} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
        </div>
    </div>
}

