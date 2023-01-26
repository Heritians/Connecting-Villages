import React from "react";
import MemberCards from "./MemberCards";
import './OurTeam.css';
import { FooterContainer } from "../../Home_p3/footer";






const OurTeam = () => {
  return (
    <>
    <p className="head1">Our Team</p>
    {/* <hr className="line1"></hr>
    <p className="head2">Lorem ipsum</p> */}
    <div className="all_cards1">
    <MemberCards
         img ="./images/hemanth.jfif" 
          title="HEMANTH"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/HemanthSai7"
          linkedin = "https://www.linkedin.com/in/hemanthsai3187/"
    />
    <MemberCards
          img="./images/Mayuresh.jpeg" 
          title="MAYURESH"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/mayureshagashe2105"
          linkedin = "https://www.linkedin.com/in/mayureshagashe2105/"
    />
    <MemberCards
          img="./images/sayan.jpeg" 
          title="SAYAN"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/SayanSaha01"
          linkedin = "https://www.linkedin.com/in/sayan-saha001/"
    />
    <MemberCards
          img="./images/" 
          title="SUYOG"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/bumpansy"
          linkedin = "https://www.linkedin.com/in/suyog-kasture-0756a913b/"

          />
          <MemberCards
          img="./images/anmol.png" 
          title="ANMOL"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/Scholasticpal"
          linkedin = "https://www.linkedin.com/in/anmol-garg-790516203/"
    />
    <MemberCards
          img="./images/gargi.jpeg" 
          title="GARGI"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/Gargi1971"
          linkedin = "https://www.linkedin.com/in/gargi-singh-1b9830222/"
    />
    

    
    <MemberCards
          img="./images/vishesh.jpg" 
          title="VISHESH"
          description="Lorem ipsum dolor sit amet."
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/Vishesht27"
          linkedin = "https://www.linkedin.com/in/vishesh-tripathi/"
          
    />
    
    </div>
    <div className="back">
          <a href="/">
            <button className="back-btn">Back to Homepage</button>
          </a>
        </div>

        {/* footer */}
        <div className="FooterWhole">
          <FooterContainer />
        </div>
    </>
  );
};

export default OurTeam;