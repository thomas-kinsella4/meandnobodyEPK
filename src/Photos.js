import React from "react";
import pic1 from "./epkpic3.jpg";
import pic2 from "./epkpic2.jpg";
import pic3 from "./epkpic1.jpg";
import pic4 from "./epkpic4.jpg";
import pic5 from "./newpic.jpg";
import pic6 from "./epkpic6.jpg";
import pic7 from "./epkpic7.jpg";

function Photos() {
    return (
        <>
        <div id="photo-section">
            <img src={pic5} className="gallery"></img>
            <img src={pic6} className="gallery"></img>
            <img src={pic4} className="gallery"></img>
            <img src={pic3} className="gallery"></img>
            <img src={pic1} className="gallery"></img>
            <img src={pic2} className="gallery"></img>
            <img src={pic7} className="gallery"></img>
        </div>
        <div className="contain">
            <h2 id="mp3-header">LINK TO ACCESS AND DOWNLOAD THESE PHOTOS:</h2>
                <a href="https://drive.google.com/drive/folders/1jJ6jxIRyDDCKKmEDribM_I7hR0ZxkZLq?usp=sharing" className="a-link" target="_blank">PHOTOS</a>
            </div>
        </>
    )
}

export default Photos;