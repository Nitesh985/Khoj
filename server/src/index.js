import express from "express"
import 'dotenv/config'
import { connectToDB } from "./db"
const app = express()


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