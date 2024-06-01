import React from "react";
import PackageCard from "../../components/packageCard";
import InvoiceTable from "../getinvoice/invoiceTable";
import {gold,platinum,diamond} from '../../components/packageCard/packageData'

const Package = () => {
  console.log(gold, platinum,diamond)
  return (
    <div className=" my-6  mt-6 mx-6 ">
      <div className="flex flex-col justify-center my-4">
        <h3 className="text-custom-h4 font-semibold text-white text-center">
          The Right Plan For You
        </h3>
        <span className="text-custom-h6 text-white text-center">
          We have several plans get your dream card
        </span>
      </div>
      <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-4">
        <PackageCard data={gold} image={'/gold.png'}/>
        <PackageCard data={platinum} image={'/platinum.png'}/>
        <PackageCard data={diamond} image={'/diamond.png'}/>
      </div>
      <div className="mr-4">

    
      
      </div>
    </div>
  );
};

export default Package;
