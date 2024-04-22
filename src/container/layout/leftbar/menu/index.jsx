import React, { useState } from 'react';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FaUsers, FaRegAddressCard} from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const MenuSideBar = ({lang}) => {
    const [selected, setSelected] = useState("")
    
const menuDashboard = [
    {
    title:"Dashboard",
    titleHindi:"डैशबोर्ड",
    icon: <MdOutlineSpaceDashboard size={18}/>,
    toLink : "/dashboard",
},
]
    const menuForSideBar = [
        
        {
            title:"User list",
            titleHindi:"यूजर सूची",
            icon: <FaUsers size={18}/>,
            toLink : "/users",
        },
        {
            title:"Card List",
            titleHindi:"कार्ड सूची",
            icon: <FaRegAddressCard size={18}/>,
            toLink : "/cards",
        },
        
        {
            title:"vendor list",
            titleHindi:"विक्रेता सूची",
            icon: <CiShop size={18}/>,
            toLink : "/vendors",
        },
        {
            title:"Package",
            titleHindi:"पैकेज",
            icon: <FaRegAddressCard size={18}/>,
            toLink : "/package",
        },
        {
            title:"Product",
            titleHindi:"उत्पाद",
            icon: <LiaShoppingBagSolid size={18}/>,
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
                    {lang ? data.title : data.titleHindi} 
                    </NavLink>
                </li>)}
                <p className='text-custom-h6 text-mixed-600 p-4'>Components</p>
                {menuForSideBar.map((data, index) => (
                    <li key={index} >
                        <NavLink to={data.toLink} className="flex p-4 items-center gap-4 text-custom-h6 font-medium" >
                        {data.icon}
                        {lang ? data.title : data.titleHindi} 
                        </NavLink>
                    </li>
                ))}
            </ul>
          
            
           
        </div>
    );
};

export default MenuSideBar;
