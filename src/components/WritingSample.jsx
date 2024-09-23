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
            <div className="flex flex-col justify-center items-center mt-4">
                <div
                className="my-5 text-center text-white text-l">
                    Transing the Modern World 
                </div>
                <button
                onClick={handleEssayDownload}
                className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
                    Download Essay
                </button>
                <div
                className="my-5 text-center text-white text-l">
                    Sitamahri Murder Crime Report 
                </div>
                <button
                onClick={handleCrimeReportDownload}
                className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
                    Download Article
                </button>
            </div>
    </div>
)
} 

export default writingSample;