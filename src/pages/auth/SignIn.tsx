import React,{ useState } from "react"
import { Link } from "react-router-dom"

export default function SignIn() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })

    // on form submission
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(userInfo)
    }

    return(
        <div className="max-w-md flex flex-col px-4 py-6 rounded-lg bg-[#010001] text-zinc-200">
            {/* logo */}
            <Link to="/" className="text-center text-2xl font-black mb-10 text-[#673be7] uppercase">Neighborly</Link>

            {/* heading */}
            <div className=" mb-3">
                <h1 className="font-black text-2xl text-center">Login to your Account</h1>
                <p className="text-center text-sm mt-2 text-[#673be7]">Welcome back! Please enter your details</p>
            </div>

            {/* signin form */}
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="email" className="font-bold mb-1">Email</label>
                <input type="email" id="email" className="focus:outline-none p-1.5 w-full bg-[#201f23] rounded-md" onChange={(e)=>setUserInfo({...userInfo,[e.target.id]:e.target.value})}/>

                <label htmlFor="password" className="font-bold mt-4 mb-1">Password</label>
                <input type="password" id="password" className="focus:outline-none p-1.5 w-full bg-[#201f23] rounded-md " onChange={(e)=>setUserInfo({...userInfo,[e.target.id]:e.target.value})}/>

                <button type="submit" className="bg-[#673be7] text-white rounded-md p-2 mt-4 font-bold text-sm hover:bg-violet-800 hover:text-zinc-300">Sign in</button>
            </form>

            <div className="flex justify-center mt-6">
                Dont have account?
                <Link to="/signup" className="text-[#673be7] ml-0.5">Sign up</Link>
            </div>
        </div>
    )
}
