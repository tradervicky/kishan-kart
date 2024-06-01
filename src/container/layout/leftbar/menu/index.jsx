import React, { useEffect, useState } from 'react';
import { MdOutlineSpaceDashboard, MdOutlineAddShoppingCart } from "react-icons/md";
import { FaUsers, FaRegAddressCard } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useLocation, useNavigate } from 'react-router-dom';

const MenuSideBar = ({ lang }) => {
  const navigate = useNavigate();
  // const [activeItem, setActiveItem] = useState("/dashboard");
  const location = useLocation();

  const [activeItem, setActiveItem] = useState(location.pathname);

  // Update activeItem when the location changes
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);
  const menuDashboard = [
    {
      title: "Dashboard",
      titleHindi: "डैशबोर्ड",
      icon: <MdOutlineSpaceDashboard size={18} />,
      toLink: "/dashboard",
    },
  ];

  const menuForSideBar = [
    {
      title: "User list",
      titleHindi: "यूजर सूची",
      icon: <FaUsers size={18} />,
      toLink: "/users",
    },
    {
      title: "Card List",
      titleHindi: "कार्ड सूची",
      icon: <FaRegAddressCard size={18} />,
      toLink: "/cards",
    },
    {
      title: "Vendor list",
      titleHindi: "विक्रेता सूची",
      icon: <CiShop size={18} />,
      toLink: "/vendors",
    },
    {
      title: "Package",
      titleHindi: "पैकेज",
      icon: <FaRegAddressCard size={18} />,
      toLink: "/package",
    },
    {
      title: "Product",
      titleHindi: "उत्पाद",
      icon: <LiaShoppingBagSolid size={18} />,
      toLink: "/products",
    },
    {
      title: "Add Product",
      titleHindi: "उत्पाद जोड़ें",
      icon: <MdOutlineAddShoppingCart size={18} />,
      toLink: "/add-products",
    },
  ];

  const handleNavigation = (toLink) => {
    // setActiveItem(toLink);
    navigate(toLink);
  };

  return (
    <div>
      <ul>
        <p className='text-custom-h6 text-mixed-600 p-2'>Menu</p>
        {menuDashboard.map((data, index) => (
          <li key={index}>
            <button
              onClick={() => handleNavigation(data.toLink)}
              className={`flex p-4 items-center gap-4 w-full text-left ${activeItem === data.toLink ? 'bg-dark-400' : ''}`}
            >
              {data.icon}
              {lang ? data.title : data.titleHindi}
            </button>
          </li>
        ))}
        <p className='text-custom-h6 text-mixed-600 p-2'>Components</p>
        {menuForSideBar.map((data, index) => (
          <li key={index}>
            <button
              onClick={() => handleNavigation(data.toLink)}
              className={`flex p-4 items-center gap-4 w-full text-left text-custom-h6 font-medium ${activeItem === data.toLink ? 'bg-dark-400' : ''}`}
            >
              {data.icon}
              {lang ? data.title : data.titleHindi}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSideBar;
