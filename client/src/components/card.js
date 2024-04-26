import react from "react";
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import img from "../images/Vector.png";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { useState } from "react";
const Card=()=>{
    const [selectedOption, setSelectedOption] = useState('Study');
    return(

        <div className="m-[2%] h-[50%]">
            <div className="text-xl md:text-2xl font-semibold text-[#06286E]  ">
                Relation and Functions ( Mathematics )
            </div>
            <div className="w-full mt-1  h-[90%]">
                <div className="w-[80%] md:w-[50%] mx-auto  h-full">
                <div className="h-[10%] text-sm flex justify-evenly">
            <div
                className={`cursor-pointer relative ${
                    selectedOption === 'Study' ? 'text-blue-500' : ''
                }`}
                onClick={() => setSelectedOption('Study')}
            >
                <span>Study</span>
                {selectedOption === 'Study' && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
                )}
            </div>
            <div
                className={`cursor-pointer relative ${
                    selectedOption === 'Quiz' ? 'text-blue-500' : ''
                }`}
                onClick={() => setSelectedOption('Quiz')}
            >
                <span>Quiz</span>
                {selectedOption === 'Quiz' && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
                )}
            </div>
            <div
                className={`cursor-pointer relative ${
                    selectedOption === 'Test' ? 'text-blue-500' : ''
                }`}
                onClick={() => setSelectedOption('Test')}
            >
                <span>Test</span>
                {selectedOption === 'Test' && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
                )}
            </div>
            <div
                className={`cursor-pointer relative ${
                    selectedOption === 'Game' ? 'text-blue-500' : ''
                }`}
                onClick={() => setSelectedOption('Game')}
            >
                <span>Game</span>
                {selectedOption === 'Game' && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
                )}
            </div>
            <div
                className={`cursor-pointer relative ${
                    selectedOption === 'Others' ? 'text-blue-500' : ''
                }`}
                onClick={() => setSelectedOption('Others')}
            >
                <span>Others</span>
                {selectedOption === 'Others' && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
                )}
            </div>
        </div>
                    <div className="mt-2 h-[70%] w-full">
                        <div className="relative border-2 text-white rounded-xl h-[100%] bg-gradient-to-bl from-[#06286E] to-[#497fec] mx-auto">
                            <div className="absolute top-2 right-4" >
                                <VolumeUpOutlinedIcon/>
                            </div>
                            <div className="absolute top-2 left-4" >
                                <LightbulbOutlinedIcon/>
                            </div>
                            <div className="w-full text-center text-white font-bold text-xl mt-[30%] md:mt-[15%] ">
                                9 + 6 + 7x - 2x - 3
                            </div>
                        </div>
                    </div>
                    <div className=" h-[20%] w-full flex justify-between p-[1%]">
                        <div className="ml-[4%]  h-5 w-5 mt-[2%]">
                            <img src={img} className="w-full h-full" />
                        </div>
                        <div className=" flex w-[60%] md:w-[40%] justify-evenly text-white">
                            <div className="border-2 rounded-full w-10 h-10 bg-gradient-to-r from-[#06286E] to-[#164EC0] ">
                            <NavigateBeforeOutlinedIcon style={{fontSize:"35px",marginTop:"2px"}}/>
                            </div>
                            <div className="py-2 md:text-lg text-sm text-black text-center font-bold">
                                01 /10 
                            </div>
                            <div className="border-2 rounded-full text-center w-10 h-10 bg-gradient-to-r from-[#06286E] to-[#164EC0] ">
                                <NavigateNextIcon style={{fontSize:"35px",marginTop:"2px"}}/>
                            </div>
                        </div>
                        <div className="mr-[4%] mt-[1%]">
                            <CropFreeOutlinedIcon style={{color:"#06286E"}}/>
                        </div>
                    </div>


                </div>
                
            </div>
            
        </div>
    )
}
export default Card;