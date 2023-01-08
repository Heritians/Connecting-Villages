import React, {useState} from "react";
import {UserMenuItems} from './UserMenuItems';
import { Link } from 'react-router-dom';
import './ownerDropdown.css'

function UserDropdown()  {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <>
          <ul
            onClick={handleClick}
            className= {click ? 'user-dropdown clicked' : 'user-dropdown'}>
            {UserMenuItems.map((item,index) => {
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

export default UserDropdown;




























