import { Outlet } from 'react-router-dom'
import authbg from "../../assets/images/authbg.webp"

export default function AuthLayout() {
  return (
    <div className="w-full h-fit px-2 relative bg-contain bg-center z-20 py-40" style={{backgroundImage:`url(${authbg})`}}>
          <div className='absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#673BE7] to-transparent -z-10'/>
          <div className='absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-black to-transparent -z-10'/>
          <div className='mx-auto max-w-md'>
            <Outlet/>
          </div>
    </div>
  )
}
