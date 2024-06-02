import flutterProject from '../assets/flutter-project.jpg';
import htmlProject from '../assets/html-project.jpg';
import javascriptProject from '../assets/javascript-project.jpg';
import nextjsProject from '../assets/nextjs-project.jpg';
import nodeProject from '../assets/node-project.jpg';
import reactProject from '../assets/react-project.jpg';

export default function Portfolio(){

    const projectLinks =[
        {
            id:'1',
            src : reactProject
        },
        {
            id:'2',
            src : nodeProject
        },
        {
            id:'3',
            src : nextjsProject
        },
        {
            id:'4',
            src : htmlProject
        },
        {
            id:'',
            src : javascriptProject
        },
        {
            id:'1',
            src : flutterProject
        }
    ]


    return(
       <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 text-white w-full  md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-start w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold underline inline">Portfolio</p>
                <p className="py-6">Check out some of my projects here</p>
            </div>
            


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {projectLinks.map(({id,src})=>(

                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img className="rounded-md duration-200 hover:scale-105" src={src}/>
                <div className="flex justify-between items-center px-3">
                    <button className="py-3 duration-200 hover:scale-105 ">Demo</button>
                    <button className="py-3 duration-200 hover:scale-105">Demo</button>
                </div>
                </div>
                ))}
            </div>

        </div>
       </div>
    );
    }