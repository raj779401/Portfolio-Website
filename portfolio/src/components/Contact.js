

export default function Contact(){
    return(
        <div name="contact" className="w-full h-screen p-5 bg-gradient-to-b from-black to-gray-800 text-white">
            <div className="flex flex-col  max-w-screen-lg justify-center p-4 mx-auto h-full">
                <div className="b">
                    <p className="font-bold text-4xl underline">Conact Me</p>
                    <p className="py-6">Submit the form to get in touch with me.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <form action="https://getform.io/f/nbdozqxa"method="POST" className="flex flex-col w-full md:w-1/2 ">
                        <input type="text" name="name" placeholder="Name" className="bg-transparent p-2 border-2 rounded-md text-white focus:outline-none m-2" />
                        <input type="email" name="email" placeholder="Email" className="bg-transparent p-2 border-2 rounded-md text-white focus:outline-none m-2" />
                        <textarea placeholder="Message" name="message" rows="10" className="bg-transparent  p-2 border-2 rounded-md text-white focus:outline-none m-2" />
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
                    </form>
                </div>
            </div>
             
        </div>
    );
}