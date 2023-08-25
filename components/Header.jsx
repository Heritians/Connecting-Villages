import { UBALogo, VITBLogo } from "@/assets/images";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="w-full h-max flex flex-row justify-between items-center py-4 px-2 sm:px-5 bg-white">
        <div className="w-1/5 flex justify-center sm:justify-start items-center">
          <Image
            src={VITBLogo}
            alt="VITB Logo"
            className="h-8 sm:h-16 w-auto"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center items-center text-center">
          <h3 className="text-[0.6rem] sm:text-sm font-medium sm:font-semibold">
            उन्नत भारत अभियान
          </h3>
          <h1 className="text-[0.75rem] sm:text-lg text-primary-orange font-bold">
            UNNAT BHARAT ABHIYAN
          </h1>
          <h3 className="text-[0.45rem] sm:text-xs font-normal sm:font-medium">
            शिक्षित भारत-स्वस्थ भारत- स्वच्छ भारत- स्वावलंबी भारत- संपन्न भारत
          </h3>
        </div>
        <div className="w-1/5 flex justify-center sm:justify-end items-center">
          <Image src={UBALogo} alt="UBA Logo" className="h-8 sm:h-16 w-auto" />
        </div>
      </div>
    </>
  );
};

export default Header;
