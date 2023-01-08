import React, {useState} from "react";
import {AdminMenuItems} from './AdminMenuItems';
import { Link } from 'react-router-dom';
import './ownerDropdown.css'

function AdminDropdown()  {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <>
          <ul
            onClick={handleClick}
            className= {click ? 'admin-dropdown clicked' : 'admin-dropdown'}>
            {AdminMenuItems.map((item,index) => {
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

export default AdminDropdown;




























