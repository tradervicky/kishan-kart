import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import {useParams} from 'react-router-dom'
const Topbar = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>
    <div className="bg-mixed-200  flex justify-between h-16 items-center px-6">
        <div className="flex items-center">
            <input type="text" placeholder="Search for product"  className="px-4 py-2 bg-mixed-300 
            rounded-l-xl outline-none text-white"/>
            <div className="text-white py-2 px-2 bg-mixed-300 rounded-r-xl">
            <IoIosSearch size={24} className="cursor-pointer"/>
            </div>

        </div>
        <div className="flex gap-4 items-center">
            <div className="text-white py-2 px-2">

           <IoPersonOutline size={24} className="cursor-pointer"/>
            </div>
           <p className="text-custom-h6 font-semibold text-white">Vicky The Admin</p> 
        </div>
    </div>
    <div className="bg-mixed-300  h-10 mx-6  flex items-center pl-6">
        <p className="text-white">Home &gt; User</p>
    </div>
    </div>
  )
}

export default Topbar