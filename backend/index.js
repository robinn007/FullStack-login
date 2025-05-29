const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter'); // Ensure this is the correct path to your AuthRouter.js file
const ProductRouter = require('./routes/ProductRouter');// Ensure this is the correct path to your ProductRouter.js file


require('dotenv').config();
require('./models/db'); // Ensure this is the correct path to your db.js file
const PORT = process.env.PORT || 5000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter); // Use the AuthRouter for authentication routes
app.use('/products', ProductRouter); // Use the ProductRouter for product-related routes


app.listen(PORT, () => {   
  console.log(`Server is running on port ${PORT}`);
});