import type { ReactElement } from "react";

export const SidebarItem=({text, icon}:{
    text:string;
    icon:ReactElement;
})=> {
        return <div className="flex items-center gap-4 text-gray-600 pl-8 mb-2 cursor-pointer hover:bg-gray-200 rounded max-w-56 ml-6 h-10 transition-all">
            <div className="">
                {icon}
            </div>
            <div>
                {text}
            </div>
        </div>

}
