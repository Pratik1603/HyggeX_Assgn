import react from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Faq=()=>{
    return(
        <div className="m-[2%] ">
            <div className="text-2xl text-[#06286E] font-semibold">
                FAQ
            </div>
            <div className="mt-[2%] text-xs md:text-lg flex flex-col gap-4 mb-[2%]">
                <div className="relative rounded-xl w-full md:w-[60%] border-2 border-[#06286E] h-12 md:p-[1%] p-[2%]">
                    <div className="absolute right-2 top-2">
                        <KeyboardArrowDownIcon/>
                    </div>
                    Can education flashcards be used for all age groups?
                </div>
                <div className="relative rounded-xl w-full md:w-[60%] border-2 border-[#06286E] h-12 md:p-[1%] p-[2%]">
                    <div className="absolute right-2 top-2">
                        <KeyboardArrowDownIcon/>
                    </div>
                    How do education flashcards work?
                </div>
                <div className="relative rounded-xl w-full md:w-[60%] border-2 border-[#06286E] h-12 md:p-[1%] p-[2%]">
                    <div className="absolute right-2 top-2">
                        <KeyboardArrowDownIcon/>
                    </div>
                    Can education flashcards be used for test preparation?
                </div>
            </div>
            <div className="h-20">

            </div>
        </div>
    )
}
export default Faq;