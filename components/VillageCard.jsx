import Image from "next/image";

const VillageCard = ({ village }) => {
  return (
    <>
      <div className="w-4/5 h-full p-3 sm:p-5 flex flex-col items-center text-center justify-between bg-primary-cream rounded-xl hover:scale-105 hover:ease-in-out hover:duration-300">
        <h2 className="text-2xl font-semibold pb-2">{village.title}</h2>
        <Image
          className="rounded-lg"
          src={village.image}
          alt={village.DB_Name}
        />
        <p className="py-3">{village.description}</p>
        <button disabled className="blue_btn">
          View Details
        </button>
      </div>
    </>
  );
};

export default VillageCard;
