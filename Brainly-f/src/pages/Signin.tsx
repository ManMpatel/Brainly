import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BrainIcon } from "../icons/BrainIcon";
import { useRef } from "react";
// import { BACKEND_URL } from "../config";
import axios  from "axios";
import { BACKEND_URL } from "../config";

export function Signin(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signin`,{
            username,
            password
            })
        alert("you are signin")
    }

    return <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-600 bg-[length:200%_200%] animate-[gradient-move_6s_ease_infinite] ">
            <div className="flex justify-center items-center min-h-screen ">
                <div className="flex bg-white w-80 h-60 rounded-lg flex-wrap justify-center pt-10 border-2">
                    <div className=" flex flex-wrap justify-center gap-2  ">
                        <input ref={usernameRef} placeholder="UserId" />
                        <input ref={passwordRef} placeholder="password" />
                    </div>
                    <div className=" mt-4">
                        <Button variant="primary" text="Signin" onClick={signin} />
                    </div>
                </div>
            </div>
        <div className="absolute top-6 left-6">
            <BrainIcon/>
        </div>
    </div>
}
