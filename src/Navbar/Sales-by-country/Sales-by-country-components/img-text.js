import internet from "./img/Internet.png";
import United from "./img/United.png";
import Germany from "./img/Germany.png";
import Britian from "./img/Britian.png";
import Brasil from "./img/Brasil.png"
import '../Sales-by-country-components/img-text.css';


export function Sales ({fixed,theme}){
    return (
        <>
        
        
        

           
            
            <div className={fixed ? "sales-by-contry-main-div2" : "sales-by-contry-main-div"} style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>


             <div className="internet-icon-container">
                <div style={{display:"flex" ,height:"20px"}}>
                     <img src={internet} className="internet-icon"></img>
           <p>Sales by Country</p> 
                </div>
          </div>
            
            

                <div className="Text-Container">
                    <div className="Text-div">
                    <img src={United} className="flag-img"></img>
                    <p>Country:<br/>United State</p>
                    <p>Sales: <br/>2500</p>
                    <p>Value:<br/>$230.000</p>
                    <p>Bounce:<br/>29.9%</p>
                   </div>
                   < hr className="hr-text"/>

                   <div className="Text-div">
                    <img src={Germany} className="flag-img"></img>
                    <p>Country:<br/>Germany</p>
                    <p>Sales: <br/>3900</p>
                    <p>Value:<br/>$440.000</p>
                    <p>Bounce:<br/>40.22%</p>
                   </div>
                   < hr className="hr-text"/>
                   <div className="Text-div">
                    <img src={Britian} className="flag-img"></img>
                    <p>Country:<br/>Great Britian</p>
                    <p>Sales: <br/>1400</p>
                    <p>Value:<br/>$190.700</p>
                    <p>Bounce:<br/>23.44%</p>
                   </div>
                   < hr className="hr-text"/>
                   <div className="Text-div">
                    <img src={Brasil} className="flag-img"></img>
                    <p>Country:<br/>Brasil</p>
                    <p>Sales: <br/>562</p>
                    <p>Value:<br/>$143.960</p>
                    <p>Bounce:<br/>32.14%</p>
                   </div>
                   < hr className="hr-text"/>
                </div>
               
             </div>
    
        </>
    )
}