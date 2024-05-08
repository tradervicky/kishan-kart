import React, { useState } from "react";
import { FiPrinter } from "react-icons/fi";
const Invioce = () => {
  // const [details, setDetails] = useState({
  //   address: "Chandni chowk",
  //   block: "PatnaSadar",
  //   city: "Patna",
  //   country: "India",
  //   dob: "1991-07-25",
  //   email: "santosh@gmail.com",
  //   fullName: "Santosh Jha",
  //   gender: "Male",
  //   isBlocked: false,
  //   isDeleted: false,
  //   isEmailVerified: false,
  //   isVerified: false,
  //   mobile: "8745826578",
  //   password: "Vicky123",
  //   pincode: "987548",
  //   role: "USER",
  //   state: "Bihar",
  //   url_aadhar:"",
  //   url_pan_card:"",
  // });
  return (
    <div className="p-4 bg-white  border-blue-700 rounded-lg m-4 mx-6">
        <div>
            <button className="bg-slate-700 px-2 py-1 flex flex-row items-center gap-x-3 font-semibold text-white rounded-md mx-10 mt-5">

            <FiPrinter size={36}/>
            Print
            </button>
        </div>
        <div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="uppercase text-custom-h2 font-semibold text-primary-300">
            Invoice
          </h2>
        </div>
        <div>
          <img src="/logo.png" alt="" className="w-[200px]" />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-orange-400 text-xl">Krishi Yojna Pvt Ltd</h3>
        <p className="w-60 text-sm">
        J46H+43H, Vidyut Bhawan - II, Jawaharlal Nehru Marg, Patna, Bihar 800001
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 my-10">
        <div className="w-[200px]">
          <h1 className="font-semibold text-blue-400 text-xl">
            BILLING ADDRESS
          </h1>
          <h2 className="font-semibold">Bahadur Singh</h2>
          <h2>7845896542</h2>
          <h2>bahadur@gmail.com</h2>
          <p>Patna, Patna, Bihar</p>
        </div>
        <div className="w-[200px]">
          <h1 className="font-semibold text-blue-400 text-xl">
            BILLING ADDRESS
          </h1>
          <h2 className="font-semibold">Bahadur Singh</h2>
          <h2>7845896542</h2>
          <h2>bahadur@gmail.com</h2>
          <p>Patna, Patna, Bihar, India</p>
        </div>
        <div className="grid grid-cols-2 w-[320px] pr-16">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-sm">INVOICE NO</h1>
            <h1 className="text-sm">INVOICE DATE</h1>
            <h1 className="text-sm">GST</h1>
            <h1 className="text-sm">ORDER NO</h1>
            <h1 className="text-sm">ORDER DATE</h1>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-sm">IN20237216565872</h1>
            <h1 className="text-sm">2023/07/21 12:17:49</h1>
            <h1 className="text-sm">10AA5454JK645</h1>
            <h1 className="text-sm"> OR20237216565872</h1>
            <h1 className="text-sm">2023/07/21 12:17:49</h1>
          </div>
        </div>
      </div>
      <div>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                S.NO
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PRODUCT
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PRICE
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                QTY
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                GST
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DISCOUNT
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">1</td>
              <td class="px-6 py-4 whitespace-nowrap">Organic Pest Repellent</td>
              <td class="px-6 py-4 whitespace-nowrap">182</td>
              <td class="px-6 py-4 whitespace-nowrap">1</td>
              <td class="px-6 py-4 whitespace-nowrap">N/A</td>
              <td class="px-6 py-4 whitespace-nowrap">0</td>
              <td class="px-6 py-4 whitespace-nowrap">182</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-end mr-12 my-8 text-xl">
        <h1 className="font-semibold">Total amount</h1>
        <p>182</p>
      </div>
      </div>
    </div>
  );
};

export default Invioce;
