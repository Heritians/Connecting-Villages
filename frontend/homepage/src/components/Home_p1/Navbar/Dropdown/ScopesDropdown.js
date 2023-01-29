import React,{ useState } from 'react';
import { scopeItems} from './ScopeItems';
import { Link } from "react-router-dom";
import "./ScopesDropdown.css";

export const ScopesDropdown = (props) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click); 
    console.log(scopeItems[props.role]);
    return (
      <>
      <div className={props.role+"-dropdown"}>

      
        <ul
          onClick={handleClick}
          className={
            click ? props.role + "-dropdown clicked" : props.role + "-dropdown"
          }
        >
          {scopeItems[props.role].map((item, index) => {
            return (
              <li key={index} className="dropd">
              <div className='dropdiv'>
                <Link 
                  className={item.cName} 
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                <p className='dropdp'>
                  {item.title}
                  </p>
                </Link>
                </div>
              </li>
            );
          })}
        </ul>
        </div>
      </>
    );
}
