import React, { useState } from "react";
import { useEffect } from "react";
import { CiViewList } from "react-icons/ci";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { API_URLS } from "../../../api/auth";
import { makeApiRequest } from "../../../api/function";
import UserButton from "../../../components/userButton";

const InvoiceTable = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const {id} = useParams()
  const [useerData, setUserData] = useState([])
  const fetchUserData = async ()=>{
    try {
      const response = await makeApiRequest("GET" ,`${API_URLS.VIEW_USER_BY_ID}${id}` )
      console.log(response)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    fetchUserData()
  },[])


  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="mt-4 bg-white shadow-md rounded-lg overflow-hidden ml-6 mr-2">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr className="text-left text-gray-700">
            <th className="py-2 px-4"></th>
            <th className="py-2 px-4">Purchased At</th>
            <th className="py-2 px-4">Invoice No.</th>
            <th className="py-2 px-4">Vendor Email</th>
            <th className="py-2 px-4">Total Amount</th>
            <th className="py-2 px-4">Invoice</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="py-2 px-4">
              <button onClick={toggleOpen}>
                {isOpen ? <FaAngleDown size={18} /> : <FaAngleRight size={18} />}
              </button>
            </td>
            <td className="py-2 px-4">25-05-2024</td>
            <td className="py-2 px-4">784596478524</td>
            <td className="py-2 px-4">vendoremail@test.in</td>
            <td className="py-2 px-4">25000/-</td>
            <td className="py-2 px-4">
            <UserButton onClick={()=>navigate('/users/invoice/1')} icon={<CiViewList size={20} />} title="Get Invoice" customStyle="text-[#6699CC]"/> 
            </td>
          </tr>
          {isOpen && (
            <tr className="bg-gray-50">
              <td colSpan="6" className="py-2 px-4">
                <div className="p-4">
                  <h3 className="font-semibold text-gray-700">
                    Purchased Products:
                  </h3>
                  <ul className="list-disc list-inside">
                    <li className="flex  py-4 gap-20">
                      <div>
                        <img src="" alt="img" className="w-32 aspect-square border"/>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-blue-500">Product Name</p>
                        <p>Unit Price <span>25000</span></p>
                        <p>Quantity : <span>X2</span></p>
                        <p className="font-semibold ">Total : <span>50000</span></p>
                      </div>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
