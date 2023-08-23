import Link from "next/link";

const Unauthorized = () => {
  return (
    <>
      <div className="w-full min-h-[65vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-red-600 text-5xl font-bold py-4">ACCESS DENIED</h1>
        <h3 className="text-2xl py-2">
          You are not authorized to view this page.
        </h3>
        <Link href="/" className="orange_btn mt-5">
          Go back home
        </Link>
      </div>
    </>
  );
};

export default Unauthorized;
