import "./requirement.css"
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
export function Requirement ({theme}){
    return (
        <div className="main-container-div" >
            <div className="Img1-Container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <img src={img1} className="Img-1"></img>

                <div className="Img-1-text-container">
                <p style={{fontSize:"22px",margin:"0px"}}>Website Views</p>
                <p style={{marginTop:"30px"}}>Last Campigin Perfomance</p>
                <p style={{marginTop:"57px"}}>campaign sent 2 days ago</p>
                </div>
               
            </div>

            <div className="Img1-Container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <img src={img2} className="Img-1"></img>

                <div className="Img-1-text-container">
                <p style={{fontSize:"22px",margin:"0px"}}>Daily Sales</p>
                <p style={{marginTop:"30px"}}>(+15%) increase in today sales </p>
                <p style={{marginTop:"57px"}}>updated 4 min ago</p>
                </div>
               
            </div>

            <div className="Img1-Container"style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <img src={img3} className="Img-1"></img>

                <div className="Img-1-text-container">
                <p style={{fontSize:"22px",margin:"0px"}}>Completed Tasks</p>
                <p style={{marginTop:"30px"}}>Last Campigin Perfomance</p>
                <p style={{marginTop:"57px"}}>just updated</p>
                </div>
               
            </div>
        </div>
    )
}