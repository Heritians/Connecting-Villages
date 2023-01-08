import React, {useState} from "react";
import {OwnerMenuItems} from './OwnerMenuItems';
import { Link } from 'react-router-dom';
import './ownerDropdown.css'

function OwnerDropdown()  {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <>
          <ul
            onClick={handleClick}
            className= {click ? 'owner-dropdown clicked' : 'owner-dropdown'}>
            {OwnerMenuItems.map((item,index) => {
                return (
                    <li key = {index}>
                        <Link className={item.cName} to= {item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </Link>

                    </li>
                )
            })}
          </ul>
        </>
    )
}

export default OwnerDropdown;




























