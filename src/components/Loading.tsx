import loader from "../assets/images/loader.svg"

export default function Loader(){
    return(
        <div className="flex justify-center w-full">
            <img src={loader} alt="loader" width={24} height={24}/>
        </div>
    )
}