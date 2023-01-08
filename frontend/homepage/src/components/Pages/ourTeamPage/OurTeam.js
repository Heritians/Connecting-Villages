import React from "react";
import MemberCards from "./MemberCards";
import './OurTeam.css';
import Headings from "./Heading";





const OurTeam = () => {
  return (
    <>
    <Headings/>
    <div className="all_cards">
    <MemberCards
          img="./images/hemanth.jfif" 
          alt = "An image of Lasudiya Khas is supposed to be displayed here"
          title="HEMANTH SAI"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/HemanthSai7"
          linkedin = "https://www.linkedin.com/in/hemanthsai3187/"
    />
    <MemberCards
          img="./images/sample.jpeg" 
          alt = "An image of Lasudiya Khas is supposed to be displayed here"
          title="MAYURESH AGASHE"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/mayureshagashe2105"
          linkedin = "https://www.linkedin.com/in/mayureshagashe2105/"
    />
    <MemberCards
          img="./images/sayan.jpeg" 
          alt = "An image of Lasudiya Khas is supposed to be displayed here"
          title="SAYAN SHAH"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/SayanSaha01"
          linkedin = "https://www.linkedin.com/in/sayan-saha001/"
    />
    <MemberCards
          img="./images/sample.jpeg" 
          alt = "An image of Lasudiya Khas is supposed to be displayed here"
          title="SUYOG KASTURE"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/bumpansy"
          linkedin = "https://www.linkedin.com/in/suyog-kasture-0756a913b/"

          />
          <MemberCards
          img="./images/anmol.png" 
          alt = "An image of Lasudiya Khas is supposed to be displayed here"
          title="ANMOL GARG"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/Scholasticpal"
          linkedin = "https://www.linkedin.com/in/anmol-garg-790516203/"
    />
    <MemberCards
          img="./images/gargi.jpeg" 
          alt = "An image of Lasudiya Khas is supposed to be displayed here"
          title="GARGI SINGH"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/Gargi1971"
          linkedin = "https://www.linkedin.com/in/gargi-singh-1b9830222/"
    />
    

    
    <MemberCards
          img="./images/vishesh.jpg" 
          alt = "An image of Lasudiya Khas is supposed to be displayed here"
          title="VISHESH TRIPATHI"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/Vishesht27"
          linkedin = "https://www.linkedin.com/in/vishesh-tripathi/"
          
    />
    
    </div>
    </>
  );
};

export default OurTeam;