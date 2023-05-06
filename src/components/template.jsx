import skin1 from "../static/images/skin1.svg";
import skin2 from "../static/images/skin2.svg";
import skin3 from "../static/images/skin3.svg";
import skin4 from "../static/images/skin4.svg";
import skin5 from "../static/images/skin5.svg";
import skin6 from "../static/images/skin6.svg";
import skin7 from "../static/images/skin7.svg";
import skin8 from "../static/images/skin8.svg";
import { Link } from "react-router-dom";
import './template.css'
import { useDispatch } from "react-redux";
import { setSkinCreator } from "../redux/action";

function Template() {
  let dispatch = useDispatch();
   const handleSkinSelect = (skin)=>{
    dispatch(setSkinCreator(skin))
   } 
  return (
    <div className="templates">
      <div className="templates-intro">
        <h1>Select a resume template</h1>
        <p>You can edit it later on.</p>
      </div>
      <div className="templates-style">
        <div className="template">
          <img src={skin1} alt="" />
         <Link to="/contact"><button className='template-btn' onClick={() => {handleSkinSelect("skin1")}}>Use this template</button></Link> 
        </div>
        <div className="template">
          <img src={skin2} alt="" />
          <Link to="/contact"><button className='template-btn' onClick={() => {handleSkinSelect("skin2")}}>Use this template</button></Link> 
        
        </div>
        
        <div className="template">
          <img src={skin5} alt="" />
          <Link to="/contact"><button className='template-btn' onClick={() => {handleSkinSelect("skin5")}}>Use this template</button></Link> 
        
        </div>
       
       
        
      </div>
    </div>
  );
}

export default Template;
