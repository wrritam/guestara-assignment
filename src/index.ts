import express from "express";
import bodyParser from "body-parser";

const app = express();

const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("this is home page!"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
