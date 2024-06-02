
import { FaBars , FaTimes} from "react-icons/fa";
import { useState } from "react";



export default function NavBar(){
    const links =[
        {
            id:1,
            link : 'Home'
        },
        {
            id:2,
            link : 'About'
        },
        {
            id:3,
            link : 'Portfolio'
        },
        {
            id:4,
            link : 'Experince'
        },
        {
            id:5,
            link : 'Contact'
        },
    ];
    
    const [nav , setNav] = useState();
    return(
        <div className="bg-black h-20 w-full px-4 text-white flex justify-between items-center fixed">
            <div className="m-1">
            <h1 className="text-5xl font-signature ml-2 font-bold ">Raj</h1>

            </div>
            <ul className=" hidden md:flex">
                {links.map(({link ,id})=>(
                    <li key={id} className="px-4 cursor-pointer font-medium hover:scale-105 duration-200 ">{link}</li>
                ))}
                  
            </ul>
            <div onClick={()=>setNav(!nav)} className="px-4 cursor-pointer text-gray-500 z-10 md:hidden">
            {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
            </div>
           {nav && ( <ul className="flex flex-col absolute justify-center items-center top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
                <li className="py-4 text-4xl cursor-pointer">Home</li>
                <li className="py-4 text-4xl cursor-pointer">Home</li>
                <li className="py-4 text-4xl cursor-pointer">Home</li>
                <li className="py-4 text-4xl cursor-pointer">Home</li>
                <li className="py-4 text-4xl cursor-pointer">Home</li> 
            </ul>)}

        </div>
    );
}