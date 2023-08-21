const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({
	origin: '*'
}));


const MONGODB_URI="mongodb+srv://it4409:it4409-soict@lamdb-crud.qd3s7vv.mongodb.net/?retryWrites=true&w=majority"
const PORT = 8000;

mongoose.connect(
	MONGODB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Connected to MongoDB");
		}
	}
);
app.use(bodyParser.json());

const blogRouter = require("./routes/BlogRoutes");
app.use("/", blogRouter);



app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`));
