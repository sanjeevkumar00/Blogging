const express = require("express")
const app = express()
const mongoose = require("mongoose")
const route = require("./routes/route")


app.use(express.json())

mongoose.connect("mongodb+srv://rizwan786developer:rizwan786@cluster0.raugz1h.mongodb.net/BlogingSite",{
    useNewUrlParser: true
}).then(()=> console.log("MongoDB is Connected"))
.catch(error => console.log("Error in MongoDB url",error))

app.use("/api",route)


const port = 3000
app.listen(port, function(){
    console.log(`server is running on port ${port}`)
})