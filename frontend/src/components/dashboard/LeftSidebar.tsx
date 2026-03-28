import { Link, useLocation } from "react-router"
import { leftSidebarOptions } from "../../constants/dashboardConstant"

const LeftSidebar = () => {
  const currentUrlPath = useLocation().pathname;
  console.log(currentUrlPath)
  return (
    <div className='bg-blue-500 w-[14%]  h-screen space-y-20 text-white  py-8 fixed'>
       <div className="px-2 h-full flex flex-col text-center justify-between">
         <div className="space-y-20">
          <h3 className="text-2xl font-bold">AppName 🏢</h3>

        <ul className="text-md w-full space-y-6 flex flex-col">
           {leftSidebarOptions.map(opt => (
             <Link to={opt.path} key={opt.id} className={`hover:bg-black/10 p-2 rounded-3xl cursor-pointer ${currentUrlPath === opt.path && "bg-black/10"}`}>
                {opt.label}
            </Link>
           ))}
        </ul>
         </div>

        <button
        className="bg-red-500 w-full  py-1 rounded-full px-6 cursor-pointer hover:bg-red-600 transition-colors duration-300">Logout</button>
       </div>
    </div>
  )
}

export default LeftSidebar