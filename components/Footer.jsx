import { GlobalLinks } from "@/assets";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-primary-orange text-white">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center p-5">
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-center">
            <div className="items-start">
              <h1 className="text-[2.5rem] font-semibold py-2">Heritians</h1>
              <p className="text-md py-2">
                Unnat Bharat Abhiyan Cell, VIT Bhopal University
              </p>
              <p className="text-md text-white/70">
                Bhopal - Indore Highway
                <br />
                Kothri Kalan, Sehore
                <br />
                Madhya Pradesh, India 466114
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-row justify-between items-start px-2">
            <div className="w-1/2">
              <h1 className="text-[1.5rem] font-semibold py-2">Quick Links</h1>
              <ul>
                <li className="pt-1 hover:text-primary-blue w-max">
                  <Link href="/">Home</Link>
                </li>
                <li className="pt-1 hover:text-primary-blue w-max">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="pt-1 hover:text-primary-blue w-max">
                  <Link href="/team">Our Team</Link>
                </li>
                <li className="pt-1 hover:text-primary-blue w-max">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <h1 className="text-[1.5rem] font-semibold py-2">Media</h1>
              <ul>
                <li className="pt-1 hover:text-primary-blue w-max">
                  <a href={GlobalLinks.Facebook}>Facebook</a>
                </li>
                <li className="pt-1 hover:text-primary-blue w-max">
                  <a href={GlobalLinks.Linkedin}>LinkedIn</a>
                </li>
                <li className="pt-1 hover:text-primary-blue w-max">
                  <a href={GlobalLinks.GitHub}>GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full p-2 sm:p-3 text-center border-t border-white">
          <p className="text-lg">© Copyright Heritians. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
