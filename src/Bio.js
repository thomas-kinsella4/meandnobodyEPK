import React from "react";
import pic1 from "./epkpic3.png";

function Bio() {
    return (
        <div id="bio-div">
        <img src={pic1} id="bio-pic"></img>
        <div id="bio-div">
            <p id="bio">“Me + Nobody” is an Indie pop/rock band hailing from New York who simply loves making music that makes them feel something. It’s more than just the music. It’s the emotional connection you experience while listening to Me + Nobody. Richie Anderson (vocals/guitar), Thomas Kinsella (lead guitar), Vinny Sutera (drums) and Joe Genduso (bass), each bring an element to frame an undeniable new sound. Their relentless passion for creation is captivating and will keep you wanting more. Keep an eye out for Me + Nobody while they work on their debut record.</p>
        </div>
        </div>
    );
}

export default Bio;