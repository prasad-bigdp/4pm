const express = require('express');
const app = express()
app.use(express.json())
app.get('/prasad', (req, res) =>
{
    const users = [{
        name: "prasad",
        age:23
    },
        {
            name: "raj",
            age:55
    }]
   res.send(users)
})
app.listen(8180, () =>
{
    console.log("port started")
})