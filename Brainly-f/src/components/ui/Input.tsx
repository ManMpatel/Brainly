interface Inputprops{
    placeholder: string;
    // type: string;
    ref?:any;
}

export function Input({placeholder, ref} : Inputprops){
    return <input ref={ref} placeholder={placeholder}  type={"text"} className="border-2 rounded" />
}
