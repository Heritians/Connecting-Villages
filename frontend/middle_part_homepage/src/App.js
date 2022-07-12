import "./App.css";
import Cards from "./Components/Cards";               //Component 'Cards' is imported 
import Heading from "./Components/Heading";           // Component 'Heading' is imported 

function App() {
  return (
    // division tag defines parent class 'App'
    <div className="App">             
      
      {/* divison tag for a separate class for headings  */}
      <div className="head">          
        <Heading></Heading>
      </div>
      
      {/* division class created to position 5 card components without disrupting the aligment of headings */}
      <div className="all_cards">     
       
        {/* 'Cards' is declared 5 times to render 5 duplicate card components */}
        {/* with the help of props, the dynamic elements of the card component are declared and then their separate values are referenced */}
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png" 
          alt = "An image of Lasudiya Khas is supposed to be displayed here"
          title="Lasudiya Khas"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt = "An image of Gawa Kheda is supposed to be displayed here"
          title="Gawa kheda"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt = "An image of Mana Khedi is supposed to be displayed here"
          title="Mana Khedi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt = "An image of Nepaniya Kalan is supposed to be displayed here"
          title="Nipaniya Kalan"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Cards
          img="https://www.indiaspend.com/wp-content/uploads/village_620.png"
          alt = "An image of Beda Khedi is supposed to be displayed here"
          title="Beda Khedi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      
      
      </div>
    
    </div>
  );
}

export default App;
