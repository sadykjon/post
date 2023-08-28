const express = require('express')
const mongoose = require('mongoose')
const VideoModel = require("./models/Video")
const PostModel = require("./models/Post")
const multer = require('multer')
const path = require('path')
const cors = require("cors")



const app = express()
app.use(express.json())
app.use(cors())


mongoose
    .connect("mongodb+srv://admin:admin@cluster0.hcugyq1.mongodb.net/post?retryWrites=true&w=majority")
    .then(() => console.log("DB OK"))
    .catch((err) => console.log("DB ERROR", err))
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname = "video") {
            cb(null, "uploads/videos/")
        } else if (file.fieldname === "image") {
            cb(null, "uploads/images")

        } else {
            cb(new Error("Invaild file type"))
        }

    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        const name = file.originalname.replace(ext, "").toLocaleLowerCase().split(" ").join("-") + "-" + Date.now()
        cb(null, name + ext)

    },
})


const fileFilter = function (req, file, cb) {
    if (file.fieldname === "video") {
        const filetypes = /mp4|mov/
        const mimetype = filetypes.test(file.mimetype)
        const extname = filetypes.test(
            path.extname(file.originalname).toLowerCase())
        if (mimetype && extname) {
            return cb(null, true)

        }
        cb(new Error("only videos with MP4 or MOV formate are Allowed."))

    } else if (file.fieldname === "image") {
        const filetypes = /jpeg|jpg|png/
        const mimetype = filetypes.test(file.mimetype)
        const extname = filetypes.test(
            path.extname(file.originalname).toLowerCase())
        if (mimetype && extname) {
            return cb(null, true)
        }
        cb(new Error("only videos with JPEG,JPG or PNG formate are Allowed."))

    } else {
        cb(new Error("Invalid file type"))
    }
}

const upload = multer({ storage, fileFilter })
app.use('/uploads', express.static("uploads"))


app.post("/api/video/add", upload.single('video'), async (req, res) => {
    try {
        if (!req.file) {
            throw new Error("No video file uploaded")
        }
        const { title, description } = req.body
        const video = req.file.path
        const uploadVideo = new VideoModel({ title, description, video })

        const newVideo = await uploadVideo.save()
        res.status(201).json(newVideo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

app.get("/api/video", async (req, res) => {
    try {
        const upload = await VideoModel.find()
        res.json(upload)
    } catch (err) {
        res.status(400).json({ message: "Video not found" })
    }
})

app.post("/api/image/add", upload.single("image"), async (req, res) => {
    try {
        const { title, description, brand, category, price } = req.body
        const image = `http://localhost:7771/${req.file.path}`
        const post = new PostModel({
            title,
            brand,
            category,
            price,
            description,
            image,
        })
        await post.save()
        res.status(201).json(post)
    } catch (err) {
        res.status(500).json({ message: "Faild to add Post" })
    }
})

app.get("/api/image", async (req, res) => {
    try {
        const post = await PostModel.find()
        res.json(post)
    } catch (err) {
        res.status(404).json({ message: 'Post not Found' })
    }
})
















const PORT = 7771
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})
