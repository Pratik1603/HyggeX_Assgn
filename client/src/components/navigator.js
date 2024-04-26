import react from "react";
import img from "../images/logohugg.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const Navigator=()=>{
    return(
        <div className=" m-[2%] w-80% md:w-[35%] text-[#3A3740] text-sm flex justify-evenly">
            <div>
                <HomeOutlinedIcon style={{fontSize:"25px"}}/>
            </div>
            <div>
                <NavigateNextIcon/>
            </div>
            <div>
                Flashcard
            </div>
            <div>
                <NavigateNextIcon/>
            </div>
            <div>
                Mathematics
            </div>
            <div>
                <NavigateNextIcon/>
            </div>
            <div className="text-[#061C93] font-semibold">
               Relation and Function
            </div>
        </div>
    )
}
export default Navigator;