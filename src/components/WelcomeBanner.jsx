import { Image } from "antd";
import welcome from "../assets/welcomeIllus.png";
import { useSelector } from "react-redux";

export default function WelcomeBanner() {

  const userInfo = useSelector((state) => state?.currentUserSlice?.userInfo);

  return (
    <div className="relative w-full mx-auto p-6">
      <h1 className="text-2xl font-normal text-gray-800 py-2 font-lora">Hey {userInfo?.displayName}!</h1>
      <div className=" bg-secondary rounded-3xl  overflow-hidden">
        <div className="w-full md:w-[70%] flex flex-col gap-4 p-6">
          <h2 className="w-[80%] text-2xl md:text-3xl font-semibold text-primary leading-tight">
            Embark on a Journey of Growth with MelloUp
          </h2>
          <div className="flex flex-col gap-1 font-lora font-normal">
            <p className="text-lg  font-lora">Prepare. Analyze. Optimize.</p>
            <p className="text-lg font-lora">
              Your Ultimate Event Led Marketing Experience Starts Here
            </p>
          </div>
        </div>
      </div>
        <div className=" absolute right-24 top-5 w-[250px] ">
          <Image
            className="w-full object-contain"
            src={welcome}
            alt="welcome"
            preview={false}
          />
        </div>
    </div>
  );
}
