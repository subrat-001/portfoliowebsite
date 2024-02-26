import { useEffect, useState } from "react";

const Projects = () => {
    return (
        <div id="projects" className="flex text-black flex-col justify-evenly max-w-screen min-w-screen min-h-screen max-h-screen bg-orange-400">
            <div className="w-100 text-center">
                <h1 className="text-8xl font-bold px-4 my-auto mx-auto font-serif">Projects</h1>
            </div>
            <div className="w-100">
                <div className="flex flex-row justify-around w-100">
                    <div className="my-4 mx-4 grid grid-rows-4 justify-center w-1/4">
                        <div className="row-span-3">
                            <a href="https://github.com/subrat-001/recomendation_developing" target="_blank">
                                <img className="w-auto mx-auto my-auto h-auto max-h-48" src="https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png" alt='football' />
                            </a>
                        </div>
                        <div className="row-span-1">
                            <h3 className="text-center font-semibold text-xl">Player Recommendation System</h3>
                        </div>
                    </div>


                    <div className="my-4 mx-4 grid grid-row-4 justify-center w-1/4">
                        <div className="row-span-3">
                            <a href="https://github.com/subrat-001/boats" target="_blank">
                                <img className="w-auto mx-auto my-auto h-auto max-h-48 min-h-48" src="https://cdn.pixabay.com/photo/2020/04/11/06/08/ship-5028940_1280.png" alt="Dunga" />
                            </a>
                        </div>
                        <div className="row-span-1">
                            <h3 className="text-center font-semibold text-xl">Dunga-Boat Game</h3>
                        </div>
                    </div>

                    <div className="my-4 mx-4 grid grid-rows-4 justify-center w-1/4">
                        <div className="row-span-3">
                            <a href="https://github.com/subrat-001/wbbl_analysis" target="_blank">
                                <img className="w-auto mx-auto my-auto h-auto max-h-48 min-h-48" src="https://cdn.pixabay.com/photo/2014/03/24/17/15/cricket-ball-295206_1280.png" alt="Cricket Data Analysis" />
                            </a>
                        </div>
                        <div className="row-span-1">
                            <h3 className="text-center font-semibold text-xl">Cricket Data Analysis</h3>
                        </div>
                    </div>


                </div>
            </div>

            <div>
                <div className="w-100">
                    <div className="flex flex-row justify-around w-100">
                        <div className="my-4 mx-4 grid grid-rows-4 justify-center w-1/4">
                            <div className="row-span-3">
                                <a href="https://github.com/subrat-001/LMS" target="_blank">
                                    <img className="w-auto mx-auto my-auto h-auto max-h-48 min-h-48" src="https://cdn.pixabay.com/photo/2012/04/13/15/04/library-32746_1280.png" alt="LMS" />
                                </a>
                            </div>
                            <div className="row-span-1">
                                <h3 className="text-center font-semibold text-xl">Library Management System</h3>
                            </div>
                        </div>

                        <div className="my-4 mx-4 grid grid-rows-4 justify-center w-1/4">
                            <div className="row-span-3">
                                <a href="https://github.com/subrat-001/projectmain" target="_blank">
                                    <img className="w-auto mx-auto my-auto h-auto max-h-48 min-h-48" src="https://cdn.pixabay.com/photo/2017/01/31/19/57/cartoon-2026834_1280.png" alt="Blockchain Based Supplychain Management" />
                                </a>
                            </div>
                            <div className="row-span-1">
                                <h3 className="text-center font-semibold text-xl">Blockchain Based Supplychain Management</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
