import { FaLinkedin, FaFolder, FaFileAlt,FaHome, FaUniversity } from "react-icons/fa";
import logo from "../assets/simranLogo.svg";
import simranCV from "../assets/SimranHisariaCV.pdf"


const Navbar = () => {

    return (
        <nav className="flex item-center justify-between py-6">
            <div
            className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img 
                    src={logo}
                    className="mx-2" 
                    widt={50}
                    height={33}
                    alt="Logo"/>
                </a>
            </div>

            <div
            className="m-8 flex items-center justify-center gap-4 text-2xl"
            >
                <a 
                className="mx-2"
                href="https://drive.google.com/drive/folders/12VBzvbTMtowA2mARG58myXuq1exKMINL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio Folder">
                    <FaFolder
                    color="white"/>
                </a>
                <a
                className="mx-2"
                href={simranCV} download="Simran-Hisaria-CV"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV"
                >
                    <FaFileAlt color="white"/>
                </a>
                <a 
                className="mx-2"
                href="https://www.linkedin.com/in/simran-hisaria-793045211/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin" >
                    <FaLinkedin color="white"/>
                </a>
            </div>

        </nav>
    )
}

export default Navbar;