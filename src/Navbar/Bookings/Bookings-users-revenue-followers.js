import './Bookings-users-revenue-followers.css';
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
export function Bookings({theme}){
    return (
        <div className='Main-divs'>
            <div className='box' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <img src={img1} className='box-img'></img>
                <p className='box-p-1'>Bookings <br/> <span style={{color:"black",fontWeight:"bold"}}>281</span> </p>
                <p className='box-p-2'><span className='number-color'>+55% </span> than lask week</p>
            </div>

            <div className='box'style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <img src={img2} className='box-img'></img>
                <p className='box-p-1'>Today's Users <br/> <span style={{color:"black",fontWeight:"bold"}}>2,300</span> </p>
                <p className='box-p-2'><span className='number-color'>+3% </span> than last month</p>
            </div>

            <div className='box'style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <img src={img3} className='box-img'></img>
                <p className='box-p-1'>Revenue <br/> <span style={{color:"black",fontWeight:"bold"}}>34k</span> </p>
                <p className='box-p-2'><span className='number-color'>+1% </span> than yesterday</p>
            </div>
            
            <div className='box' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <img src={img4} className='box-img'></img>
                <p className='box-p-1'>Followers <br/> <span style={{color:"black",fontWeight:"bold"}}>+91</span> </p>
                <p className='box-p-2'><span className='number-color'></span> Just updated</p>
            </div>

        </div>
    )
}