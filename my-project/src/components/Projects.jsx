
import { useEffect, useState } from "react";
const Projects = () => {


    return (
        <div id="projects" className=" flex text-black flex-col justify-evenly max-w-screen min-w-screen min-h-screen max-h-screen bg-orange-400">

            <div className="w-100 text-center" >
                <h1 className=" text-8xl font-bold px-4 my-auto mx-auto font-serif">Projects</h1>
            </div>
            <div className=" w-100">
                <div className="flex flex-row justify-around w-100">


                    <div className=" my-4 mx-4 grid grid-rows-4 justify-center w-1/4">
                        <div className=" row-span-3">
                            <img className=" w-full h-auto max-h-48" src="https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png" alt='football' />
                        </div>
                        <div className=" row-span-1">
                            <a href="https://github.com/subrat-001/recomendation_developing"><h3 className=" text-center  font-semibold text-l">Player Recomendation System</h3></a>
                        </div>
                    </div>

                    <div className=" my-4 mx-4  grid grid-rows-4 justify-center w-1/4">
                        <div className=" row-span-3">
                            <img className="w-full h-auto max-h-56" src="https://cdn.pixabay.com/photo/2014/03/24/17/15/cricket-ball-295206_1280.png" alt="Cricket Data Analysis" />
                        </div>
                        <div className=" row-span-1">
                            <a href="https://github.com/subrat-001/wbbl_analysis"><h3 className=" text-center  font-semibold text-l">Cricket Data Analysis</h3></a>
                        </div>
                    </div>

                    <div className=" my-4 mx-4 grid grid-rows-4 justify-center w-1/4">
                        <div className=" row-span-3">
                            <img className="w-full h-auto max-h-56" src="https://cdn.pixabay.com/photo/2017/01/31/19/57/cartoon-2026834_1280.png" alt="Blockchain Based Supplychain Mangaement" />
                        </div>
                        <div className=" row-span-1">
                            <a href="https://github.com/subrat-001/projectmain"><h3 className=" text-center  font-semibold text-l">Blockchain Based Supplychain Mangaement</h3></a>
                        </div>
                    </div>


                </div>
            </div>
            <div>
                <div className=" w-100">
                    <div className="flex flex-row justify-around w-100">


                        <div className=" my-4 mx-4 grid grid-rows-4 justify-center w-1/4">
                            <div className=" row-span-3">
                                <img className="w-full h-auto max-h-56" src="https://cdn.pixabay.com/photo/2016/10/27/09/35/book-1773756_1280.png" alt="LMS" />
                            </div>
                            <div className=" row-span-1">
                                <a href="https://github.com/subrat-001/LMS"><h3 className=" text-center  font-semibold text-l">Library Management System</h3></a>
                            </div>
                        </div>

                        <div className=" my-4 mx-4 grid grid-row-4 justify-center w-1/4">
                            <div className=" row-span-3">
                                <img className="w-full h-auto max-h-56" src="https://cdn.pixabay.com/photo/2017/10/09/21/40/boat-2835005_1280.png" alt="Dunga" />
                            </div>
                            <div className=" row-span-1">
                                <a href="https://github.com/subrat-001/boats"><h3 className=" text-center  font-semibold text-l">Dunga-Boat Game</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
};


export default Projects;