const express = require('express');
const app = express();

require('./db/conn')
const router = require('./router/student')
const port = process.env.PORT || 9000;

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`Listening to the port ${port}`)
})