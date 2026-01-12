import type { ReactElement ,  ReactNode } from "react";

interface ButtonProps{
    variant?: "primary" | "secondery";
    text: string;
    startIcon?: ReactElement;
    children?: ReactNode;
    onClick?: ()=>void;
    // className:string;
}
//   bg-purple-600
const variantClass ={
    "primary" : "bg-indigo-600  text-white",
    "secondery": "bg-indigo-200 text-indigo-600",
}

const defaultStyles= "px-4 py-2 rounded-lg font-light flex item-center gap-2";



export function Button ({ variant, text , startIcon , onClick}: ButtonProps){
     return <button onClick={onClick} className={`${defaultStyles} ${variantClass[variant]}`}>
        {startIcon}
        {text} 
    </button>
}