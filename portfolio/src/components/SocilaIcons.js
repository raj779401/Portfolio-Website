import { FaGithub} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


export default function SocialIcon(){

    const links = [
        {
           id :'1',
           child : (
               <>
                Linkedin  <FaLinkedin size={25}/>
               </>
           ),
           href : 'https://www.linkedin.com/in/raj-singh-ab3272228/',
           style : 'rounded-tr-md' 
        },
        {
            id :'2',
            child : (
                <>
                 Github <FaGithub size={25}/>
                </>
            ),
            href : 'https://github.com/raj779401',
         },
         {
            id :'3',
            child : (
                <>
                 Mail <HiOutlineMailOpen size={25}/>
                </>
            ),
            href : 'mailto:raj779401@gmail.com',
             
         },
         {
            id :'4',
            child : (
                <>
                 Resume <BsFillPersonLinesFill size={25}/>
                </>
            ),
            href : '/resume.pdf',
            style : 'rounded-br-md',
            download : true
             
         },

    ];



    return(
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({id , child , style ,href ,download})=>(
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " "+ style}>
                    <a href={href} className="flex items-center justify-between w-full text-white " download={download} target="_blank" rel="noreferrer">
                        {child}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    );
}