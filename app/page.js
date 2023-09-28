import { Box } from "/app/loginbox"; // Use a relative path
import { Topmenu } from "/app/topmenu"; // Use a relative path
import 'app/globals.css';

export default function Home() {
    return (
        <div className="font-Manrope">
        <div className="relative w-full h-screen flex justify-center items-center">
            <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Bg"
                src="/bg.png"
            />
            <Box />
            <Topmenu />
        </div>
        </div>
    );
}
