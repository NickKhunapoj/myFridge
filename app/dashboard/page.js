import { RecRight } from "./recright.jsx"; // Use a relative path
import { RecLeft } from "./recleft.jsx"; // Use a relative path
import { Topmenu } from "./topmenunosignup.jsx"; // Use a relative path

export default function Dashboard() {
    return (
        <div className="relative w-full h-screen flex justify-center items-center">
            <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Bg"
                src="https://media.discordapp.net/attachments/1151835814939078738/1151836795928055898/img-bg.png?width=2182&height=1228"
            />
            <Topmenu />
            <RecLeft />
            <RecRight />

        </div>
    );
}
