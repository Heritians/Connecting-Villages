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
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        </div>
      </>
    );
}
