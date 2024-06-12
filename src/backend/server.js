import express from 'express'

import dotenv from 'dotenv';
import movies from "./routes/movies.js";
import cors from 'cors';
const app = express();
dotenv.config();
app.use(cors())


const PORT = process.env.EXPRESS_PORT || 4000;

app.use('/movies', movies)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



