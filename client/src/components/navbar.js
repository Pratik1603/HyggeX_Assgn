import react from "react";
import img from "../images/logohugg.png";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className=" h-[10%] relative  border-black flex ">
            <div className="w-[40%] md:w-[20%]  h-[80%] my-auto text-center ">
                <img src={img} className="w-full h-full" />
            </div>
            <div className="md:hidden absolute right-4 top-4" onClick={toggleMenu}>
                <MenuIcon />
            </div>
            <div className="hidden w-[80%] h-[80%] my-auto md:flex justify-end py-1">
                <div className=" h-full w-[60%] flex justify-evenly">
                    <div className="py-1 text-[18px] text-[#3A3740]">
                        Home
                    </div>
                    <div className="py-1 text-[18px] text-[#3A3740]">
                        Flashcard
                    </div>
                    <div className="py-1 text-[18px] text-[#3A3740]">
                        Contact
                    </div>
                    <div className="py-1 text-[18px] text-[#3A3740]">
                        FAQ
                    </div>

                    <div className="cursor-pointer hover:scale-105 rounded-[32px] bg-gradient-to-r h-[80%] w-[20%] text-center py-1 text-white from-[#06286E] to-[#164EC0]">
                        Login
                    </div>

                </div>
            </div>
            <div className={`${showMenu ? 'flex flex-col' : 'hidden'} absolute right-2 top-10 border-2  bg-gradient-to-r w-28 opacity-95 text-center py-1 text-white from-[#06286E] to-[#164EC0]`}>
                <a href="#home">Home</a>
                <a href="#about">Flashcard</a>
                <a href="#services">Contact</a>
                <a href="#contact">FAQ</a>
                <a href="#contact">Login</a>
            </div>
        </div>
    )
}
export default Navbar;