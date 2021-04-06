const express = require('express');
const mongoose = require('mongoose');

// require environmental variables
require('dotenv').config();

// route requirements
const api = require('./routes/api');

const app = express();

const PORT = process.env.PORT || 3001;

// MongoDB connection
mongoose
	.connect(process.env.MONGODB_URI || process.env.MONGO_LOCAL_URI, {
		useCreateIndex: true,
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(console.log('MongoDB connected'))
	.catch((err) => console.log('MDB Connection Error:', err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api', api);

// Connect Express Server
app.listen(PORT, () => {
	console.log(`Server listening on PORT: ${PORT}`);
});
