import React, { useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import '../components/Sidebar.css';
import {useSelector,useDispatch} from "react-redux";
import { BG_KEY } from "../../PopUp/redux/bgRedux/bgReducer";
export default function SidebarItem2({elm2,color}) {
    const [sideopen,setSideopen] = useState(true)
    const [sideopen2,setSideopen2] = useState(false)
    const [IsHover,setIsHover]=useState(false)
    const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };
    let viewBg = useSelector((state) => {
      return state[BG_KEY];
    });
    let backColr = color === "#f0f2f5" || color === "#f8f9fa" ?"black": "white" 

    if(elm2.childrens){
         return (
    <div className={sideopen?'sidebar-opened open item':'sidebar-opened item'}>
     <div className='main-titls'> <p style={{color:backColr}} onClick={()=>setSideopen(!sideopen)}>
        {elm2.title} <IoIosArrowDown className='cheveron-down toogle-btn'/> </p>
        
         </div>
        <div className={sideopen2?'entamenu2':'entamenu2non'}>
            {elm2.childrens.map((ch2)=> <SidebarItem2 elm2={ch2} color={color}/>)}
         </div>
    </div>

  )
    }
    else {
        return (
            <div className={sideopen?'sidebar-opend open item':'sidebar-open item'}>
             <div className='main-titls' style={IsHover ? {backgroundColor:viewBg.color} : {backgroundColor:""}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <p className='items' style={{color:backColr}}>{elm2.title} </p> </div>
        
            </div>
          )
    }
 
}