import './App.css';
import Main from './Main';
import NavBar from './NavBar';
import logo from "./logo.png";
import video from "./websiteteaservid.mp4";
// import logo from "./logoColors/vintagelogo.png";

// THINGS TO LOOK INTO -
    // - SUBSCRIBE TO EMAILS
    // - OVERALL LAYOUT
    // - BLOG LAYOUT, MODAL??
    // - SHOPIFY

function App() {
  return (
    <>
    <div id="nav-logo-div">
      {/* <video id="header-vid" src={video} type="video/mp4" loop={true} muted={true} autoPlay={true} playsInline={true}></video> */}
      <img id="header-logo" src={logo}></img>
    </div>
    <NavBar />
    <Main />
    </>
  );
}

export default App;



