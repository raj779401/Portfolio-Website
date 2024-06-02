import { MdKeyboardArrowRight } from "react-icons/md";
import heroImage from '../assets/heroImage.jpg'; // Import the image file

export default function Home(){
    return(
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-900 flex justify-center items-center">
            <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
                <div className="flex flex-col justify-center  h-full ">
                    <h1 className="text-4xl sm:text-7xl font-bold text-white px-2">I'm a Full Stack Developer</h1>
                    <p className=" text-gray-500 px-auto py-4 max-w-md ">
                        Many desktop publishing packages 
                        and web page editors now use Lorem
                        Ipsum as their default model text,
                        and a search for 'lorem ipsum' will 
                        uncover many web sites still in their 
                        infancy. Various versions have evolved 
                        over the years, sometimes by accident,
                        sometimes on purpose (injected humour 
                        and the like).
                    </p>
                    <div name="button div">
                    <button className="group w-fit text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">Portfolio <span className="group-hover:rotate-90 "><MdKeyboardArrowRight size={25} /></span></button>  
                    </div>
                </div>
                <div className="max-w-md">
                <img className="p-10 rounded-full mx-auto md:w-full" src={heroImage} alt="Raj Singh"/>
                </div>
            </div>
            {/* Display the image */}
            
        </div>
    );
}
