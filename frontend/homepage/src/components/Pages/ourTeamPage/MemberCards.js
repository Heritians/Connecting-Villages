function MemberCards(props) {
    return (
      <div className="wrapper1">
        <div className="card1">
          <div className="container">
          
            <img className="img1" src={props.img} alt= {props.alt}></img>  
            <div className="img_overlay">
            <div className="content">
            <p>{props.overlay}</p> 
            </div>
            <div className="social_links">
            <a href={props.linkedin}><i class="fa fa-linkedin"></i></a>
            <a href={props.github}><i class="fa fa-github"></i></a>
            </div>
            </div>         
          </div>
          
            <h2 className="card_title1">{props.title}</h2>                
            <p className="card_description1">{props.description}</p>  
            
          
          
          {/* <button className="card_button1">View Details</button> */}
        </div>
      </div>
    );
  }
  export default MemberCards;