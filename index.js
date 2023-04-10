const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
const createConnect = require('./db/db');
const PORT = process.env.PORT || 8000

// Enable CORS
app.use(cors());

// Enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json({ extended: true }))
app.use('/api/post', require('./routes/post.route'))

createConnect()

// create server 
app.listen(PORT, () => {
    console.log(`Server has started at PORT: ${PORT}`);
})

