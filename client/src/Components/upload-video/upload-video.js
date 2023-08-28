import React, {useState} from "react";
import styles from "./upload-video.module.css"
import { postServices } from "../../http/post-services";

const initialState={
    title:"",
    description:"",
    video:null
}

const UploadVideo=() =>{
    const [video, setVideo]=useState(initialState)
    const handleChangeInput=(e)=>{
        setVideo({
            ...video,[e.target.name]:e.target.value
        })  
    }
    const handleChangeFile=(e)=>{
        setVideo({
            ...video,video:e.target.files[0]
        })
    }
    const handleSubmit=async (e) =>{
        e.preventDefault()
        const form=new FormData()
        form.append('title',video.title)
        form.append('description',video.description)
        form.append('video',video.video)
        try{
            const data=await postServices.createVideo(form)
            console.log("data<<<",data);
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className="container">
       <div className={styles.post_video}>
        <h1>Загрузка видео</h1>
        <form  onSubmit={handleSubmit} encType="multipart/form-data">
            <input onChange={handleChangeInput}
             type="text"
             name="title"
              placeholder="title" />
            <textarea
              onChange={handleChangeInput} 
             placeholder="description"
            name="description"
            cols="30"
            rows="10">
            </textarea>
            <input onChange={handleChangeFile}  type="file" name="" id="" />
            <div>
                <button type="submit">Загрузить</button>
            </div>
        </form>
       </div>
    </div>
  );
}

export default UploadVideo;


































































// import React, { useState } from 'react';





// function UploadVideo() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleUpload = () => {
//     // Отправить данные на сервер (название, описание и файл)
//     // Можно использовать Fetch API или другую библиотеку для работы с сетью (например, axios)
//     // Данные можно отправить в формате JSON или FormData

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('file', selectedFile);

//     // Пример использования Fetch API для отправки данных
//     fetch('/api/video/add', {
//       method: 'POST',
//       body: formData
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Video uploaded successfully:', data);
//         // Обновить список видео или выполнить другие действия после успешной загрузки
//       })
//       .catch(error => {
//         console.error('Error uploading video:', error);
//         // Обработать ошибку загрузки видео
//       });
//   };

//   return (
//     <div className="container">
     

//       <div className="post">
//         <h1>Create a New Post</h1>

//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={event => setTitle(event.target.value)}
//           />
//         </div>

//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={event => setDescription(event.target.value)}
//           ></textarea>
//         </div>

//         <div>
//           <label htmlFor="file">Select File:</label>
//           <input
//             type="file"
//             id="file"
//             accept="video/mp4"
//             onChange={handleFileChange}
//           />
//           {selectedFile && <p>Selected file: {selectedFile.name}</p>}
//         </div>

//         <button onClick={handleUpload}>Upload</button>
//       </div>
//     </div>
//   );
// }

// export default UploadVideo;
