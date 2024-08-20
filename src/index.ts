import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("this is home page!"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
