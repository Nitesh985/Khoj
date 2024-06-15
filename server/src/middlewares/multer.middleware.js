import multer from "multer"


const upload = multer.diskStorage({
    destination:(filename)=>{

    }
})


export { upload }