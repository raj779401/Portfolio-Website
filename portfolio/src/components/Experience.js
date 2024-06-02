
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
// import graphql from '../assets/graphql.png';
import github from '../assets/github.png';
import nextjs from '../assets/nextjs.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';
import reactImage from '../assets/react.png';

export default function Experience(){

    const links =[
        {
            id:'1',
            src : html,
            text : 'HTML',
            style : 'shadow-orange-500'
        },
        {
            id:'2',
            src : css,
            text : 'CSS',
            style : 'shadow-blue-500'
        },
        {
            id:'3',
            src : javascript,
            text : 'Javascript',
            style : 'shadow-yellow-500'
        },
        {
            id:'4',
            src : nextjs,
            text : 'NextJS',
            style : 'shadow-red-500'
        },
        {
            id:'5',
            src : github,
            text : 'Github',
            style : 'shadow-green-500'
        },
        
        {
            id:'7',
            src : tailwind,
            text : 'Tailwind',
            style : 'shadow-sky-500'
        },
        {
            id:'8',
            src : reactImage,
            text : 'React',
            style : 'shadow-blue-600'
        },
        {
            id:'9',
            src : node,
            text : 'Node',
            style : 'shadow-green-600'
        }
    ]




    return(
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold underline p-2 inline">Experience</p>
                    <p className="py-6">These are the technologies I have worked with.</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {links.map(({id,src,text,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} className="w-20 mx-auto  " />
                        <p className="mt-4">{text}</p>
                    </div>

                    ))}
                </div>
            </div>
        </div>
    );
}