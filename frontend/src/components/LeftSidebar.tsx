import { leftSidebarOptions } from "../constants/dashboardConstant"

const LeftSidebar = () => {
  return (
    <div className='bg-blue-500 w-[12%] h-screen space-y-20 text-white  py-8 '>
       <div className="px-2 h-full flex flex-col items-center justify-between">
         <h3 className="text-2xl font-bold">AppName 🏢</h3>

        <ul className="text-md w-full space-y-2">
           {leftSidebarOptions.map(opt => (
             <li key={opt.id} className="hover:bg-black/10 p-2 rounded-3xl cursor-pointer">
                {opt.label}
            </li>
           ))}
        </ul>

        <button
        className="bg-red-500 w-full  py-1 rounded-full px-6 cursor-pointer hover:bg-red-600 transition-colors duration-300">Logout</button>
       </div>
    </div>
  )
}

export default LeftSidebar