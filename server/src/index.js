import express from "express"
import 'dotenv/config'
import { connectToDB } from "./db/index.js"
import app from "./app.js"
import { Category } from "./model/category.model.js"
import { Destination } from "./model/destination.model.js"



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
.then(()=>{
    app.get('/', (req, res) => {
      res.send('RepoSphere')
    })
    
    app.listen(port, () => {
      console.log(`The server is running on http://localhost:${port}`)
    })

})
.catch(error=>{
    console.log(error)
})