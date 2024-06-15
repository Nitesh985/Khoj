import express from "express"
import 'dotenv/config'
import { connectToDB } from "./db"
const app = express()
import { Category } from "./model/category.model"



const categories = [
  "Lakes",
  "Temples",
  "Stupas",
  "Cave",
  "Waterfall",
  "Hiking Places",
  "Adventurous Places",
  "Mountains",
  "Nature & Wildlife"
]

const port = process.env.PORT || 3000

connectToDB()
.then(async ()=>{
    await Category.insertMany(categories)
    
})
.then(()=>{
    app.get('/', (req, res) => {
      res.send('RepoSphere')
    })
    
    app.listen(port, () => {
      console.log(`The server is running on http://localhost:${port}`)
    })

})
.catch(error=>{
    console.log(error.message || "Mongodb connection failed")
})