import simranPic from "../assets/simranPic.webp"
import simranCV from "../assets/CV_Simran.docx.pdf"
import { HERO_CONTENT } from "../constants"

const Hero = () => {
    return(
        <div
        className="pb-4 lg:mb-36">
            <div 
            className="flex flex-wrap lg:flex-row-reverse">

                <div
                className="w-full lg:w-1/2">
                    <div
                    className="flex justify-center lg:p-8"
                    >
                        <img 
                        width={250} 
                        height={350} 
                        src={simranPic}
                        alt="Simran Hisaria"
                        className="border border-stone-900 rounded-3xl"
                        />
                    </div>
                </div>

                <div
                className="w-full lg:w-1/2">
                    <div
                    className="flex flex-col items-center lg:items-start mt-8">
                        <h2 
                        className="pb-2 text-4xl text-white tracking-tighter lg:text-8xl">Simran Hisaria</h2>
                        <span
                        className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Media & Communnications</span>
                        <p
                        className="my-2 max-w-lg py-6 text-xl
                        text-white leading-relaxed tracking-lighter"  
                        >{HERO_CONTENT}</p>
                        <a
                        href={simranCV}
                        target="_blank"
                        rel="noopener noreferrer"
                        download="Simran-Hisaria-CV"
                        className="bg-white rounded-full p-4 text-sm text-stone-800 mb-8">
                        Download CV</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero;