import axios from "axios";
import { Button } from "../components/ui/Button";
import { BrainIcon } from "../icons/BrainIcon";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export function Signup(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate= useNavigate();

    async function signup(){
                   

        const username = usernameRef.current?.value;
        console.log(usernameRef.current)
        const password = passwordRef.current?.value;
                if (!username || !password) {
            alert("Username and password required");
            return;
            }

            try {
            await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
            });
            navigate("/signin")
            alert("Signup successful");
            } catch (err) {
            alert("Signup failed");
            console.error(err);
            }
        }

    return <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-600 bg-[length:200%_200%] animate-[gradient-move_6s_ease_infinite] ">
            <div className="flex justify-center items-center min-h-screen ">
                <div className="flex bg-white w-80 h-60 rounded-lg flex-wrap justify-center pt-10 border-2">
                    <div className=" flex flex-wrap justify-center gap-2  ">
                        <input ref={usernameRef} placeholder="UserId" type="text" className="border-2 rounded"/>
                        <input ref={passwordRef} placeholder="password" type="password" className="border-2 rounded"/>
                    </div>
                    <div className=" mt-4">
                        <Button variant="primary" text="Signup" onClick={signup} />
                    </div>
                </div>
            </div>
        <div className="absolute top-6 left-6">
            <BrainIcon/>
        </div>
    </div>
}

