import React from "react";
import pic1 from "./newpic.jpg";

function Bio() {
    return (
        <div id="bio-div">
        <img src={pic1} id="bio-pic"></img>
        <div id="inner-bio-div">
            <p id="bio">“Me + Nobody” is an alternative/indie pop band hailing from Long Island, New York. Richie Anderson (vocals/guitar), Thomas Kinsella (lead guitar), Vinny Sutera (drums), and Joe Genduso (bass guitar), have a relentless passion for creating music that makes them feel something. In turn, they hope their listeners feel an emotional connection to their songs as well.
            The band will be releasing their heavily anticipated first EP in 2024.</p>
        </div>
        </div>
    );
}

export default Bio;