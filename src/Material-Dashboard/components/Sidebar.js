
import '../components/Sidebar.css'
import img1 from '../imgs/logo-ct.png'
import img3 from "../imgs/logo-ct-dark.png"
import img2 from '../imgs/Alice.jpg'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import {BiSolidDashboard} from 'react-icons/bi'
import { useState } from 'react'
import SlidebarDatamap from  '../arrays/SlidebarDatamap';
import SidebarDatamap2 from '../arrays/SidebarDatamap2';
import { useContext } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { BG_KEY } from "../../PopUp/redux/bgRedux/bgReducer";
import { MyColor } from '../../PopUp/components/PopUp'


export default function Sidebar({color}) {
const [open,setOpen] = useState(false)
const [open1,setOpen1] = useState(false)
const [IsHover,setIsHover]=useState(false)
const [IsHover2,setIsHover2]=useState(false)
const [IsHover3,setIsHover3]=useState(false)
const [IsHover4,setIsHover4]=useState(false)
const [IsHover5,setIsHover5]=useState(false)


const handleMouseEnter = () => {
  setIsHover(true);
};
const handleMouseLeave = () => {
  setIsHover(false);
};
const handleMouseEnter2 = () => {
  setIsHover2(true);
};
const handleMouseLeave2 = () => {
  setIsHover2(false);
};
const handleMouseEnter3 = () => {
  setIsHover3(true);
};
const handleMouseLeave3 = () => {
  setIsHover3(false);
};
const handleMouseEnter4 = () => {
  setIsHover4(true);
  
};
const handleMouseLeave4 = () => {
  setIsHover4(false);
};
const handleMouseEnter5 = () => {
  setIsHover5(true);
};
const handleMouseLeave5 = () => {
  setIsHover5(false);
};
let viewBg = useSelector((state) => {
  return state[BG_KEY];
});
let backColr = color === "#f0f2f5" || color === "#f8f9fa" ? "black": "white"
let backimg=color === "#f0f2f5" || color === "#f8f9fa"?  img3 : img1;
let back=useContext(MyColor)
  return (
    
    <div className="dashboard2-main" style={{backgroundColor:color}}>
      <div className='logo-div'>
            <img src={backimg} className='img1'/> 
            <p className='name' style={{color:backColr}}>Otis Admin PRO</p>
        </div>
        <hr className='gic'/>

        <div className={open?'alice-div open item':'alice-div item'} > 
          <div className='alice-div2'> <img src={img2} className='alice'/>
          <p className='alice-p'style={{color:backColr}} onClick={() => {setOpen(!open)}}>&nbsp;  Brooklyn Alice <span> <IoIosArrowDown className='cheveron-down toogle-btn'/></span> </p> 
          </div>

           <div className='entamenu ' >
            
             <div  className='items ' style={IsHover ? {backgroundColor:viewBg.color} : {backgroundColor:""}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
              
                   <p className='ent-p items' style={{color:backColr}}>M &nbsp; My Profile</p>  
                            
             </div>

             <div  className='items' style={IsHover2 ? {backgroundColor:viewBg.color} : {backgroundColor:""}} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                          <p className='ent-p items'style={{color:backColr}} >S &nbsp; Settings </p>      
             </div>
             <div  className='items' style={IsHover3 ? {backgroundColor:viewBg.color} : {backgroundColor:""}} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                         <p className='ent-p items'style={{color:backColr}}>L &nbsp; Logout </p>       
                               </div>

           </div>
      </div>
      <hr className='gic'/>

      <div className={open1?'dashboard open item':'dashboard item'}>
        <p className='dashboard-p'style={{color:backColr}} onClick={() => { 
          setOpen1(!open1)
        }} > 
          <BiSolidDashboard className='icon1'/>Dashboard <span> <IoIosArrowDown className='cheveron-down toogle-btn'/></span>
        </p>
        <div className='entamenu'>
        <div  className='items' style={IsHover4 ? {backgroundColor:viewBg.color} : {backgroundColor:""}} onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
             <p className='ent-p items ' style={{color:backColr}}> &nbsp; A Analitics</p>                   
        </div>
        <div  className='items'style={IsHover5 ? {backgroundColor:viewBg.color} : {backgroundColor:""}} onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
        <p className='ent-p items' style={{color:backColr}}> &nbsp;S Sales</p>                   
        </div>
             </div>
        
      </div  >
     
      <div>  <p className='d-pages main-titls' style={{color:backColr}}>Pages</p></div>
      
     <div className='arr1' ><SlidebarDatamap color={color}/></div>
     <hr className='gic' />
     <div>  <p className='d-pages main-titls' style={{color:backColr}}>Docs</p></div>
     <div className='arr1'><SidebarDatamap2 color={color}/> </div>
     </div >
     
  )
}