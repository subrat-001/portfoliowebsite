import React from "react";

const Contactme = () => {
    return (
        <div id="contact" className="flex text-orange-400 font-serif flex-col justify-evenly max-w-screen min-w-screen min-h-screen max-h-screen bg-black">

            <div className="w-100 text-center">
                <h3 className="text-8xl font-bold px-4 my-auto mx-auto font-serif">Contact Me</h3>
            </div>
            
            <div className="w-100 text-center">
                    <h3 className=" text-3xl font-bold my-auto py-10 mx-auto font-serif">Socials</h3>

                    <div className="w-100 flex flex-row py-auto my-auto justify-evenly">
                    <div className="flex flex-col justify-evenly">  
                        <a className='self-center py-2' href="https://www.linkedin.com/in/subrat-sharma-23b375242/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.pixabay.com/photo/2017/07/04/12/16/social-2470870_1280.png" className="max-h-20 rounded-full"/></a>
                        <h1 className="text-xl">LinkedIn</h1>   
                    </div>
                    <div className="flex flex-col justify-evenly">
                        <a className='self-center py-2' href="https://twitter.com/desubratoficial" target="_blank" rel="noopener noreferrer"><img src="https://cdn.pixabay.com/photo/2012/04/14/12/42/letter-33761_1280.png" className="max-h-20 rounded-full" /></a>
                        <h1 className="text-xl">X</h1>
                    </div>
                    <div className="flex flex-col justify-evenly">
                        <a className='self-center py-2' href="https://www.instagram.com/_desubrat_/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.pixabay.com/photo/2022/04/01/05/40/app-7104075_1280.png" className="max-h-20 rounded-full" /></a>
                        <h1 className="text-xl">Instagram</h1>
                    </div>

                    <div className="flex flex-col justify-evenly">
                        <a className='self-center py-2' href="https://github.com/subrat-001" target="_blank" rel="noopener noreferrer"><img src="https://cdn.pixabay.com/photo/2013/07/12/19/25/github-154769_1280.png" className="max-h-20 rounded-full" /></a>
                        <h1 className="text-xl">GitHub</h1>
                    </div>

               </div>
                </div>
            <div className="w-100 text-center">
                <h3 className=" text-3xl font-bold my-auto py-10 mx-auto font-serif">Contacts</h3>

                <div className="w-100 flex flex-row py-auto my-auto justify-evenly">
                    <div className="flex flex-col justify-evenly">
                        <a className='self-center py-2' href="tel:+9779803940587" target="_blank" rel="noopener noreferrer"><img src="https://cdn.pixabay.com/photo/2017/01/31/14/36/blue-2024619_1280.png" className="max-h-20 rounded-full" /></a>
                        <h1 className="text-xl">Phone</h1>
                        <h1 className="text-sm">+9779803940587</h1>
                    </div>
                    <div className="flex flex-col justify-evenly">
                        <a className=" self-center py-2" href="https://mail.google.com/mail/?view=cm&fs=1&to=subratsharma980@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://cdn.pixabay.com/photo/2019/10/19/17/24/gmail-4561841_1280.png" className="max-h-20 rounded-full" /></a>
                        <h1 className="text-xl">Mail</h1>
                        <h1 className="text-m">subratsharma980@gmail.com</h1>
                    </div>
                </div>
            </div>

                </div>
         

    )
};

export default Contactme;
