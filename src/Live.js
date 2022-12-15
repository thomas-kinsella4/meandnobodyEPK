import React from "react";
import thecab from "./cablive.mp4";
import thered from "./redlive.mp4";
import dreams from "./dreasmslive.mp4";
import jesus from "./jesuitlive.mp4";

function Live() {
    return (
        <div id="live-section">
            <h1 className="purple-live-header">ME + NOBODY LIVE</h1>
            <div id="live-content-container">
                <video src={thecab} className="live-vid" controls></video>
                <video src={thered} className="live-vid" controls></video>
                <video src={jesus} className="live-vid" controls></video>
                <video src={dreams} className="live-vid" controls></video>
                <div className="contain">
                <h2>LINK TO ACCESS AND DOWNLOAD THESE VIDEOS:</h2>
                <a href="https://drive.google.com/drive/folders/1wMHlZ0P6zWFJi7IOuBJB2blK3ygi22b1?usp=sharing" className="a-link" target="_blank">VIDEOS</a>
                </div>
           
            {/* https://drive.google.com/drive/folders/1wMHlZ0P6zWFJi7IOuBJB2blK3ygi22b1?usp=sharing  */}
            </div>
        </div>
        // </div>
    )
}

export default Live;