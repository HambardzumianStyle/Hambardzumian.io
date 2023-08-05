
import './App.css';
import { Navbar } from './Navbar/Menu-Components/menu';
import { Sales } from './Navbar/Sales-by-country/Sales-by-country-components/img-text';
import { Requirement } from './Navbar/requirement/requirement';
import { Bookings } from './Navbar/Bookings/Bookings-users-revenue-followers';
import { DownImgText } from './Navbar/Down-ImgText/downImg';
import Sidebar from './Material-Dashboard/components/Sidebar';
import { useContext } from 'react';
import { MyColor } from './PopUp/components/PopUp';
import { useState } from 'react';
import { ThemeContext } from './PopUp/contexts/theme';

function App() {
  const [color,setColor]=useState("#2F2F33FF")
  const [fixed, setFixed] = useState(false);
  const Fixeds = ()=>{
    setFixed(!fixed)
  }
  let dark=()=>{setColor("#212529")}
  let White=()=>{setColor("#f8f9fa")}
  let transparent=()=>{setColor("#f0f2f5")}

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  document.body.style.backgroundColor = theme.backgroundColor2

  return (

    <>
      <MyColor.Provider>
      <div className='Matreial_Dashboard'>
      <Sidebar color={color}/>
      </div>
      </MyColor.Provider>

     <div className="App" >  
    <Navbar 
      dark={dark}
      White={White}
      transparent={transparent}
      fixed={fixed}
      posit={Fixeds}
      theme={theme}
    />
    <Sales 
     fixed={fixed}
     theme={theme}
    />
    <Requirement 
    theme={theme}
    />
    <Bookings
    theme={theme}
    />
    <DownImgText
    theme={theme}
    />

    </div>
    </>
   
  );
}

export default App;
