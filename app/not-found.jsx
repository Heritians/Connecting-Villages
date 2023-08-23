import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <title>Page not Found | Heritians</title>
      <div className="flex flex-col justify-center p-5 sm:p-10">
        <h1 className="text-[6rem] sm:text-[8rem] font-semibold leading-none py-1 sm:py-2">
          404
        </h1>
        <h3 className="text-[2rem] sm:text-[3.5rem] leading-none py-1">
          Page not found
        </h3>
        <p className="text-lg sm:text-3xl font-light leading-none text-primary-blue py-1">
          The page you were looking for was not found!
        </p>
        <div className="w-full flex items-center justify-center my-3">
          <Link href="/" className="orange_btn">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
