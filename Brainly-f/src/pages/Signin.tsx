import { Button } from "../components/ui/Button";
import { BrainIcon } from "../icons/BrainIcon";


export function Signin(){
    return <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-600 bg-[length:200%_200%] animate-[gradient-move_6s_ease_infinite] ">
            <div className="flex justify-center items-center min-h-screen ">
                <div className="flex bg-white w-80 h-60 rounded-lg flex-wrap justify-center pt-10 border-2">
                    <div className=" flex flex-wrap justify-center gap-2  ">
                        <input placeholder="UserId" type="text" className="border-2 rounded"/>
                        <input placeholder="password" type="text" className="border-2 rounded"/>
                    </div>
                    <div className=" mt-4">
                        <Button variant="primary" text="Signin" />
                    </div>
                </div>
            </div>
        <div className="absolute top-6 left-6">
            <BrainIcon/>
        </div>
    </div>
}
