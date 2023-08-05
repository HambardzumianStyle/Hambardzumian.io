import React from 'react';
import '../styles/fixednavbar.css';




const FixedNavbar = ({ toggleTheme ,posit}) => {
  return (
    <div className="fixed_navbar">
      <div className="side_content">
        <div className="navbar_fixed_text">Fixed Navbar</div>
        <div>
          <label>
            <input type="checkbox" onChange={posit} />
            <span className="check"></span>
          </label>{" "}
        </div>
      </div>
      <br></br><br></br>
      <div className="side_content">
        <div className="navbar_fixed_text">Light / Dark</div>
        <div>
          <label>
            <input type="checkbox" onChange={toggleTheme} />
            <span className="check"></span>
          </label>{" "}
        </div>
      </div>
    </div>
  );
};

export default FixedNavbar;