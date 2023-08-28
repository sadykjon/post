import React from "react";
import Home from "./home";
import Post from "../Components/post/post";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/post' element={<Post/>} />
      </Routes>
    </div>
  )
}
export default Main


































// import React from "react";
// import Home from "./home";
// import video from "../Components/video/ЭВМ СРС очистка пк.mp4"
// import Navbar from "../Components/navbar/navbar";
// import UploadVideo from "../Components/upload-video/upload-video";
// function Main() {
//   return (
//     <div className="App">
//       <Navbar />
//       <UploadVideo />
//       <div style={{ textAlign: "center" }}>
//         <video poster='https://gamerwall.pro/uploads/posts/2022-03/1647895652_3-gamerwall-pro-p-yegipet-fon-krasivie-4.jpg' controls preload='auto' style={{ width: "700px", height: "500px", border: "1px solid #ccc" }}>
//           <source src={video} type='video/mp4' />
//         </video>
//         <h1 style={{ textAlign: "center", fontFamily: "Arial", color: "#333" }}>
//           My Video Title
//         </h1>
//         <p style={{ textAlign: "center", fontFamily: "Verdana", color: "#666" }}>
//           This is a description of my video.
//         </p>
//       </div>

//       <Home />
//     </div>
//   );
// }

// export default Main;