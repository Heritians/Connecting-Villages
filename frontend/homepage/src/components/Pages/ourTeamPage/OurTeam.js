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
          img="./images" 
          title="Dr. SHARAD C. TRIPATHI"
          description=<p>Project Mentor <br/> UBA Cell Head, VIT Bhopal </p>
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/"
          linkedin = "https://www.linkedin.com/"

          />
    <MemberCards
          img="./images/anmol.png" 
          title="ANMOL GARG"
          description=<p>Project Lead <br/> Web Developer</p>
          // description="Team Lead Web Developer"
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/Scholasticpal"
          linkedin = "https://www.linkedin.com/in/anmol-garg-790516203/"
    />
    <MemberCards
          img="./images/gargi.jpeg" 
          title="GARGI SINGH"
          description="Web Developer"
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/Gargi1971"
          linkedin = "https://www.linkedin.com/in/gargi-singh-1b9830222/"
    />
    
    <MemberCards
         img ="./images/hemanth.jfif" 
          title="HEMANTH SAI GARLADINNE"
          description="DevOps"
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/HemanthSai7"
          linkedin = "https://www.linkedin.com/in/hemanthsai3187/"
    />
    <MemberCards
          img="./images/Mayuresh.png" 
          title="MAYURESH AGASHE"
          description="DevOps"
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/mayureshagashe2105"
          linkedin = "https://www.linkedin.com/in/mayureshagashe2105/"
    />
    <MemberCards
          img="./images/vishesh.jpg" 
          title="VISHESH TRIPATHI"
          description="UI/UX Designer"
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/Vishesht27"
          linkedin = "https://www.linkedin.com/in/vishesh-tripathi/"
          
    />
    <MemberCards
          img="./images/sayan.jpeg" 
          title="SAYAN SAHA"
          description="Data Analyst"
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/SayanSaha01"
          linkedin = "https://www.linkedin.com/in/sayan-saha001/"
    />
    <MemberCards
          img="./images/Suyog.png" 
          title="SUYOG KASTURE"
          description="Data Analyst"
          overlay = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis libero at mauris elementum cursus. Duis iaculis viverra eros ac ultrices."
          github = "https://github.com/bumpansy"
          linkedin = "https://www.linkedin.com/in/suyog-kasture-0756a913b/"

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