import { AboutImg1, AboutImg2 } from "@/assets/images";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div className="p-5 sm:p-10 w-full flex flex-col justify-between">
        <h1 className="text-primary-blue font-light text-4xl sm:text-6xl">
          About Us
        </h1>
        <h3 className="text-primary-blue font-light text-xl sm:text-2xl">
          Our Motto:
        </h3>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center my-5">
          <div className="w-full sm:w-3/5 flex flex-col justify-between sm:pr-3">
            <h3 className="text-primary-orange text-3xl pb-3">Motivation</h3>
            <p className="text-primary-blue text-justify">
              70% of the country’s population still resides in rural areas.
              Despite this, it only contributes about 17% to India’s GDP. This
              is because of the disparity in development between rural and urban
              areas in almost all areas like healthcare, education,
              infrastructure, employment opportunities etc. The lack of
              facilities and opportunities has also led to an influx of
              migration to urban areas in the past few decades. As a result, the
              cities are getting overpopulated, polluted and the cost of living
              is skyrocketing.
            </p>
          </div>
          <Image
            src={AboutImg1}
            alt="About Us"
            className="w-full sm:w-2/5 h-auto rounded-lg border-2 border-primary-blue my-2 sm:m-0"
            width={200}
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center my-5">
          <Image
            src={AboutImg2}
            alt="About Us"
            className="w-full sm:w-2/5 h-auto rounded-lg border-2 border-primary-orange my-2 sm:m-0"
            width={200}
          />
          <div className="w-full sm:w-3/5 flex flex-col justify-between sm:pl-3">
            <h3 className="text-primary-orange text-3xl pb-3">Objective</h3>
            <p className="text-primary-blue text-justify">
              Gandhi ji, in “Hind Swaraj” foresaw that the western development
              standard of urbanization is not sustainable. Hence, it is
              imperative to promote the holistic development of villages in a
              way that all their standard needs are locally met. The Unnat
              Bharat Abhiyan is a step forward on the path of empowering the
              agrarian economy. By being a part of this program, we hope to make
              a small contribution to this initiative. With this website, we
              will be able to digitize the “Unnat Bharat Abhiyan Baseline
              Household Survey Form” and analyze the data entered. Through this
              website, we hope to lend the authorities a hand in identifying the
              areas that might need urgent attention.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
