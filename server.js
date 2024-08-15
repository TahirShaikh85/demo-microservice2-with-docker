const express = require('express');
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send("This is the second microservice")
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} build by ${process.env.DEVELOPER}`)
})