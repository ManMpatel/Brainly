import type { ReactElement ,  ReactNode } from "react";

interface ButtonProps{
    variant: "primary" | "secondery";
    text: string;
    startIcon: ReactElement;
    children?: ReactNode;
}

const variantClass ={
    "primary" : "bg-purple-600 text-white",
    "secondery": "bg-purple-200 text-purple-400",
}

const defaultStyles= "px-40 py-2 rounded-md font-light flex item-center";



export function Button ({ variant, text , startIcon}: ButtonProps){
     return <button className={`${defaultStyles} ${variantClass[variant]}`}>
        {startIcon}
        {text} 
    </button>
}