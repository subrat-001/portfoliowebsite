import { useEffect, useState } from "react";
const Aboutme = () => {

    return (
        <div id="aboutMe" className=" flex text-orange-400 font-serif flex-col justify-evenly max-w-screen min-w-screen min-h-screen max-h-screen bg-black">

                
    
            <div className="w-100 py-2 text-center">
                <h3 className=" text-8xl font-bold px-4 my-auto mx-auto font-serif py-2">About Me</h3>
                <img src="https://media.licdn.com/dms/image/D5603AQGtriF0shY6sQ/profile-displayphoto-shrink_800_800/0/1703308911847?e=1714608000&v=beta&t=0OwKqA54VwgmgJ8_ODl7F5iT5oWmNoJnmHYIVEYe19o" className=" max-h-72 rounded-full mx-auto py-2"/>
                <h3 className=" text-4xl font-bold my-auto mx-auto font-serif py-2">Subrat Sharma</h3>
                <a href="https://drive.google.com/file/d/15rGnvHfZ-QcXiZhrlIxrJCkzkPBGJWBC/view?usp=drive_link" target="_blank"> <h1 className="text-xl py-2">Resume</h1></a>
            </div>
            <div className="w-100 text-center"> 
            <h3 className=" text-3xl font-bold my-auto py-4 mx-auto font-serif">Education</h3>
            </div>
            <div className="w-100 text-center">
              
            <div className="w-100 flex flex-row py-auto my-auto justify-evenly">
            <h1 className="text-xl">Computer Engineering<br/>Thapathali Campus</h1>
                    <h1 className="text-xl">High School Science<br />Khwopa Collage</h1>
                    <h1 className="text-xl">Base Education<br />Vidhya Sagar School</h1>

       
                </div>
            </div>
            <div className="w-100 text-center">
          
                <h3 className=" text-3xl font-bold my-auto py-4 mx-auto font-serif">Hobbies</h3>

                <div className="w-100 flex flex-row py-4 my-auto justify-evenly">
            
                    <h1 className="text-xl">Sports</h1>
                    <h1 className="text-xl">Gaming</h1>
                    <h1 className="text-xl">Traveling</h1>


                </div>
            </div>


                <div className=" w-100 text-center">
                <h1 className="text-3xl font-bold">Explore my portfolio for insights into my projects and experiences</h1>
            </div>
        </div>
    )
};

export default Aboutme;