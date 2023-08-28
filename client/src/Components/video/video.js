import React, {useState,useEffect} from "react";
import { postServices } from "../../http/post-services";


const Video = () => {
    const [video,setVideo]=useState([])
    useEffect(()=>{
        const allVideo=async()=>{
            const data=await postServices.getVideo()
            console.log("dataVideo", data)
            setVideo(data.data)
        }
        allVideo()
    },[])
    return (
        <div className="container" >
            {
                video.map((elem,i)=>{
                    return( 
                    <div className="content">
                <video className="video" controls>
                    <source src={`http://localhost:7771/${elem.video}`} type="video/mp4" />
                </video>
                <h2>{elem.title}</h2>
                <p>{elem.description}</p>
            </div>
                )
                })
            }
        </div>
    );
}

export default Video;