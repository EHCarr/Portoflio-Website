import { TbBrandOffice } from "react-icons/tb";
import { SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";
import { BsFillFileBarGraphFill } from "react-icons/bs";


const Skills = () => {
    return(
        <div 
        className="pb-20">
            <h2 className="my-7 text-center text-white text-3xl">Skills</h2>

            <div className="flex flex-row justify-center">
                <div
                className="flex flex-wrap items-center justify-normal px-10 gap-3">
                    <TbBrandOffice className="text-white"/>
                    <div
                    className="bg-gradient-to-r from-stone-300 to-stone-400 bg-clip-text text-l tracking-tight text-transparent">
                    Microsoft Office
                    </div>
                </div>

                <div
                className="flex flex-wrap items-center justify-normal px-10 gap-3">
                    <SiAdobephotoshop className="text-white"/>
                    <div
                    className="bg-gradient-to-r from-stone-300 to-stone-400 bg-clip-text text-l tracking-tight text-transparent">
                    PhotoShop</div>
                </div>

                <div
                className="flex flex-wrap items-center justify-normal px-10 gap-3">
                    <SiAdobepremierepro className="text-white"/>
                    <div
                    className="bg-gradient-to-r from-stone-300 to-stone-400 bg-clip-text text-l tracking-tight text-transparent">
                    Premiere Pro</div>
                </div>

                <div
                className="flex flex-wrap items-center justify-normal px-10 gap-3">
                    <BsFillFileBarGraphFill className="text-white"/>
                    <div
                    className="bg-gradient-to-r from-stone-300 to-stone-400 bg-clip-text text-l tracking-tight text-transparent">
                    RStudio</div>
                </div>
            </div>

            <div className="flex flex-row justify-center mt-3">
                <div
                    className="flex flex-wrap items-center justify-normal px-10 gap-3">
                    <div
                    className="bg-gradient-to-r from-stone-300 to-stone-400 bg-clip-text text-l tracking-tight text-transparent">
                    English (Fluent, IELTS 7.5)
                    </div>
                </div>

                <div
                    className="flex flex-wrap items-center justify-normal px-10 gap-3">
                    <div
                    className="bg-gradient-to-r from-stone-300 to-stone-400 bg-clip-text text-l tracking-tight text-transparent">
                    Hindi & Nepali (Native)
                    </div>
                </div>

                <div
                    className="flex flex-wrap items-center justify-normal px-10 gap-3">
                    <div
                    className="bg-gradient-to-r from-stone-300 to-stone-400 bg-clip-text text-l tracking-tight text-transparent">
                    Mandarin (Level 1)
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Skills;