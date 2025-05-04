import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());

app.get("/api/user", (req, res) => {
  res.json({ messgae: `Hello, ${req.query.name}` });
});

const PORT = process.env.PORT || 3001;

const __dirname = path.resolve();


/** serve all file form static dist folder */
app.use(express.static(path.join(__dirname, "/client/dist")));

/** all routes that don't match before */
app.get('/', (_, res) => {
    res.sendFile(path.resolve(__dirname, '/client/dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});
