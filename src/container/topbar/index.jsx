import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
const Topbar = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);
  // console.log(user)
  // console.log(params)
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  console.log(pathnames)
  const handleFocus = ()=>{
    navigate('/products')
  }

  return (
    <div>
    <div className="bg-mixed-200  flex justify-between h-16 items-center px-6">
        <div className="flex items-center">
            <input type="text" placeholder="Search for product"  className="px-4 py-2 bg-mixed-300 
            rounded-l-xl outline-none text-white" onFocus={handleFocus} />
            <div className="text-white py-2 px-2 bg-mixed-300 rounded-r-xl">
            <IoIosSearch size={24} className="cursor-pointer"/>
            </div>

        </div>
        <div className="flex gap-4 items-center">
            <div className="text-white py-2 px-2">

           <IoPersonOutline size={24} className="cursor-pointer"/>
            </div>
           <p className="text-custom-h6 font-semibold text-white">{user && user?.user.name}</p> 
        </div>
    </div>
    <div className="bg-mixed-300  h-10 mx-6  flex items-center pl-6">
      <p className="text-white pr-2 cursor-pointer"> <Link className="pr-2 hover:text-primary-400" to={'/'}>Home </Link>&gt;</p>
      {pathnames && pathnames.map((data, index)=>
        (<p key={index} className={`text-white  ${!(pathnames.length === index+1) ? 'cursor-pointer pr-2' : ''}`}> {!(pathnames.length === index+1) ? <Link className="hover:text-primary-400" to={data} > {data} </Link>: data }
        <span className="cursor-default pl-2 pr-2"> {(pathnames.length === index+1) ? "" :">"}</span></p>))}
    </div>
    </div>
  )
}

export default Topbar