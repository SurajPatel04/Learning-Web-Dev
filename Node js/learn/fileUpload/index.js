import express from "express"
import path from "path"
import multer from "multer";


// multer part
const storage = multer.diskStorage({
    // cb is call back
    destination: function(req, file, cb){
        // in null part we can use error handling like user is login
        return cb(null, "./uploads");
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
});

// multer part
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    storage,
    fileFilter(req, file, cb) {
    // Check extension
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
      // reject with an error and “false” to skip saving
      return cb(new Error("Please upload a valid image file (.jpg, .jpeg, .png)"), false);
    }
    cb(null, true);  // accept the file
  }
})

// express part
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}));

// ejs part
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));


app.get("/",(req, res)=>{
    return res.render("homepage")
})

// Single upload
app.post("/upload", upload.single("profileImage"),(req, res)=>{
    console.log(req.file);
    return res.redirect("/")
})

// Multiple Upload
app.post("/upload",upload.fields([
    { name: "profileImage"}, 
    {name: "coverImage"}]), (req, res)=>{
    return res.redirect("/")
})
app.listen(3000)