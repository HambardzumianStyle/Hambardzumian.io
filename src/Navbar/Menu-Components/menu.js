import {FaHome} from 'react-icons/fa';
import {FiSettings} from 'react-icons/fi';
import {MdOutlineNotificationsActive} from 'react-icons/md';
import {BiUserCircle} from 'react-icons/bi';
import { Link} from "react-router-dom";
import "./menu.css";
import { useState } from 'react';
import PopUp from "../../PopUp/components/PopUp";


export const Navbar= ({dark,White,transparent,posit,fixed,theme})=>{
      
        const [isOpen, setIsOpen] = useState(false);
        
        const openPopup = () => {
          setIsOpen(true);
        };

        const closePopup = () => {
          setIsOpen(false);
        };
    return(
        <div className='Menu-Container' style={{ backgroundColor: theme.backgroundColor3 ,borderRadius:"10px"}} >  
        <div className={fixed ? "MainDiv2"  :"MainDiv"} >
            <div  >
                <p className='menu-text1'><FaHome className='Links' /> &nbsp;/ &nbsp;Dashboard &nbsp;/ &nbsp;<Link className='Links' >Analytics</Link> </p>
                <p className='menu-text2' >Analytics</p>
            </div>
           
           <div className='Input-Icons-Container'>
            <input type='search' placeholder='Search here' ></input>
            <Link className='Links-icon'><BiUserCircle/></Link> 
            <Link className='Links-icon' onClick={openPopup} ><FiSettings /></Link>
            <Link className='Links-icon'><MdOutlineNotificationsActive/></Link>
           </div>
        </div>

        <div>
      {isOpen && (
        <div className="side-popup">
          <div className="side-popup-content">
        <button onClick={closePopup} className='close-popup'>X</button>
            <div >
           
              <PopUp 
            
              posit={posit}
              dark={dark}
              White={White}
              transparent={transparent}
            /></div>
            
          </div>
        </div>
      )}
    </div>

       </div> 
    )
    
}