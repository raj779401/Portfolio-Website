export default function About(){
    return(
        <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="flex flex-col items-center justify-start p-5 md:p-10 w-full md:w-3/4 max-w-screen-lg">
                <h1 className="text-3xl md:text-5xl font-bold pb-4 md:pb-8 underline self-start">About Me</h1>
                <p className="text-base md:text-lg mt-4 md:mt-8 leading-relaxed md:leading-normal tracking-wide">
                    Certainly! Here's a paragraph describing me as a full stack developer:
                    <br/>
                    <br/>
                    As a full stack developer, I possess a comprehensive skill set that allows me to proficiently navigate both the front-end and back-end aspects of web development. From crafting engaging user interfaces using modern technologies like React.js and Vue.js to architecting robust server-side applications with frameworks such as Node.js and Django, I thrive in building dynamic and scalable web solutions. With a keen eye for design and a strong foundation in database management, I am adept at creating seamless user experiences and optimizing application performance. My passion for continuous learning drives me to stay updated with the latest trends and best practices in the ever-evolving landscape of full stack development, enabling me to deliver innovative and impactful solutions to meet diverse business needs.
                </p>
            </div>
        </div>
    )
}
