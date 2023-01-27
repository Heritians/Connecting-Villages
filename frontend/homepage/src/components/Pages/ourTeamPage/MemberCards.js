import "./MemberCards.css";
function MemberCards(props) {
    return (
      <div className="wrapper1">
        <div className="card1">
          <div className="container">
          
            <img className="img_OT" src={props.img} alt= {props.alt}></img>  
            <div className="img_overlay">
            {/* <div className="content">
            <p>{props.overlay}</p> 
            </div> */}
            <div className="content">
            <a href={props.linkedin} className="cont1"><p className="pcont1"><i className="fa fa-linkedin"></i> Linkedin</p></a>
            <a href={props.github} className="cont1"><p><i className="fa fa-github"></i> GitHub</p></a>
            </div>
            </div>         
          </div>
          <div className="d1">
            <h2 className="card_title c1">{props.title}</h2>                
            <p className="card_description1 dc1">{props.description}</p>  
          </div>  
          
          
          {/* <button className="card_button1">View Details</button> */}
        </div>
      </div>
    );
  }
  export default MemberCards;