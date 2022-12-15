import React from "react";
import cab from "./cabaudio.mp3";
import soho from "./SoHo.mp3";
import red from "./red.mp3";
import ui from "./ui.mp3";
import intro from "./Intro.mp3";
import { BsSpotify } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";

function Blog() {
    return (
        
        <div id="blog-section">
            <div id="left-blog">
                <h1 className="blog-letters">M</h1>
                <h1 className="blog-letters">E</h1>
                <h1 className="blog-letters">+</h1>
                <h1 className="blog-letters">N</h1>
                <h1 className="blog-letters">O</h1>
                <h1 className="blog-letters">B</h1>
                <h1 className="blog-letters">O</h1>
                <h1 className="blog-letters">D</h1>
                <h1 className="blog-letters">Y</h1>
            </div>
            <div id="middle-blog">
                <div className="song-div">
                <h2 className="song-title">THE CAB</h2>
                <audio src={cab} controls></audio>
                </div>
                <div className="song-div">
                <h2 className="song-title">SOHO</h2>
                <audio src={soho} controls></audio>
                </div>
                <div className="song-div">
                <h2 className="song-title">THE RED</h2>
                <audio src={red} controls></audio>
                </div>
                <div className="song-div">
                <h2 className="song-title">U + I - LIVE IN STUDIO</h2>
                <audio src={ui} controls></audio>
                </div>
                <div className="song-div">
                <h2 className="song-title">INTRO</h2>
                <audio src={intro} controls></audio>
                </div>
                <div className="contain">
                <h2 id="mp3-header">LINK TO ACCESS AND DOWNLOAD THESE MP3s:</h2>
                <a href="https://drive.google.com/drive/folders/1Nmg6PFN-jlB773nq80edfjf1artXugrt?usp=sharing" className="a-link" target="_blank">MP3s</a>
                </div>
            </div>
            <div id="right-blog">
                <h1 className="blog-letters">M</h1>
                <h1 className="blog-letters">E</h1>
                <h1 className="blog-letters">+</h1>
                <h1 className="blog-letters">N</h1>
                <h1 className="blog-letters">O</h1>
                <h1 className="blog-letters">B</h1>
                <h1 className="blog-letters">O</h1>
                <h1 className="blog-letters">D</h1>
                <h1 className="blog-letters">Y</h1>
            </div>
        </div>
        
    )
}

export default Blog;