import { TeamMembers, Contributors } from "@/assets";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";

const TeamPage = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="section_title">Team</h1>
          <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 py-8 gap-3 sm:gap-6">
            {TeamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-center bg-primary-cream rounded-xl p-4"
              >
                <Image
                  alt={member.imageAlt}
                  src={member.image}
                  className="h-[10rem] w-auto rounded-lg border-2 border-primary-orange"
                />

                <h1 className="text-2xl text-primary-orange font-semibold p-2">
                  {member.name}
                </h1>

                <h3 className="text-lg text-black/50 p-1">{member.title}</h3>

                <div className="w-1/3 flex flex-row justify-center items-center p-4">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer">
                      <LinkedinIcon className="h-6 w-6 mx-3 hover:text-primary-orange" />
                    </a>
                  )}

                  {member.github && (
                    <a href={member.github} target="_blank" rel="noreferrer">
                      <GithubIcon className="h-6 w-6 mx-3 hover:text-primary-orange" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="section_title">Contributors</h1>
          <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 py-8 gap-3 sm:gap-6">
            {Contributors.map((member, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-center bg-primary-cream rounded-xl p-4"
              >
                <Image
                  alt={member.imageAlt}
                  src={member.image}
                  className="h-[10rem] w-auto rounded-lg border-2 border-primary-orange"
                />

                <h1 className="text-2xl text-primary-orange font-semibold p-2">
                  {member.name}
                </h1>

                <h3 className="text-lg text-black/50 p-1">{member.title}</h3>

                <div className="w-1/3 flex flex-row justify-center items-center p-4">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noreferrer">
                      <LinkedinIcon className="h-6 w-6 mx-3 hover:text-primary-orange" />
                    </a>
                  )}

                  {member.github && (
                    <a href={member.github} target="_blank" rel="noreferrer">
                      <GithubIcon className="h-6 w-6 mx-3 hover:text-primary-orange" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
