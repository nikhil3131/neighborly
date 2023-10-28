import React,{ useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../../components/Loading"

export default function SignUp() {
    const [isLoading, setIsLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name: "",
        username: "",
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
                <h1 className="font-black text-2xl text-center">Create a new Account</h1>
                <p className="text-center text-sm mt-2 text-[#673be7]">To use Neighborly, Please enter your details</p>
            </div>

            {/* signin form */}
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="name" className="font-bold mb-1">Name</label>
                <input type="text" id="name" className="focus:outline-none p-1.5 w-full bg-[#201f23] rounded-md" onChange={(e)=>setUserInfo({...userInfo,[e.target.id]:e.target.value})}/>

                <label htmlFor="username" className="font-bold mb-1 mt-4">Username</label>
                <input type="text" id="username" className="focus:outline-none p-1.5 w-full bg-[#201f23] rounded-md" onChange={(e)=>setUserInfo({...userInfo,[e.target.id]:e.target.value})}/>

                <label htmlFor="email" className="font-bold mb-1 mt-4">Email</label>
                <input type="email" id="email" className="focus:outline-none p-1.5 w-full bg-[#201f23] rounded-md" onChange={(e)=>setUserInfo({...userInfo,[e.target.id]:e.target.value})}/>

                <label htmlFor="password" className="font-bold mt-4 mb-1">Password</label>
                <input type="password" id="password" className="focus:outline-none p-1.5 w-full bg-[#201f23] rounded-md " onChange={(e)=>setUserInfo({...userInfo,[e.target.id]:e.target.value})}/>

                <button type="submit" className="bg-[#673be7] text-white rounded-md p-2 mt-4 font-bold text-sm hover:bg-violet-800 hover:text-zinc-300">
                    {
                        isLoading ? <Loader/> : "Sign up"
                    }
                </button>
            </form>

            <div className="flex justify-center mt-6">
                Already have account?
                <Link to="/" className="text-[#673be7] ml-0.5">Sign in</Link>
            </div>
        </div>
    )
}
