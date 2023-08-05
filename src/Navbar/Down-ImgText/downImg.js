import "./downImg.css";
import img1 from "./img/product-1.jpg";
import img2 from "./img/product-2.jpg";
import img3 from "./img/product-3.jpg";
export function DownImgText ({theme}){
    return (
        <div className="Mainn-Container" >
            <div className="ImgText-Divs" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <img src={img1} className="ImgText-Divs-img"></img>
                <p className="text-img">Cozy 5 Stars Apartment</p>
                <p className="text-img2">The place is close to Barceloneta Beach and bus 
                    stop just 2 min by walk and near to "Naviglio"
                    where you can enjoy the main night life in Barcelona.
                </p>
                <p className="text-img3">$899/night <span>Barcelona,Spain</span></p>
            </div>

            <div className="ImgText-Divs" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <img src={img2} className="ImgText-Divs-img"></img>
                <p className="text-img">Office Studio</p>
                <p className="text-img2">The place is close to Metro Station and bus 
                    stop just 2 min by walk and near to "Naviglio"
                    where you can enjoy the main night life in London UK.
                </p>
                <p className="text-img3">$1.119/night <span>London,UK</span></p>
            </div>

            <div className="ImgText-Divs" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <img src={img3} className="ImgText-Divs-img"></img>
                <p className="text-img">Beautiful Castle</p>
                <p className="text-img2">The place is close to Metro Station and bus 
                    stop just 2 min by walk and near to "Naviglio"
                    where you can enjoy the main night life in Milan.
                </p>
                <p className="text-img3">$459/night <span>Milan,Italy</span></p>
            </div>
        </div>
    )
}