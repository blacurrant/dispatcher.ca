import { Image } from "antd";
import welcome from "../assets/welcomeIllus.png";
import { useSelector } from "react-redux";

export default function WelcomeBanner() {
  const userInfo = useSelector((state) => state?.currentUserSlice?.userInfo);

  return (
    <div className="relative w-2/3 mx-auto px-6 gap-4 flex flex-col justify-center ">
      <h1 className=" px-2 text-3xl font-light text-primary w-fit">
        Hey {userInfo?.displayName}!
      </h1>
      <div className=" bg-secondary rounded-3xl  overflow-hidden">
        <div className="w-full md:w-[80%] flex flex-col gap-4 p-6">
          <h2 className="w-[80%] text-2xl md:text-3xl font-semibold text-primary leading-tight">
            Embark on a Journey of Growth with MelloUp
          </h2>
          <div className="flex flex-col gap-1 font-light w-full">
            <p className="text-lg  font-light">Prepare. Analyze. Optimize.</p>
            <p className="text-lg font-light">
              Your Ultimate Event Led Marketing Experience Starts Here
            </p>
          </div>
        </div>
      </div>
      <div className=" absolute right-16 top-5 w-[250px] ">
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
