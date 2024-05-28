import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import {  BiSolidContact } from "react-icons/bi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { PiGenderIntersexLight } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";
import { makeApiRequest } from "../../api/function";
import { API_URLS } from "../../api/auth";
import { hideLoader, showLoader } from "../../components/loader";
const UserDetails = () => {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState([])
  const id = useParams()
  // console.log(id)
  const fetchData = async () => {
    showLoader()
    try {
      const response = await makeApiRequest("GET", `${API_URLS.VIEW_USER_BY_ID}${id.id}`);
      console.log(response);
      hideLoader()
      setUserDetails(response)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="flex flex-col justify-center items-center  py-5 mb-5">
      <div className=" md:px-20 md:py-5 p-3 border-2 border-slate-400 rounded-lg bg-gray-100 shadow-xl">
        <h1 className="text-2xl font-semibold border-b-2 border-b-orange-500 w-fit">
          Profile
        </h1>
        <div className="flex md:flex-row flex-col gap-x-48 items-center ">
          <div className="flex justify-center items-center gap-x-2 py-8">
            <img src="/user.png" alt="" className="rounded-full md:w-32 w-28" />
            <h2 className="text-2xl my-5 font-semibold text-blue-500 w-[150px]">
              {userDetails.name}
            </h2>
          </div>
          <div className="mt-7 flex flex-row">
            <button className="flex gap-2 bg-slate-400 py-2 px-4 rounded-md text-white font-semibold hover:bg-slate-500 hover:duration-500 hover:scale-105 shadow-xl hover:shadow-2xl" onClick={()=>navigate(`/users/update/${id.id}`)}>
              <FaRegEdit size={22} />
              Edit Profile
            </button>
          </div>
        </div>
        <div className=" max-w-7xl flex md:flex-row flex-col md:gap-40 gap-16">
          <div className="w-80">
            <hr className="border-2 border-slate-500" />
            <div className="flex flex-col gap-y-4 my-5">
              <h3 className="font-bold text-lg">Document Info</h3>
              <div className="flex flex-col gap-8">
                <div className="flex flex-row justify-between items-center gap-5">
                  <div>
                    <img
                      src="/aadharLogo.png"
                      alt=""
                      className="shadow-xl rounded-xl w-20"
                    />
                  </div>
                  <div>
                    <button className="border-2 border-blue-400 rounded-tl-[40%] bg-white-400 text-cyan-700 drop-shadow-xl hover:drop-shadow-2xl hover:duration-75 hover:scale-90 px-4 py-1 hover:bg-blue-400 hover:text-white">
                      <a href={userDetails.aadharCard} target="_blank">Show</a>
                    </button>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center gap-5">
                  <div>
                    <img
                      src="/panLogo.png"
                      alt=""
                      className="shadow-xl rounded-xl w-20"
                    />
                  </div>
                  <div>
                    <button className="border-2 border-blue-400 rounded-tl-[40%] bg-white-400 text-cyan-700 drop-shadow-xl hover:drop-shadow-2xl hover:duration-75 hover:scale-90 px-4 py-1 hover:bg-blue-400 hover:text-white">
                    <a href={userDetails.panCard} target="_blank">Show</a>
                    </button>
                  </div>
                </div>
                <hr className="border-2 border-slate-500"/>
                <div className="flex  gap-1">
                    <BiSolidContact size={22}/>
                    <span className="font-medium text-sm">
                    Address:
                    </span>
                    <p className="text-sm">{userDetails.address}</p>
                </div>
              </div>
            </div>
          </div>
          

            <div className="w-80">
            <hr className="border-2 border-slate-500"/>
               
            <div className="flex flex-col gap-y-4 my-5">
              <h3 className="font-bold text-lg">Contact Info</h3>
              <div className="flex gap-2 items-center text-sm">
                <MdOutlinePhoneInTalk/>
                <span className="font-semibold">Mobile no :</span>
                <span>{userDetails.mobile}</span>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <CiMail/>
                <span className="font-semibold">Email :</span>
                <span>{userDetails.email}</span>
              </div>
              </div> 
              <hr className="border-2 border-slate-500"/>
              <div className="flex flex-col gap-y-4 my-5">
              <h3 className="font-bold text-lg">Basic Info</h3>
              <div className="flex gap-2 items-center text-sm">
                <PiGenderIntersexLight size={24}/>
                <span className="font-semibold">Gender :</span>
                <span>{userDetails.gender}</span>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <SlCalender/>
                <span className="font-semibold">Date of birth :</span>
                <span >{userDetails.dateOfBirth}</span>
              </div>
              </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
