import express from 'express'
import axios from "axios";
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
dotenv.config();
app.use(cors())


const PORT = process.env.PORT || 3001;

app.get('/movie', async (req, res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        })
        res.send(response.data)
    } catch (e) {
        console.error(`Error: ${e}`)
        res.status(500).send(`Something went wrong: ${e}`)
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});