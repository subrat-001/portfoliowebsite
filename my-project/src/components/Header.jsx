import { CiMenuBurger } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import { useEffect, useState } from "react";

const Header = () => {
    const [itemsDisplay, setItemsDisplay] = useState(false);

    const closeFunction = () => {
        setItemsDisplay(false);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setItemsDisplay(false); // Close the menu after clicking on a section
        }
    };

    return (
        <div className="fixed min-w-screen max-w-screen">
            {itemsDisplay ? (
                <div className="flex flex-row text-center h-8 my-auto w-screen min-w-screen max-w-screen bg-orange-400 text-black justify-between">
                    <IoCloseCircle
                        className="text-3xl self-start"
                        onClick={closeFunction}
                    />
                    <div className="flex flex-row justify-end">
                        <a
                            className="px-2 text-xl font-serif"
                            onClick={() => scrollToSection("aboutMe")}
                        >
                            About Me
                        </a>
                        
                        <a
                            className="px-2 text-xl font-serif"
                            onClick={() => scrollToSection("projects")}
                        >
                            Projects
                        </a>
 
                        <a
                            className="px-2 mr-6 pr-8 text-xl font-serif"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col min-w-12 max-w-12 bg-transparent rounded-full bg-orange-400 border-2 border-black">
                    <CiMenuBurger
                        className="mx-auto text-3xl text-black"
                        onClick={() => setItemsDisplay(true)}
                    />
                </div>
            )}
        </div>
    );
};

export default Header;
