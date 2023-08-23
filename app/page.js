import { Header, VillageCard, InspirationsSection } from "@/components";
import Link from "next/link";
import { GitHub } from "@/assets/js/GlobalLinks";
import { Villages } from "@/assets";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full text-white h-max sm:h-[70vh] bg-hero bg-no-repeat bg-cover">
        <div className="w-full h-full bg-black/25 flex flex-col justify-center items-center text-center py-4">
          <h1 className="w-full sm:w-1/3 text-5xl sm:text-6xl font-bold p-2">
            Data Collection and Analysis
          </h1>
          <p className="text-lg sm:text-xl font-semibold p-2">
            The website that digitizes the ‘Unnat Bharat Abhiyan Baseline
            Household Survey Form’. We also intend to analyze the data entered
            in the form from the villages and present it graphically for easy
            comprehension. With this data, it will be easier for the concerned
            authorities to identify which areas need immediate help.
          </p>
          <Link href="/instructions" className="orange_btn my-4">
            Get Started
          </Link>
        </div>
      </div>
      <div>
        <h1 className="section_title">Explore the Prosperous Villages</h1>
        <div className="w-full grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-4 p-3 sm:p-5 mb-5">
          {Villages.map((village, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-auto"
            >
              <VillageCard village={village} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary-orange text-white h-max w-full flex flex-col sm:flex-row justify-between items-center p-4 sm:p-10">
        <div className="w-full sm:w-2/3 flex items-center justify-center text-3xl sm:text-4xl mb-4">
          Want to make a contribution?
        </div>
        <div className="w-full sm:w-1/3 flex items-center justify-center sm:justify-start">
          <a
            href={GitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="blue_btn text-xl"
          >
            Contribute
          </a>
        </div>
      </div>
      <InspirationsSection />
    </>
  );
}
