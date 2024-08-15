const express = require('express');
const PORT = process.env.PORT;
const app = express();
const VideoSchema = require('./database/VideoModel');

app.use(express.json());

// database connection
require('./database/connection')();


// health route
app.get('/', (req, res) => {
    return res.status(200).send("This is the second microservice of learning-microservice containerizatin on EC2")
})

// get data from db
app.get('/videoData', async (req, res) => {
    try {
        const videoData = await VideoSchema.find();

        if (!videoData) {
            return res.status(400).json({ message: "No data yet!" });
        }

        return res.status(200).json(videoData);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error while fetching video data" })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} build by ${process.env.DEVELOPER}`)
})