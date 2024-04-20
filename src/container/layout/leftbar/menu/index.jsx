import React, { useState } from 'react';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiCubeTransparentThin } from "react-icons/pi";
import { MdOutlineCategory } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const MenuSideBar = () => {
    const [selected, setSelected] = useState("")
    
const menuDashboard = [
    {
    title:"Dashboard",
    icon: <MdOutlineSpaceDashboard size={18}/>,
    toLink : "/dashboard",
},
]
    const menuForSideBar = [
        
        {
            title:"User list",
            icon: <PiCubeTransparentThin size={18}/>,
            toLink : "/users",
        },
        {
            title:"Card List",
            icon: <MdOutlineCategory size={18}/>,
            toLink : "/cards",
        },
        {
            title:"vendor list",
            icon: <IoPersonOutline size={18}/>,
            toLink : "/vendors",
        },
        {
            title:"Package",
            icon: <CiShoppingCart size={18}/>,
            toLink : "/package",
        },
        {
            title:"Product",
            icon: <FaRegAddressCard size={18}/>,
            toLink : "/products",
        },
    ];



    return (
        <div>
            <ul>
            <p className='text-custom-h6 text-mixed-600 p-4'>Menu</p>
                {menuDashboard.map((data, index)=>
                <li key={index}>
                    <NavLink to={data.toLink} className="flex p-4 items-center gap-4">
                    {data.icon}
                        
                        {data.title}
                    </NavLink>
                </li>)}
                <p className='text-custom-h6 text-mixed-600 p-4'>Components</p>
                {menuForSideBar.map((data, index) => (
                    <li key={index} >
                        <NavLink to={data.toLink} className="flex p-4 items-center gap-4 text-custom-h6 font-medium" >
                        {data.icon}
                        
                        {data.title} 
                        </NavLink>
                    </li>
                ))}
            </ul>
          
            
           
        </div>
    );
};

export default MenuSideBar;
