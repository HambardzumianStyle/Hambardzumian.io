import React, { useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import '../components/Sidebar.css';
import { useContext } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { BG_KEY } from "../../PopUp/redux/bgRedux/bgReducer";
import { MyColor } from '../../PopUp/components/PopUp'

export default function SidebarItem({elm,color}) {
    const [opend,setOpend] = useState(true)
    const [opench,setOpench] = useState(false)
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
    let back=useContext(MyColor)
    let backColr = color === "#f0f2f5" || color === "#f8f9fa" ?"black": "white" 
 
  if(elm.childrens){
    return (
<div className={opend?'sidebar-opened open item':'sidebar-opened item '}> 
      <div className='main-titls'> 
      <p  onClick={() => setOpend(!opend)} className='main-titls' style={{color:backColr}}>
      {elm.title} <IoIosArrowDown className='cheveron-down toogle-btn'/></p>
      
      </div >
   
        
          {/* <div className={opench?'sidebar-opened1 open ':'sidebar-opened1 '} onClick={()=>setOpench(!opench) } > */}
            <div className={opench?'entamenu2 opend':'entamenu2non'} > 
               {elm.childrens.map((ch,index) =>  <SidebarItem color={color} key={index} elm={ch} onClick={() => setOpench(!opench)} /> )}
               </div> 
              
       </div>
        
    )
    
  } else return (
    <div className={opend?'sidebar-opened open item':'sidebar-opened  '} > 
      <div className='main-titls' style={IsHover ? {backgroundColor:viewBg.color} : {backgroundColor:""}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > 
      <p className='items' style={{color:backColr}}>
      {elm.title }</p>
      </div>
     </div> 
  )

}