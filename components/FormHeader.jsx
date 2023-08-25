import { UBALogo, VITBLogo } from "@/assets/images";
import Image from "next/image";

const FormHeader = () => {
  return (
    <>
      <div className="w-full h-max flex flex-row justify-between items-center py-4 px-2 sm:px-5 bg-white">
        <div className="w-1/5 flex justify-center sm:justify-start items-center">
          <Image
            priority
            src={UBALogo}
            alt="UBA Logo"
            className="h-8 sm:h-16 w-auto"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center items-center text-center">
          <h1 className="text-lg sm:text-xl text-primary-orange font-bold">
            Annexure VI
          </h1>
          <h3 className="text-xs sm:text-lg font-normal sm:font-medium">
            UBA Baseline Household Survey Form
          </h3>
        </div>
        <div className="w-1/5 flex justify-center sm:justify-end items-center">
          <Image
            priority
            src={VITBLogo}
            alt="VITB Logo"
            className="h-8 sm:h-16 w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default FormHeader;
