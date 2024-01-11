import React from "react";
import cab from "./cabaudio.mp3";
import soho from "./SoHo.mp3";
import red from "./red.mp3";
import ui from "./ui.mp3";
import higher from "./higheraudio.mp3"
import intro from "./Intro.mp3";
import { BsSpotify } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";

function Blog() {
    return (
        
        <>
        <div id="blog-section">
            {/* <div id="left-blog">
                <h1 className="blog-letters">M</h1>
                <h1 className="blog-letters">E</h1>
                <h1 className="blog-letters">+</h1>
                <h1 className="blog-letters">N</h1>
                <h1 className="blog-letters">O</h1>
                <h1 className="blog-letters">B</h1>
                <h1 className="blog-letters">O</h1>
                <h1 className="blog-letters">D</h1>
                <h1 className="blog-letters">Y</h1>
            </div> */}
            <div id="middle-blog">
                <div className="song-div">
                <h2 className="song-title">THE CAB</h2>
                <audio src={cab} controls></audio>
                </div>
                <div className="song-div">
                <h2 className="song-title">HIGHER</h2>
                <audio src={higher} controls></audio>
                </div>
                <div className="song-div">
                <h2 className="song-title">THE RED</h2>
                <audio src={red} controls></audio>
                </div>
                <div className="song-div">
                <h2 className="song-title">SOHO</h2>
                <audio src={soho} controls></audio>
                </div>
                <div className="song-div">
                <h2 className="song-title">U + I - LIVE IN STUDIO</h2>
                <audio src={ui} controls></audio>
                </div>
                <div className="song-div">
                <h2 className="song-title">INTRO</h2>
                <audio src={intro} controls></audio>
                </div>
            </div>
            <div className="contain">
                <h2 id="mp3-header">LINK TO ACCESS AND DOWNLOAD THESE MP3s:</h2>
                <a href="https://drive.google.com/drive/folders/1Nmg6PFN-jlB773nq80edfjf1artXugrt?usp=sharing" className="a-link" target="_blank">MP3s</a>
                </div>
            {/* <div id="right-blog">
                <h1 className="blog-letters">M</h1>
                <h1 className="blog-letters">E</h1>
                <h1 className="blog-letters">+</h1>
                <h1 className="blog-letters">N</h1>
                <h1 className="blog-letters">O</h1>
                <h1 className="blog-letters">B</h1>
                <h1 className="blog-letters">O</h1>
                <h1 className="blog-letters">D</h1>
                <h1 className="blog-letters">Y</h1>
            </div> */}
        </div>
        <div id="press-section">
            <h1 id="toggle-hidden">PRESS</h1>
            <div id="press-left">
                <p>"Me + Nobody showed the audience that they are quite adept at masterfully weaving together these various sounds and influences. By layering their guitar/bass/drums performances atop atmospheric strings and stacked vocal harmonies, the group was able to create a vast soundscape that sounded much richer than an average 4-piece rock band." - <a href="https://www.thegroovement.nyc/me-nobody/" target="_blank" className="press-link">Jameson Mangan, The Groovement</a>
                </p>
            </div>
            <div id="press-middle">
                <h1 id="hidden">PRESS</h1>
                <p>"‘The Cab‘ from New York City, USA-based indie alternative band Me + Nobody is a sing-with-me-all-night track that has been made with the tender care that all classics comprise." - <a href="https://www.anrfactory.com/nyc-band-me-nobody-feel-the-toll-on-that-wondering-mind-with-the-cab/" target="_blank">Llewelyn Screen, A&R Factory</a>
                </p>
            </div>
            <div id="press-right">
                <p>"A band with a strikingly complete and cohesive sound despite being in the early stages of their career, Me + Nobody are an up-and-coming talent well worth keeping your eye on. With their incredible musicianship on display, it’s only a matter of time before they become an exciting, indie-breakout band." - <a href="https://earmilk.com/2022/09/16/me-nobody-release-irresistible-new-indie-pop-single-soho/" target="_blank">Antonia Sulley, EARMILK</a>
                </p>
            </div>
        </div>
        </>
        
    )
}

export default Blog;