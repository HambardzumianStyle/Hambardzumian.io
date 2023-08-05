import { useCallback, useContext, useState } from "react";
import React from "react";
import { createContext } from "react";
import "./PopUp.css";
import { useSelector, useDispatch } from "react-redux";
import { BG_KEY } from "../redux/bgRedux/bgReducer";
import {
  pinkBg,
  blackBg,
  blueBg,
  greenBg,
  yellowBg,
  redBg,
} from "../redux/bgRedux/bg.actions";
import Material from "../components/Material";
import Button from "../components/Button";
import About from "../components/About";
import Sidenav from "../components/Sidenav";
import FixedNavbar from "../components/FixedNavbar";
import Link from "../components/Link";
import { Docs } from "../components/Docs";
import SmallBtn from "../components/SmallBtn";
import Thank from "../components/Thank";
import Last_btns from "../components/Last_btns";
import { ThemeContext } from "../contexts/theme";


export const MyColor = createContext();

function PopUp({dark,White,transparent,posit}) {
  const [showWindow, setShowWindow] = useState(false);
  const [color, setColor] = useState("#f0f2f5");
  // const [fixed, setFixed] = useState(false);

  let dispatch = useDispatch();

  let clickPink = () => {
    dispatch(pinkBg());
  };

  let clickBlack = () => {
    dispatch(blackBg());
  };

  let clickBlue = () => {
    dispatch(blueBg());
  };
  let clickGreen = () => {
    dispatch(greenBg());
  };

  let clickYello = () => {
    dispatch(yellowBg());
  };

  const clickRed = () => {
    dispatch(redBg());
  };

 let viewBg = useSelector((state) => {
    return state[BG_KEY];
  });


  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);

  return (
    <>
      <div
        className=""
        
      >
     
     
          <Material showWindow={() => setShowWindow(false)} />

          {/* <p className="content_title_p">See our dashboard options.</p> */}

          <About
           
           
          />

          <Button
            clickPink={clickPink}
            clickBlack={clickBlack}
            clickBlue={clickBlue}
            clickGreen={clickGreen}
            clickYello={clickYello}
            clickRed={clickRed}
          />

          <div className="text_component">
            <br/>
            <div className="sidenav">Sidenav Types</div>
            <div className="choose">
              Choose between 2 different sidenav types.
            </div>
            
          </div>
          <br/>
          <MyColor.Provider value={color}>
            <Sidenav
              // transparent={() => setColor("#f0f2f5")}
              // white={() => setColor("#f8f9fa")}
              // dark={() => setColor("#212529")}
              dark={dark}
              White={White}
              transparent={transparent}
            />
          </MyColor.Provider>
          <br/>
          <FixedNavbar
            posit={posit}
            toggleTheme={toggleTheme}
          /> 
          <br></br>
          <br></br>
          <br></br>
          <Link />
          <Docs />
          <SmallBtn />
          <Thank />
          <Last_btns />
        </div>
      

     
    
    </>
  );
}

export default PopUp;