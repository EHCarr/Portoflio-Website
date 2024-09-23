import UniEssay from "..//assets/UniEssay.docx.pdf"
import CrimeReport from "..//assets/CrimeReport.pdf"

const writingSample = () => {

    const handleEssayDownload = () => {
        const link = document.createElement('a');
        link.href = {UniEssay};
        link.download = 'Transing the Modern World';
        link.click();
    };

    const handleCrimeReportDownload = () => {
        const link = document.createElement('a');
        link.href = {CrimeReport};
        link.download = 'Sitamarhi Crime Report';
        link.click();
    };

return(
    <div 
    className="pb-20">
        <h2 className="my-5 text-center text-white text-3xl">Writing Samples</h2>
        <div className="flex flex-row justify-center space-x-5">
            <div className="flex flex-col justify-center items-center mt-4">
                <button
                onClick={handleEssayDownload}
                className="py-2 px-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
                    Transing the Modern World
                </button>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
                <button
                onClick={handleCrimeReportDownload}
                className="py-2 px-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
                    Sitamarhi Murder Crime Report
                </button>
            </div>
        </div>
            
    </div>
)
} 

export default writingSample;