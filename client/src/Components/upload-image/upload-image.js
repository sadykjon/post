import React, {useState} from "react";
import s from "./upload-image.module.css";
import { postServices } from "../../http/post-services";




const UploadImage = () =>{ 
    const [image,setImage]=useState({
        title:"",
        brand:"",
        catygory:"",
        price:0,
        description:"",
        image:null
    })
      const handleChangeInput=(e)=>{
          setImage({
              ...image,[e.target.name]:e.target.value
          })  
      }
      const handleChangeFile=(e)=>{
          setImage({
              ...image,image:e.target.files[0]
          })
      }
      const handleSubmit=async (e) =>{
          e.preventDefault()
          const form=new FormData()
          form.append('title',image.title)
          form.append('brand',image.description)
          form.append('catygory',image.catygory)
          form.append('price',image.price)
          form.append('description',image.description)
          form.append('image',image.image)
          try{
              const data=await postServices.createPost(form)
              console.log("data<<<",data);
          }catch(err){
              console.log(err);
          }
      }

  return (
    <div className="container">
      <div className={s.content}>
        <h2>Загрузка Фото</h2>
        <form  onSubmit={handleSubmit} encType="multipart/form-data">
          <input onChange={handleChangeInput} placeholder="title" type="text" name="title" id="" />
          <input onChange={handleChangeInput} placeholder="brand" type="text" name="brand" id="" />
          <input onChange={handleChangeInput} placeholder="category" type="text" name="category" id="" />
          <input onChange={handleChangeInput} placeholder="price" type="number" name="price" id="" />
          <textarea
          onChange={handleChangeInput}
            placeholder="description"
            name="description"
            cols="30"
            rows="10"
          ></textarea>
          <input  onChange={handleChangeFile} type="file" name="image" id="" />
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default UploadImage;