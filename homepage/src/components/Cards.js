//structure of a single card component in middle part is defined here

//props used to avoid repition of same HTML code for all dynamic elements present in the card component
function Cards(props) {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="card_body">
        {/* passing props instead of actual image address, title and description instead of hard-coding their actual values*/}
          <img className="img" src={props.img} alt= {props.alt}></img>                  
          <h2 className="card_title">{props.title}</h2>                
          <p className="card_description">{props.description}</p>  
        
        </div>
        <button className="card_button">View Details</button>
      </div>
    </div>
  );
}
export default Cards;
