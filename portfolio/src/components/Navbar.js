import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-scroll';

export default function NavBar() {
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Portfolio'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Contact'
        },
    ];

    const [nav, setNav] = useState(false);

    return (
        <>
            <div className="bg-black h-20 w-full px-4 text-white flex justify-between items-center fixed z-10">
                <div className="m-1">
                    <h1 className="text-5xl font-signature ml-2 font-bold ">Raj</h1>
                </div>
                <ul className="hidden md:flex">
                    {links.map(({ link, id }) => (
                        <li key={id} className="px-4 cursor-pointer font-medium hover:scale-110 duration-200 ">
                            <Link to={link.toLowerCase()} smooth={true} duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
                <div onClick={() => setNav(!nav)} className="px-4 cursor-pointer text-gray-500 md:hidden">
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>
            {nav && (
                <div className="fixed top-20 left-0 w-full h-full bg-gradient-to-b from-black to-gray-500 z-10">
                    <ul className="flex flex-col justify-center items-center h-full">
                        {links.map(({ link, id }) => (
                            <li key={id} className="py-4 text-4xl cursor-pointer">
                                <Link to={link.toLowerCase()} smooth={true} duration={500} onClick={() => setNav(false)}>{link}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}
