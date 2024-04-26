import Navbar from "./components/navbar";
import Navigator from "./components/navigator";
import Card from "./components/card";
import img from "./images/Frame 41.png";
import AddIcon from '@mui/icons-material/Add';
import Faq from "./components/faq";
function App() {
  return (
    <div className="h-screen">
      <Navbar/>
      <Navigator/>
      <Card/>
      <div className="mx-[4%]  border-black md:flex justify-between">
        <div className="md:w-36 w-[50%] h-full md:mx-0 mx-auto " >
        <img src={img} className="h-[110%] w-full"/>
        </div>
        <div className="flex justify-evenly md:mx-0 mx-auto w-[60%] md:w-[20%]">
          <div className="hover:scale-105 cursor-pointer my-2 rounded-full w-10 h-10 text-center bg-gradient-to-r text-white from-[#06286E] to-[#164EC0]">
            <AddIcon style={{fontSize:"30px",marginTop:"5px"}}/>
          </div>
          <div className="font-semibold my-3 text-lg md:text-xl text-[#164EC0]">
            Create Flashcard
          </div>
        </div>

       
      </div>
      <Faq/>
    </div>
  );
}

export default App;
